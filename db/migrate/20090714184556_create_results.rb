class CreateResults < ActiveRecord::Migration
  def self.up
    create_table :results do |t|
      t.string  :name
      t.integer :sort # order
      t.integer :company_id
    end
  end

  def self.down
    drop_table :results
  end
end
