class Serial < ActiveRecord::Base

  validates_presence_of     :serial
  validates_uniqueness_of   :serial

  def self.get_or_create(name)
    s = find_by_serial(name)
    if not s
      s = create!(:serial=>name)
    end
    s
  end
  

end
