class Employee < ActiveRecord::Base

  validates_presence_of     :name
  validates_uniqueness_of   :team, :taiwanid, :case_sensitive => false

end

