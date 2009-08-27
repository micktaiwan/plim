class AddReasonListId < ActiveRecord::Migration
  def self.up
    add_column :results, :reason_list_id, :integer, :default=>nil
  end

  def self.down
    remove_column :results, :reason_list_id
  end
end
