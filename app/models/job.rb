class Job < ActiveRecord::Base

  has_one :zone
  has_one :job_type
  has_one :employee
  has_one :serial
  has_one :phone
  
  def self.new_from_params(p, company_id)
    job = new
    job.date        = p[:date]
    job.company_id  = company_id
    job.zone_id     = p[:zone_id].to_i    
    job.employee_id = p[:employee_id].to_i    
    job.user_id     = p[:user_id].to_i    
    job.type_id     = p[:type_id].to_i    
    job.serial_id   = Serial.get_or_create(p[:serial])
    job.phone_id    = Phone.get_or_create(p[:phone])
    job.ampm        = p[:ampm] # FIXME check value
    job.save!
  end
  
end

