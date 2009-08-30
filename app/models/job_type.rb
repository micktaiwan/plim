class JobType < ActiveRecord::Base

  has_many :length_exceptions
  
end
