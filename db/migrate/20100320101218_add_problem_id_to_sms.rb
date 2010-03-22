class AddProblemIdToSms < ActiveRecord::Migration
  def self.up
    add_column :sms, :job_id, :integer
    add_column :sms, :code, :integer
    add_column :sms, :arrival_time, :datetime
  end

  def self.down
    remove_column :sms, :job_id
    remove_column :sms, :code
    remove_column :sms, :arrival_time
  end
end
