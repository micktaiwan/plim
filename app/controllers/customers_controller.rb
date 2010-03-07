class CustomersController < ApplicationController

  protect_from_forgery :except => [:search, :search_autocomplete]


  def index
    session[:redirect_url] = "/customers/edit"
  end

  def create
    c = Customer.new(params['customer'])
    c.company_id = current_user.company_id
    c.save!
    p_id = params['phone_id']
    c.phone_customers.create(:phone_id=>p_id) if p_id
    redirect_to(session[:redirect_url]+"?customer_id=#{c.id}")
  end

  def new
    @customer = Customer.new
    render :layout => false
  end

  def edit
    render(:text=>'edit')
  end
  
  def search_bar # by name only
    render(:partial=>'search_bar')
  end

  def search_autocomplete
    name = params[:customer][:name]
    @search = Customer.find(:all,:conditions=>"name like '%#{name}%' and company_id in (#{current_user.company_id})", :order=>"name").collect(&:name)
    render(:inline => "<%= content_tag(:ul, @search.map { |t| content_tag(:li, h(t)) }) %>")
  end

  def search
    session[:customer_name] = name = params['customer']['name']
    name = name.gsub(/\\/, '\&\&').gsub(/'/, "''") 
    @phone = Phone.find_by_phone(params['phone'])
    @search = Customer.find(:all,:conditions=>"name like '%#{name}%' and company_id in (#{current_user.company_id})", :order=>"name")
    render :partial => "results"
  end
  
  def search_customers_by_phone
    #phone = params['phone']
    @phone = Phone.find_by_phone(params['phone'])
    if not @phone
      render(:text=>"no phone found, so no customer")
      return
    end
    @customer = Customer.new
    render(:partial=>'customer_list')
  end

end

