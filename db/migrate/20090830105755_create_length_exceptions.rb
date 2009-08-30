class CreateLengthExceptions < ActiveRecord::Migration
  def self.up
    create_table :length_exceptions do |t|
      t.integer :job_type_id
      t.integer :type_id
      t.integer :row_id
      t.integer :serial_length
      t.integer :phone_length
      t.timestamps
    end
    add_index 'results', 'reason_list_id'
    add_index 'length_exceptions', 'job_type_id'
    add_index 'length_exceptions', 'type_id'
    add_index 'length_exceptions', 'row_id'
  end

  def self.down
    remove_index 'results', 'reason_list_id'
    drop_table :length_exceptions
  end
end

