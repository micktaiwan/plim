class Phone < ActiveRecord::Base

  has_many :phone_customers
  has_many :customers, :through=>:phone_customers
  
  validates_presence_of     :phone
  validates_uniqueness_of   :phone
  
  def self.get_or_create(name)
    s = find_by_phone(name)
    s = create(:phone=>name) if not s # FIXME: that's the problem, create does not call the uniqueness validator !!
    s
  end

end

