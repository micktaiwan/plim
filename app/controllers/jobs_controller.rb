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
    @serial_cases = ""
    @phone_cases = ""
    @types.each { |t| 
      @serial_cases += "case \"#{t.id}\": return #{t.serial_length};"
      @phone_cases += "case \"#{t.id}\": return #{t.phone_length};"
      }
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
  
  def do_search(print=nil)
    begin  
      sort      = params[:sort]     || session['search_sort']
      fromdate  = params[:fromdate] || session['search_fromdate']
      todate    = params[:todate]   || session['search_todate']
      zone      = (params[:s] ? params[:s][:zone] : nil)      || session['search_zone']
      job_type  = (params[:s] ? params[:s][:job_type] : nil)  || session['search_job_type']
      team      = (params[:s] ? params[:s][:team] : nil)      || session['search_team']
      serial    = params[:serial]   || session['search_serial']
      phone     = params[:phone]    || session['search_phone']
      result    = (params[:job] ? params[:job][:result_id] : nil) || session['search_result']

      # for pagination and print
      session['search_sort']      = sort
      session['search_fromdate']  = fromdate
      session['search_todate']    = todate
      session['search_zone']      = zone
      session['search_job_type']  = job_type
      session['search_team']      = team
      session['search_serial']    = serial
      session['search_phone']     = phone
      session['search_result']    = result
      
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
      if(print)
        size = 1000
      else
        size = 10
      end        
      @jobs = Job.paginate(:all, :include=>inc, :order=>sort, :conditions=>(cond.size>0 ? cond.join(" and ") : nil), :page=>params[:page], :per_page=>size)
      @results = I18n.t(:no_record_found) and return if @jobs.size == 0
      @results = render_to_string(:partial=>'results.erb')
      #render :action => "do_search.js.rjs"
    rescue Exception=>e
      @results = e.message
    end  
  end
  
  # display a page that give user choices
  def result_input
    @employees  = Employee.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"team")
    @results    = Result.find(:all,:conditions=>["company_id=?",current_user.company_id],:order=>"sort").map {|r| [r.name, r.id]}
  end
  
  def do_result_input
    result_id = params[:job][:result_id]
    team      = params[:job][:team]
    date      = params[:date]
    phone     = params[:phone]
    error = ""
    error += I18n.t(:result)+" "+I18n.t(:can_not_be_blank)+"<br/>" if result_id == ""
    error += I18n.t(:team)  +" "+I18n.t(:can_not_be_blank)+"<br/>" if team == ""
    error += I18n.t(:mdate) +" "+I18n.t(:can_not_be_blank)+"<br/>" if date == ""
    error += I18n.t(:phone) +" "+I18n.t(:can_not_be_blank)+"<br/>" if phone == ""
    @result = error and return if error != ""
    # search the record
    phone_id = Phone.find_by_phone(phone)
    @jobs = Job.find(:all, :conditions=>["employee_id=? and date=? and phone_id=?", team, date, phone_id])
    @result = I18n.t(:no_record_found)  and return if @jobs.size == 0
    @result = I18n.t(:too_many_records) and return if @jobs.size > 1 # should not happen if there is one phone for one date
    # change the result
    job = @jobs.first
    old = job.result_id
    job.result_id = result_id
    job.memo = (job.memo || '') + "\n" + params[:memo]
    job.save
    @result = "OK<br/><br/>" + render_to_string(:partial=>'all_results')    
  end
  
  def print
    do_search(true)
    render(:layout=>'print')
  end  
  
  def adjourn
    begin
      id = params[:id]
      to_copy = Job.find(id)
      new = Job.new(to_copy.attributes)
      new.date = Date.today + 1.day
      new.result = nil
      new.adjourn_id = to_copy.id
      new.save
      render(:text=>"OK (#{new.date})")
    rescue Exception=>e
      render(:text=>e.message)
    end  
  end
  
  def select_reason_list_from_result
    id = params[:id]
    render(:text=>options_for_select('r'=>id))
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

