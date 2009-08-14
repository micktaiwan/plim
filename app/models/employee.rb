class Employee < ActiveRecord::Base

  validates_presence_of     :name
  validates_uniqueness_of   :team, :taiwanid, :allow_blank=>true, :case_sensitive => false

  def team_and_name
    "#{team} #{name}"
  end

end

