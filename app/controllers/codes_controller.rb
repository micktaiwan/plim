class CodesController < ApplicationController

  before_filter :verify_role

  def index
    @code_lists = CodeList.find(:all,
      :conditions=>["company_id=?",self.current_user.company_id],
      :order=>"name")
  end

  def new
    @code_list = CodeList.new
    #@code.sort = CodeList.find(:all, :conditions=>["company_id=?",self.current_user.company_id]).size    
  end

  def new_code
    id = params[:id]
    @code = Code.new
    @code.code_list_id = id
  end


  def create
    @code_list = CodeList.new(params[:code_list])
    @code_list.company_id = self.current_user.company_id
    @code_list.save
    if @code_list.errors.empty?
      redirect_back_or_default("/codes/edit_form/#{@code_list.id}")
      flash[:notice] = I18n.t(:created_msg)
    else
      render :action => 'new'
    end
  end

  def create_code
    @code = Code.new(params[:code])
    @code.code_list_id = params[:id].to_i
    @code.save
    if @code.errors.empty?
      redirect_back_or_default("/codes/edit_form/#{@code.code_list_id}")
      flash[:notice] = I18n.t(:created_msg)
    else
      render :action => 'new_code'
    end
  end

  
  def edit_form
    id = params[:id]
    @code_list = CodeList.find(id)
    @codes  = Code.find(:all, :conditions=>["code_list_id=?", id],
                              :order=>'code')
  end

  def edit_code_form
    id = params[:id]
    @code = Code.find(id)
  end

  
  def update
    id = params[:id]
    @code_list = CodeList.find(id)
    if @code_list.update_attributes(params[:code_list]) # do a save
      redirect_back_or_default('/codes')
      flash[:notice] = I18n.t(:edited_msg)
    else
      render :action => 'edit_form'
    end
  end

  def update_code
    id = params[:id]
    @code = Code.find(id)
    if @code.update_attributes(params[:code]) # do a save
      redirect_back_or_default("/codes/edit_form/#{@code.code_list_id}")
      flash[:notice] = I18n.t(:edited_msg)
    else
      render :action => 'edit_code_form'
    end
  end

  
  def destroy
    id = params[:id]
    #render(:text=>"Can not delete this type, as it is already used", :status=>:forbidden) and return if Job.find(:all, :conditions=>["code_id=?",id]).size > 0
    CodeList.destroy(id)
    render(:nothing=>true)
  end

  def destroy_code
    id = params[:id]
    Code.destroy(id)
    render(:nothing=>true)
  end


end

