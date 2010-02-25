class CreatePhoneCustomers < ActiveRecord::Migration
  def self.up
    create_table :phone_customers do |t|
      t.string  :phone_id
      t.integer :customer_id
      t.timestamps
    end
  end

  def self.down
    drop_table :phone_customers
  end
end

