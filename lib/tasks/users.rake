namespace :users do

  desc "This task will create the first user admin. It should be created by the 'start' migration. But could be useful."
  task :create_admin do
    c = Company.create(:name=>'Company One')
    User.create(:role_id=>100, :company_id=>c.id, :login=>'admin01', :password=>'admin', :password_confirmation=>'admin', :email=>'to_change')
    puts “done. you can login with admin01 / admin. And don't forget to change the password....”
  end

end
