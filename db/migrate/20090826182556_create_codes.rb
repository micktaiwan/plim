class CreateCodes < ActiveRecord::Migration
  def self.up
    create_table :codes do |t|
      t.integer :code_list_id
      t.string :code
      t.string :name
      t.timestamps
    end
    add_index :codes, :code_list_id
  end

  def self.down
    drop_table :codes
  end
end

