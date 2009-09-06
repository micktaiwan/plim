class CreateProblems < ActiveRecord::Migration
  def self.up
    create_table :problems do |t|
      t.integer :visit_id
      t.integer :employee_id
      t.integer :customer_id
      t.date    :problem_date
      t.date    :resolved_date
      t.integer :problem_reason_id
      t.integer :resolved_reason_id
      t.timestamps
    end
    
    create_table :customers do |t|
      t.string  :name
      t.text    :address
      t.string  :phone
      t.string  :cell_phone
      t.text    :memo
      t.timestamps
    end
  end

  def self.down
    drop_table :problems
    drop_table :customers
  end
  
end

