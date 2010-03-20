class ProblemsController < ApplicationController

  def show
    get_problems
  end
  
  def prepare_sms
    @sms = []
    get_problems
    @problems.each { |p|
      @sms << Sms.new(:msg=>create_msg(p), :phone=>p.employee.cell, :employee_id=>p.employee.id, :job_id=>p.id)
      }
  end
  
  def send_sms
    ids = params[:job_id]
    render(:text=>"Please check a box") and return if not ids
    for id in ids
      p = Job.find(id)
      Sms.create(:msg=>create_msg(p),
                 :phone=>p.employee.cell,
                 :employee_id=>p.employee.id,
                 :job_id=>p.id,
                 :company_id=>current_user.company_id,
                 :status=>0,
                 :user_id=>current_user.id,
                 :status_msg=>"to be sent")
    end
    redirect_to(:action=>:show_sms)
  end
  
  def show_sms
    @sms = Sms.find(:all, :conditions=>"company_id=#{current_user.company_id}")
  end

private

  def get_problems
    types = Result.find(:all, :conditions=>["company_id=? and is_problem_type=1", current_user.company_id]).collect{|t| t.id}
    @problems = [] and return if types.size == 0
    types = types.join(",")
    @problems = Job.find(:all, :conditions=>"result_id in (#{types})")
  end
  
  def create_msg(job)
    # 障223y078170 聯09 26120991 不能上網 復興南路2段197號3樓 45-2-85 用戶表示裝機未完成無法使用洽用戶約時 D5-13
    "障#{job.friendly_phone} 聯#{job.friendly_customer_phone} #{job.friendly_reason} #{job.friendly_customer_address}"
  end

end

