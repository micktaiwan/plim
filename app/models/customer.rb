class Customer < ActiveRecord::Base

  has_many :phone_customers
  has_many :phones, :through=>:phone_customers

end

