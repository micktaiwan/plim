class PhoneCustomer < ActiveRecord::Base

  belongs_to :phone
  belongs_to :customer

end
