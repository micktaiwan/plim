class JobTypesController < ApplicationController

  before_filter :verify_role

  def index
    @jobtypes = JobType.find(:all,
      :conditions=>["company_id=?",self.current_user.company_id],
      :order=>"sort")
  end

  def new
    @jobtype = JobType.new
    @jobtype.sort = JobType.find(:all, :conditions=>["company_id=?",self.current_user.company_id]).size    
  end

  def create
    @jobtype = JobType.new(params[:jobtype])
    @jobtype.company_id = self.current_user.company_id
    @jobtype.save
    if @jobtype.errors.empty?
      redirect_back_or_default('/job_types')
      flash[:notice] = I18n.t(:created_msg)
    else
      render :action => 'new'
    end
  end
  
  def edit_form
    id = params[:id]
    @jobtype = JobType.find(id)
    @jobs = Job.find(:all, :conditions=>["job_type_id=?",id])
  end
  
  def update
    id = params[:id]
    @jobtype = JobType.find(id)
    if @jobtype.update_attributes(params[:jobtype]) # do a save
      redirect_back_or_default('/job_types')
      flash[:notice] = I18n.t(:edited_msg)
    else
      render :action => 'edit_form'
    end
  end
  
  def destroy
    id = params[:id]
    render(:text=>"Can not delete this type, as it is already used", :status=>:forbidden) and return if Job.find(:all, :conditions=>["job_type_id=?",id]).size > 0
    JobType.destroy(id)
    render(:nothing=>true)
  end

end
