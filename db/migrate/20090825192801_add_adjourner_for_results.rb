class AddAdjournerForResults < ActiveRecord::Migration
  def self.up
    add_column :results, :is_adjourner, :boolean, :default=>0
    add_column :jobs, :adjourn_id, :integer, :default=>nil
    add_index 'jobs', 'adjourn_id'
  end

  def self.down
    remove_column :results, :is_adjourner
    remove_column :jobs, :adjourn_id
  end
end

