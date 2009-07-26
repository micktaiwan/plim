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
      p = params[:job]
      job = Job.new
      job.date        = p[:date]
      job.company_id  = current_user.company_id
      job.zone_id     = p[:zone].to_i    
      job.employee_id = p[:employee].to_i    
      job.user_id     = current_user.id    
      job.type_id     = p[:job_type].to_i    
      job.serial_id   = Serial.get_or_create(p[:serial])
      job.phone_id    = Phone.get_or_create(p[:phone])
      job.ampm        = p[:ampm] # FIXME check value
      job.save!
      #render :action => "create.js.rjs" 
    rescue Exception => e
      @e = e
      render :action => "error.js.rjs"
    end
  end

  def search
    @zones      = Zone.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"code")
    @types      = JobType.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"sort")
    @employees  = Employee.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"team")
    @sort = [[I18n.t(:mdate),'date'], [I18n.t(:team),'employees.team']]
  end
  
  def do_search  
    sort = params[:sort]
    fromdate  = params[:fromdate]
    todate    = params[:todate]
    zone      = params[:s][:zone]
    job_type  = params[:s][:job_type]
    team      = params[:s][:team]
    serial    = params[:serial]
    phone     = params[:phone]
    cond = []
    cond << "date>='#{fromdate}'"   if fromdate != ''
    cond << "date<='#{todate}'"     if todate != ''
    cond << "zone_id='#{zone}'"     if zone != ''
    cond << "type_id='#{job_type}'" if job_type != ''
    cond << "employee_id='#{team}'" if team != ''
    if serial != ''
      serial_id = Serial.find_by_serial(serial)
      cond << "serial_id='#{serial_id.id}'" if serial_id
      @results = I18n.t(:serial_not_found)
      return
    end
    if phone != ''
      phone_id = Phone.find_by_phone(phone)
      cond << "phone_id='#{phone_id.id}'" if phone_id
      @results = I18n.t(:phone_not_found)
      return
    end

    
    if cond.size > 0
      @jobs = Job.find(:all, :conditions=>cond.join(" and "), :include=>['zone','employee'], :order=>sort)
    else
      @jobs = Job.find(:all, :include=>['zone','employee'], :order=>sort)
    end
    if @jobs.size == 0
      @results = I18n.t(:no_record_found)
      return
    end
    @results = render_to_string(:partial=>'results.erb')
    #render :action => "do_search.js.rjs"
  end

end

