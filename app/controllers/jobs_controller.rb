class JobsController < ApplicationController

  def index
    redirect_to(new_job_url)
  end
  
  def new
    @zones = Zone.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"code")
    @types = JobType.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"sort")
    @employees =  Employee.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"team")
  end
  
  def create
    render(:nothing=>true)
  end

end

