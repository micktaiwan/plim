class Job < ActiveRecord::Base

  has_one :zone
  has_one :job_type
  has_one :employee
  #has_one :serial
  has_one :phone
  
end
