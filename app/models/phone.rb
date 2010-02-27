class Phone < ActiveRecord::Base

  has_many :phone_customers
  has_many :customers, :through=>:phone_customers
  
  validates_presence_of     :phone
  validates_uniqueness_of   :phone
  
  def self.get_or_create(name)
    s = find_by_phone(name)
    if not s
      s = new(:phone=>name) # create does not call the uniqueness validator !!
      s.save!
    end  
    s
  end

end

