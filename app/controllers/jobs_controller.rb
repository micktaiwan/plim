class JobsController < ApplicationController

  before_filter :verify_role

  def index
    redirect_to(new_job_url)
  end
  
  def new
    @zones = Zone.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"code")
    @types = JobType.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"sort")
    @employees =  Employee.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"team")
    @job = Job.new
    @job.date = Date.today
  end
  
  def create
    render :action => "create.js.rjs" 
  end

end

