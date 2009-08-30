class Zone < ActiveRecord::Base

  validates_length_of :code, :within => 1..5
  validates_length_of :name, :within => 1..20
  validates_uniqueness_of :code, :case_sensitive => false

  def code_and_name
    "#{code} #{name}"
  end
  
end

