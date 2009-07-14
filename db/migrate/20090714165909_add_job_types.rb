class AddJobTypes < ActiveRecord::Migration
  def self.up
    create_table :job_types do |t|
      t.string  :name
      t.integer :sort # order
      t.integer :company_id
    end
  end

  def self.down
    drop_table :job_types
  end

end

