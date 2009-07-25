class JobsController < ApplicationController

  def index
    redirect_to(new_job_url)
  end
  
  def new
    @zones      = Zone.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"code")
    @types      = JobType.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"sort")
    @employees  = Employee.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"team")
    @job        = Job.new
    @job.date   = Date.today
  end
  
  def create
    begin
      Job.new_from_params(params[:job],current_user.company_id)
      render :action => "create.js.rjs" 
    rescue Exception => e
      @e = e
      render :action => "error.js.rjs"
    end
  end

end

