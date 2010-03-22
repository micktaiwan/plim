require 'mongrel_cluster/recipes'

set :application, "plim"
set :domain, "74.63.12.144"
set :scm, "git"
set :repository, "git://github.com/micktaiwan/plim.git"
set :branch, "master"
set :deploy_via, :remote_cache
set :user, "mick"
set :use_sudo, true
set :group_writable, false
set :deploy_to, "/home/mick/projects/sites/#{application}"
set :rake, "rake"
set :rails_env, "production"

role :app, domain
role :web, domain
role :db,  domain, :primary => true

set :mongrel_conf, "#{current_path}/config/mongrel_cluster.yml"

desc 'Dumps the production database to db/production_data.sql on the remote server'
task :remote_db_dump, :roles => :db, :only => { :primary => true } do
  run "cd #{deploy_to}/#{current_dir} && #{rake} RAILS_ENV=#{rails_env} db:database_dump --trace" 
end

desc 'Downloads db/production_data.sql from the remote production environment to your local machine'
task :remote_db_download, :roles => :db, :only => { :primary => true } do  
  execute_on_servers(options) do |servers|
    self.sessions[servers.first].sftp.connect do |tsftp|
      tsftp.download! "#{deploy_to}/#{current_dir}/db/production_data.sql", "db/production_data.sql" 
    end
  end
end

desc 'Cleans up data dump file'
task :remote_db_cleanup, :roles => :db, :only => { :primary => true } do  
  delete "#{deploy_to}/#{current_dir}/db/production_data.sql" 
end 

desc 'Dumps, downloads and then cleans up the production data dump'
task :remote_db_runner do
  remote_db_dump
  remote_db_download
  #remote_db_cleanup
end


