class CasesController < ApplicationController

  before_filter :verify_role

  def index
    @cases = Case.find(:all,
      :conditions=>["company_id=?",self.current_user.company_id],
      :order=>"created_at")
  end

  def create
    @case = Case.new(params[:case])
    @case.company_id = self.current_user.company_id
    @case.save
    if @case.errors.empty?
      redirect_back_or_default('/cases')
      flash[:notice] = I18n.t(:created_msg)
    else
      render :action => 'new'
    end
  end
  
  def edit_form
    id = params[:id]
    @case = Case.find(id)
  end
  
  def update
    id = params[:id]
    @case = Case.find(id)
    if @case.update_attributes(params[:case]) # do a save
      redirect_back_or_default('/cases')
      flash[:notice] = I18n.t(:edited_msg)
    else
      render :action => 'edit_form'
    end
  end

end
