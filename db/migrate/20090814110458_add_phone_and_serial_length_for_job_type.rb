class AddPhoneAndSerialLengthForJobType < ActiveRecord::Migration

  def self.up
    add_column :job_types, :serial_length, :integer, :default=>12
    add_column :job_types, :phone_length,  :integer, :default=>8
  end

  def self.down
    remove_column :job_types, :serial_length
    remove_column :job_types, :phone_length
  end
end

