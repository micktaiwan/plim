class CreateCodeLists < ActiveRecord::Migration
  def self.up
    create_table :code_lists do |t|
      t.string :name
      t.integer :company_id
      t.timestamps
    end
    add_index :code_lists, :company_id
  end

  def self.down
    drop_table :code_lists
  end
end
