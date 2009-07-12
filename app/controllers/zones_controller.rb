class ZonesController < ApplicationController

  before_filter :verify_role

  def index
    @zones = Zone.find(:all,
      :conditions=>["company_id=?",self.current_user.company_id],
      :order=>"code")
  end

  def create
    @zone = Zone.new(params[:zone])
    @zone.company_id = self.current_user.company_id
    @zone.save
    if @zone.errors.empty?
      redirect_back_or_default('/zones')
      flash[:notice] = I18n.t(:zone_created_msg)
    else
      render :action => 'new'
    end
  end
  
  def edit_form
    id = params[:id]
    @zone = Zone.find(id)
  end
  
  def update
    id = params[:id]
    @zone = Zone.find(id)
    if @zone.update_attributes(params[:zone]) # do a save
      redirect_back_or_default('/zones')
      flash[:notice] = I18n.t(:zone_edited_msg)
    else
      render :action => 'edit_form'
    end
  end

end
