class CreateZones < ActiveRecord::Migration
  def self.up
    create_table :zones do |t|
      t.string :code, :length=>5
      t.string :name, :length=>20
      t.integer :company_id, :null=>false
      t.timestamps
    end
  end

  def self.down
    drop_table :zones
  end
end

