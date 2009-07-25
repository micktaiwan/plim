class ChangeAmpm < ActiveRecord::Migration
  def self.up
    rename_column :jobs, :ampm_id, :ampm
    change_column :jobs, :ampm, :string, :length=>10
  end

  def self.down
    rename_column :jobs, :ampm, :ampm_id
    change_column :jobs, :ampm_id, :integer
  end
end
