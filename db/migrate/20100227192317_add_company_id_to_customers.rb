class AddCompanyIdToCustomers < ActiveRecord::Migration
  def self.up
    add_column :customers, :company_id, :integer, :null=>false
  end

  def self.down
    remove_column :customers, :company_id
  end
end

