class Start < ActiveRecord::Migration
  def self.up

    create_table "users", :force => true do |t|
      t.column :login,                     :string
      t.column :email,                     :string
      t.column :crypted_password,          :string, :limit => 40
      t.column :salt,                      :string, :limit => 40
      t.column :created_at,                :datetime
      t.column :updated_at,                :datetime
      t.column :remember_token,            :string
      t.column :remember_token_expires_at, :datetime
      t.column :role_id,                   :integer
    end
    
    u = User.new(:role_id=>100, :login=>'admin', :password=>'admin', :email=>'to_change')
    u.save
    
  end

  def self.down
    drop_table "users"
  end
end

