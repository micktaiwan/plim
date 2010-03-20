class Sms < ActiveRecord::Base
  belongs_to :employee
  belongs_to :job
  
  # status column is the step 0: to send, 1: to query, 2: queried
  # code is the sms server reply
  # msg is the english msg corresponding to the code
  # arrival_time is the sms received time by the end cell phone
  
end
