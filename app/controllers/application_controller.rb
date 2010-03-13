# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  helper :all # include all helpers, all the time
  layout 'general'
  before_filter :set_globals
  before_filter :set_locale
  before_filter :log_action
  include AuthenticatedSystem

  # See ActionController::RequestForgeryProtection for details
  # Uncomment the :secret if you're not using the cookie session store
  protect_from_forgery # :secret => '6cad312a250e39cfea2587c493970d34'
  
  # See ActionController::Base for details 
  # Uncomment this to filter the contents of submitted sensitive data parameters
  # from your application log (in this case, all fields with names like "password"). 
  filter_parameter_logging :password
  
 
  def set_locale
    locale = I18n.locale = session[:locale] || I18n.default_locale
    p = params[:locale]
    return if not p
    if p == ''
      locale = (locale=='en'? 'zh':'en')
    else
      locale = p
    end
    session[:locale] = I18n.locale = locale
    
    #OPTIMIZE better locales handling
    #locale = params[:locale] || session[:locale] || (this_user.site_language if is_logged_in?) || I18n.default_locale
    #locale = AVAILABLE_LOCALES.keys.include?(locale) ? locale : I18n.default_locale
    #session[:locale] = I18n.locale = locale
  end
  
  def verify_role(role=100)
    render(:text=>'401 - Unauthorized', :status=>:unauthorized) if self.current_user==nil or self.current_user.role_id > role
  end

  def log_action
    @action_log = ActionLog.new
    # who is doing the activity?
    @action_log.session_id = session.session_id #record the session
    @action_log.browser = request.env['HTTP_USER_AGENT']
    @action_log.ip = request.env['HTTP_X_FORWARDED_FOR'] || request.env['REMOTE_ADDR']
    # what are they doing?
    @action_log.controller        = controller_name
    @action_log.action            = action_name
    @action_log.controller_action = controller_name + "/" + action_name
    @action_log.params            = params.inspect # wrap this in an unless block if it might contain a password
    @action_log.user_id           = session[:user_id]
    @action_log.company_id        = current_user.company_id if session[:user_id]
    @action_log.save!
  end  

  def set_globals
    @current_action     = action_name
    @current_controller = controller_name
    @connected_users = User.find(:all, :conditions=>"datediff(now(),last_login)<30", :order=>'last_login desc', :limit=>15)
  end

end

