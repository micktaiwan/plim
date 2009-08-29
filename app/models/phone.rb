class Phone < ActiveRecord::Base

  validates_presence_of     :phone
  validates_uniqueness_of   :phone
  
  def self.get_or_create(name)
    s = find_by_phone(name)
    s = create(:phone=>name) if not s
    s
  end

end

