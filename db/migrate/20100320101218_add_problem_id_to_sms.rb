class AddProblemIdToSms < ActiveRecord::Migration
  def self.up
    add_column :sms, :job_id, :integer
  end

  def self.down
    remove_column :sms, :job_id
  end
end
