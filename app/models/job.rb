class Job < ActiveRecord::Base

  belongs_to :zone
  belongs_to :job_type
  belongs_to :employee
  belongs_to :serial
  belongs_to :phone
  
  before_save :verify
  
  def verify
    # verify duplicate for this date, team, phone and serial
    raise I18n.t(:job_already_exists) if  duplicate?
  end
  
  def duplicate?
    Job.find(:first, :conditions=>["date=? and phone_id=?", self.date, self.phone_id])
  end
  
end

