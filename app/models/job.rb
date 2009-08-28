class Job < ActiveRecord::Base

  belongs_to :zone
  belongs_to :job_type
  belongs_to :employee
  belongs_to :serial
  belongs_to :phone
  belongs_to :result
  belongs_to :job_type
  
  before_save {|job| job.verify!}
  
  def verify!
    # verify duplicate for this date and phone  
    raise "#{I18n.t(:job_already_exists)} (#{self.date} / #{self.phone.phone})" if  duplicate?
  end
  
  def duplicate?
    if self.id != nil
      cond = ["id!=? and date=? and phone_id=?", self.id, self.date, self.phone_id]
    else
      cond = ["date=? and phone_id=?", self.date, self.phone_id]
    end
    Job.find(:first, :conditions=>cond)
  end
  
  def can_be_adjourned?
    return (self.result and self.result.is_adjourner and not get_adjourned)
  end
  
  def get_adjourned
    Job.find(:first, :conditions=>["adjourn_id=?", self.id])
  end
  
  def friendly_zone
    return I18n.t(:nil_result) if not zone
    zone.code + " " + zone.name
  end

  def friendly_serial
    return I18n.t(:nil_result) if not serial
    serial.serial
  end

  def friendly_phone
    return I18n.t(:nil_result) if not phone
    phone.phone
  end

  def friendly_job_type
    return I18n.t(:nil_result) if not job_type
    job_type.name
  end

  def friendly_result
    return I18n.t(:nil_result) if not result
    result.name
  end
  
end

