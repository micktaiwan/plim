class Job < ActiveRecord::Base

  belongs_to :zone
  belongs_to :job_type
  belongs_to :employee
  belongs_to :serial
  belongs_to :phone
  belongs_to :result
  belongs_to :job_type
  
  def verify
    # verify duplicate for this date, team, phone and serial
    raise I18n.t(:job_already_exists) if  duplicate?
  end
  
  def duplicate?
    Job.find(:first, :conditions=>["date=? and phone_id=?", self.date, self.phone_id])
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

