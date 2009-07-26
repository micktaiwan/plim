class JobsController < ApplicationController

  before_filter { |c| c.verify_role(200) if not ['search','do_search'].include?(c.action_name) }


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
    set_dropboxes
    render(:partial=>'edit')
  end

  def edit
    begin
      id = params[:id]
      p = params[:job]
      @job = Job.find(id)
      @job.date         = p[:date]
      @job.zone_id      = p[:zone_id].to_i    
      @job.employee_id  = p[:employee_id].to_i    
      @job.user_id      = current_user.id    
      @job.job_type_id  = p[:job_type_id].to_i    
      @job.serial_id    = Serial.get_or_create(p[:serial][:serial])
      @job.phone_id     = Phone.get_or_create(p[:phone][:phone])
      @job.ampm         = p[:ampm] # FIXME check value
      result = p[:result_id].to_i
      result = nil if result == 0
      @job.result_id    = result
      @job.memo         = p[:memo]
      @job.save!
      @job_tr = render_to_string(:partial=>'job')
      #render :action => "edit.js.rjs" 
    rescue Exception => e
      @e = e
      render :action => "edit_error.js.rjs"
    end
  end


  def search
    set_dropboxes
    @sort = [[I18n.t(:mdate),'date, employees.team'], [I18n.t(:team),'employees.team, date'], [I18n.t(:zone),'zones.code, date, employees.team'], [I18n.t(:serial),'serials.serial'], [I18n.t(:phone),'phones.phone'], [I18n.t(:job_type),'job_types.sort'], [I18n.t(:result),'results.sort'], [I18n.t(:create_time),'id'], [I18n.t(:last_edit_time),'updated_at']]
  end
  
  def do_search
    begin  
      sort      = params[:sort]
      fromdate  = params[:fromdate]
      todate    = params[:todate]
      zone      = params[:s][:zone]
      job_type  = params[:s][:job_type]
      team      = params[:s][:team]
      serial    = params[:serial]
      phone     = params[:phone]
      result    = params[:job][:result_id]
      cond = []
      cond << "date>='#{fromdate}'"       if fromdate != ''
      cond << "date<='#{todate}'"         if todate != ''
      cond << "zone_id='#{zone}'"         if zone != ''
      cond << "job_type_id='#{job_type}'" if job_type != ''
      cond << "employee_id='#{team}'"     if team != ''
      if result != ''
        if result=="nil"
          cond << "result_id is null"
        else
          cond << "result_id='#{result}'"
        end  
      end          
      if serial != ''
        serial_id = Serial.find_by_serial(serial)
        @results = I18n.t(:serial_not_found) and return if not serial_id
        cond << "serial_id='#{serial_id.id}'"
      end
      if phone != ''
        phone_id = Phone.find_by_phone(phone)
        @results = I18n.t(:phone_not_found) and return if not phone_id
        cond << "phone_id='#{phone_id.id}'"
      end

      inc = ['zone','employee','result','phone','serial','job_type']    
      @jobs = Job.find(:all, :include=>inc, :order=>sort, :conditions=>(cond.size>0 ? cond.join(" and ") : nil))
      @results = I18n.t(:no_record_found) and return if @jobs.size == 0
      @results = render_to_string(:partial=>'results.erb')
      #render :action => "do_search.js.rjs"
    rescue Exception=>e
      @results = e.message
    end  
  end
  
private

  def set_dropboxes
    @zones      = Zone.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"code")
    @types      = JobType.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"sort")
    @employees  = Employee.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"team")
    @results    = Result.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"sort").map {|r| [r.name, r.id]}
    @results.insert(0,[I18n.t(:nil_result),"nil"])
  end
  

end

