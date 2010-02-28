class CustomersController < ApplicationController

  protect_from_forgery :except => [:search, :search_autocomplete]


  def index
  end

  def create
    c = Customer.new(params['customer'])
    c.company_id = current_user.company_id
    c.save!
    p_id = params['phone_id']
    c.phone_customers.create(:phone_id=>p_id) if p_id
    render(:nothing=>true)
  end

  def new
    @customer = Customer.new
    render :layout => false
  end

  def search_autocomplete
    name = params[:customer][:name]
    @search = Customer.find(:all,:conditions=>"name like '%#{name}%' and company_id in (#{current_user.company_id})", :order=>"name").collect(&:name)
    render(:inline => "<%= content_tag(:ul, @search.map { |t| content_tag(:li, h(t)) }) %>")
  end

  def search
    session[:customer_name] = name = params['customer']['name']
    name = name.gsub(/\\/, '\&\&').gsub(/'/, "''") 
    @search = Customer.find(:all,:conditions=>"name like '%#{name}%' and company_id in (#{current_user.company_id})", :order=>"name")
    if @search.size > 0
      render :partial => "results"
    else
      render :text => "No results"
    end
  end

end

