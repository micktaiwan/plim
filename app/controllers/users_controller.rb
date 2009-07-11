class UsersController < ApplicationController
  # Be sure to include AuthenticationSystem in Application Controller instead
  include AuthenticatedSystem
  
  before_filter :verify_role

  def index
    @users = User.find(:all,
      :conditions=>["company_id=?",self.current_user.company_id],
      :order=>"role_id, login")
  end

  def new
    @user = User.new
  end

  def create
    cookies.delete :auth_token
    # protects against session fixation attacks, wreaks havoc with 
    # request forgery protection.
    # uncomment at your own risk
    # reset_session
    @user = User.new(params[:user])
    @user.company_id = self.current_user.company_id
    @user.save
    if @user.errors.empty?
      # self.current_user = @user
      redirect_back_or_default('/users')
      flash[:notice] = I18n.t(:user_created_msg)
    else
      render :action => 'new'
    end
  end
  
  def edit_form
    id = params[:id]
    @user = User.find(id)
  end
  
  def update
    id = params[:id]
    @user = User.find(id)
    if @user.update_attributes(params[:user]) # do a save
      # self.current_user = @user
      redirect_back_or_default('/users')
      flash[:notice] = I18n.t(:user_edited_msg)
    else
      render :action => 'edit_form'
    end
  end

private
  
  def verify_role
    render(:text=>'401 - Unauthorized', :status=>:unauthorized) if self.current_user==nil or self.current_user.role_id != 100
  end

end

