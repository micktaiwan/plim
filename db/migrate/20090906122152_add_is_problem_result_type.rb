class AddIsProblemResultType < ActiveRecord::Migration
  def self.up
    add_column :results, :is_problem_type, :integer, :default=>0
  end

  def self.down
    remove_column :results, :is_problem_type
  end
end

