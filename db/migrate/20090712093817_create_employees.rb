class CreateEmployees < ActiveRecord::Migration
  def self.up
    create_table :employees do |t|
      t.string  :team # can be 050
      t.string  :name
      t.string  :taiwanid
      t.string  :birthday # can be a taiwanese date 47/09/22
      t.string  :cell
      t.string  :home_phone
      t.text    :address
      t.text    :memo
      t.integer :company_id
      t.timestamps
    end
  end

  def self.down
    drop_table :employees
  end
end

