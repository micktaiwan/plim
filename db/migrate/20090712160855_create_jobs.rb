class CreateJobs < ActiveRecord::Migration
  def self.up
    create_table :jobs do |t|
      t.integer :user_id      # responsible
      t.integer :type_id      # job type
      t.integer :employee_id  # team
      t.integer :customer_id
      t.integer :result_id
      t.integer :zone_id
      t.string  :serial_id
      t.string  :phone_id
      t.integer :ampm_id
      t.string  :reason_id
      t.integer :company_id
      t.date    :date
      t.text    :memo
      t.timestamps
    end
  end

  def self.down
    drop_table :jobs
  end
  
end

