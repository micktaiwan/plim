class ChangeJobType < ActiveRecord::Migration
  def self.up
    rename_column :jobs,:type_id,:job_type_id
  end

  def self.down
    rename_column :jobs,:job_type_id,:type_id
  end
end
