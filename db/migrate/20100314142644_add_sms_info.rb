class AddSmsInfo < ActiveRecord::Migration
  def self.up
    add_column :companies, :sms_login,  :string
    add_column :companies, :sms_pwd,    :string
  end

  def self.down
    remove_column :companies, :sms_login
    remove_column :companies, :sms_pwd
  end
end
