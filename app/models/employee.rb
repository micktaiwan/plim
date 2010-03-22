class Employee < ActiveRecord::Base

  validates_presence_of     :name
  validates_uniqueness_of   :team, :allow_blank=>true, :case_sensitive => false
  validates_uniqueness_of   :taiwanid, :allow_blank=>true, :case_sensitive => false

  has_many :sms

  def team_and_name
    "#{team} #{name}"
  end

end

