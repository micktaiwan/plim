class CreateSms < ActiveRecord::Migration
  def self.up
    create_table :sms do |t|
      t.string  :msg_id
      t.integer :status
      t.string  :status_msg
      t.string  :phone
      t.string  :msg
      t.integer :user_id
      t.integer :employee_id
      t.integer :hidden, :default=>0
      t.integer :company_id
      t.timestamps
    end
  end

  def self.down
    drop_table :sms
  end
end
