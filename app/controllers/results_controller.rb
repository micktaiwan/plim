class ResultsController < ApplicationController

  before_filter :verify_role

  def index
    @results = Result.find(:all,
      :conditions=>["company_id=?",self.current_user.company_id],
      :order=>"sort")
  end

  def new
    @result = Result.new
    @result.sort = Result.find(:all, :conditions=>["company_id=?",self.current_user.company_id]).size    
  end

  def create
    @result = Result.new(params[:result])
    @result.company_id = self.current_user.company_id
    @result.save
    if @result.errors.empty?
      redirect_back_or_default('/results')
      flash[:notice] = I18n.t(:created_msg)
    else
      render :action => 'new'
    end
  end
  
  def edit_form
    id = params[:id]
    @result = Result.find(id)
    @jobs = Job.paginate(:all, :conditions=>["result_id=?",id], :page=>params[:page], :per_page=>10)
  end
  
  def update
    id = params[:id]
    @result = Result.find(id)
    if @result.update_attributes(params[:result]) # do a save
      redirect_back_or_default('/results')
      flash[:notice] = I18n.t(:edited_msg)
    else
      render :action => 'edit_form'
    end
  end
  
  def destroy
    id = params[:id]
    render(:text=>"Can not delete this type, as it is already used", :status=>:forbidden) and return if Job.find(:all, :conditions=>["result_id=?",id]).size > 0
    Result.destroy(id)
    render(:nothing=>true)
  end

end

