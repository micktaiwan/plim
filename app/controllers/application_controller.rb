# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  helper :all # include all helpers, all the time
  layout 'general'
  before_filter :set_locale
  include AuthenticatedSystem


  # See ActionController::RequestForgeryProtection for details
  # Uncomment the :secret if you're not using the cookie session store
  protect_from_forgery # :secret => '6cad312a250e39cfea2587c493970d34'
  
  # See ActionController::Base for details 
  # Uncomment this to filter the contents of submitted sensitive data parameters
  # from your application log (in this case, all fields with names like "password"). 
  # filter_parameter_logging :password
  
 
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
    
    # TODO
    #locale = params[:locale] || session[:locale] || (this_user.site_language if is_logged_in?) || I18n.default_locale
    #locale = AVAILABLE_LOCALES.keys.include?(locale) ? locale : I18n.default_locale
    #session[:locale] = I18n.locale = locale
  end
  
  def verify_role
    render(:text=>'401 - Unauthorized', :status=>:unauthorized) if self.current_user==nil or self.current_user.role_id != 100
  end

end