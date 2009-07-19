class LogActionsController < ApplicationController

  before_filter :verify_role

  def index
    @logs = ActionLog.find(:all,:conditions=>["company_id=?",current_user.company_id], :include=>['user'], :order=>"id desc", :limit=>50)
  end

end
