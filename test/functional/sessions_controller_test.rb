require File.dirname(__FILE__) + '/../test_helper'
require 'sessions_controller'

# Re-raise errors caught by the controller.
class SessionsController; def rescue_action(e) raise e end; end

class SessionsControllerTest < ActionController::TestCase
  # Be sure to include AuthenticatedTestHelper in test/test_helper.rb instead
  # Then, you can remove it from this and the units test.
  include AuthenticatedTestHelper

  fixtures :users

  def setup
    @controller = SessionsController.new
    @request    = ActionController::TestRequest.new
    @response   = ActionController::TestResponse.new
  end

  def test_should_login_and_redirect
    post :create, :login => 'admin', :password => 'test'
    assert session[:user_id]
    assert_response :redirect
  end

  def test_should_fail_login_and_not_redirect
    post :create, :login => 'admin', :password => 'bad password'
    assert_nil session[:user_id]
    assert_response :success
  end

  def test_should_logout
    login_as :admin
    get :destroy
    assert_nil session[:user_id]
    assert_response :redirect
  end

  def test_should_remember_me
    post :create, :login => 'admin', :password => 'test', :remember_me => "1"
    assert_not_nil @response.cookies["auth_token"]
  end

  def test_should_not_remember_me
    post :create, :login => 'admin', :password => 'test', :remember_me => "0"
    assert_nil @response.cookies["auth_token"]
  end
  
  def test_should_delete_token_on_logout
    login_as :admin
    get :destroy
    assert_equal @response.cookies["auth_token"], nil # was [] (Mickael)
  end

  def test_should_login_with_cookie
    users(:admin).remember_me
    @request.cookies["auth_token"] = cookie_for(:admin)
    get :new
    assert @controller.send(:logged_in?)
  end

  def test_should_fail_expired_cookie_login
    users(:admin).remember_me
    users(:admin).update_attribute :remember_token_expires_at, 5.minutes.ago
    @request.cookies["auth_token"] = cookie_for(:admin)
    get :new
    assert !@controller.send(:logged_in?)
  end

  def test_should_fail_cookie_login
    users(:admin).remember_me
    @request.cookies["auth_token"] = auth_token('invalid_auth_token')
    get :new
    assert !@controller.send(:logged_in?)
  end

  protected
    def auth_token(token)
      CGI::Cookie.new('name' => 'auth_token', 'value' => token)
    end
    
    def cookie_for(user)
      auth_token users(user).remember_token
    end
end
