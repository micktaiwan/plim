class Start < ActiveRecord::Migration
  def self.up

    create_table "users" do |t|
      t.column :login,                      :string
      t.column :email,                      :string
      t.column :crypted_password,           :string, :limit => 40
      t.column :salt,                       :string, :limit => 40
      t.column :created_at,                 :datetime
      t.column :updated_at,                 :datetime
      t.column :remember_token,             :string
      t.column :remember_token_expires_at,  :datetime
      t.column :role_id,                    :integer
      t.column :company_id,                 :integer
    end

    create_table "companies" do |t|
      t.column :name,                       :string
    end

    c = Company.create(:name=>'Company One')
    u = User.create(:role_id=>100, :company_id=>c.id, :login=>'admin01', :password=>'admin', :password_confirmation=>'admin', :email=>'to_change')
    
  end

  def self.down
    drop_table "companies"
    drop_table "users"
  end
end

