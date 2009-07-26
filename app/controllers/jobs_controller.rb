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
      job.job_type_id     = p[:job_type].to_i    
      job.serial_id   = Serial.get_or_create(p[:serial])
      job.phone_id    = Phone.get_or_create(p[:phone])
      job.ampm        = p[:ampm] # FIXME check value
      job.verify
      job.save!
      #render :action => "create.js.rjs" 
    rescue Exception => e
      @e = e
      render :action => "error.js.rjs"
    end
  end
  
  def edit_form
    id = params[:id]
    @job = Job.find(id)
    @zones      = Zone.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"code")
    @types      = JobType.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"sort")
    @employees  = Employee.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"team")
    render(:partial=>'edit')
  end

  def edit
    begin
      id = params[:id]
      p = params[:job]
      @job = Job.find(id)
      @job.date        = p[:date]
      @job.zone_id     = p[:zone_id].to_i    
      @job.employee_id = p[:employee_id].to_i    
      @job.user_id     = current_user.id    
      @job.job_type_id     = p[:job_type_id].to_i    
      @job.serial_id   = Serial.get_or_create(p[:serial][:serial])
      @job.phone_id    = Phone.get_or_create(p[:phone][:phone])
      @job.ampm        = p[:ampm] # FIXME check value
      @job.save!
      @job_tr = render_to_string(:partial=>'job')
      #render :action => "edit.js.rjs" 
    rescue Exception => e
      @e = e
      render :action => "edit_error.js.rjs"
    end
  end


  def search
    @zones      = Zone.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"code")
    @types      = JobType.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"sort")
    @employees  = Employee.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"team")
    @sort = [[I18n.t(:mdate),'date'], [I18n.t(:team),'employees.team'], [I18n.t(:zone),'zones.code'], [I18n.t(:serial),'serials.serial'], [I18n.t(:phone),'phones.phone'], [I18n.t(:job_type),'job_types.sort']]
  end
  
  def do_search
    begin  
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
      cond << "job_type_id='#{job_type}'" if job_type != ''
      cond << "employee_id='#{team}'" if team != ''
      if serial != ''
        serial_id = Serial.find_by_serial(serial)
        if not serial_id
          @results = I18n.t(:serial_not_found)
          return
        end
        cond << "serial_id='#{serial_id.id}'"
      end
      if phone != ''
        phone_id = Phone.find_by_phone(phone)
        if not phone_id
          @results = I18n.t(:phone_not_found)
          return
        end
        cond << "phone_id='#{phone_id.id}'" if phone_id
      end

      inc = ['zone','employee','result','phone','serial','job_type']    
      if cond.size > 0
        @jobs = Job.find(:all, :conditions=>cond.join(" and "), :include=>inc, :order=>sort)
      else
        @jobs = Job.find(:all, :include=>inc, :order=>sort)
      end
      if @jobs.size == 0
        @results = I18n.t(:no_record_found)
        return
      end
      @results = render_to_string(:partial=>'results.erb')
      #render :action => "do_search.js.rjs"
    rescue Exception=>e
      @results = e.message
    end  
  end

end

