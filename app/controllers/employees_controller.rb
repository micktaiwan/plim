class EmployeesController < ApplicationController

  before_filter :verify_role

  def index
    @employees = Employee.find(:all,
      :conditions=>["company_id=?",self.current_user.company_id],
      :order=>"team")
  end

  def create
    @employee = Employee.new(params[:employee])
    @employee.company_id = self.current_user.company_id
    @employee.save
    if @employee.errors.empty?
      redirect_back_or_default('/employees')
      flash[:notice] = I18n.t(:created_msg)
    else
      render :action => 'new'
    end
  end
  
  def edit_form
    id = params[:id]
    @employee = Employee.find(id)
  end
  
  def update
    id = params[:id]
    @employee = Employee.find(id)
    if @employee.update_attributes(params[:employee]) # do a save
      redirect_back_or_default('/employees')
      flash[:notice] = I18n.t(:edited_msg)
    else
      render :action => 'edit_form'
    end
  end
 
end
