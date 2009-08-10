class LogActionsController < ApplicationController

  before_filter :verify_role

  def index
    @logs = ActionLog.paginate(:all,:conditions=>["company_id=?",current_user.company_id], :include=>['user'], :order=>"id desc", :page=>params[:page], :per_page=>25)
    @results = render_to_string(:partial=>'results')
  end

  def group_by
    @group_by = params[:by] || session[:log_group_by]
    session[:log_group_by] = @group_by
    @logs = ActionLog.paginate_by_sql("select users.name as uname, al.controller_action, al.controller, al. browser, count(*) as C from action_logs al left outer join users on users.id=al.user_id where al.company_id='#{current_user.company_id}' group by #{@group_by} order by C desc", :page=>params[:page], :per_page=>25)
    @results = render_to_string(:partial=>'results')
  end

end

