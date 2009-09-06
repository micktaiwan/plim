# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20090906130846) do

  create_table "action_logs", :force => true do |t|
    t.string   "controller"
    t.string   "action"
    t.string   "controller_action"
    t.string   "browser"
    t.string   "ip"
    t.string   "session_id"
    t.integer  "user_id"
    t.integer  "company_id"
    t.text     "params"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "action_logs", ["company_id"], :name => "index_action_logs_on_company_id"
  add_index "action_logs", ["session_id"], :name => "index_action_logs_on_session_id"
  add_index "action_logs", ["user_id"], :name => "index_action_logs_on_user_id"

  create_table "code_lists", :force => true do |t|
    t.string   "name"
    t.integer  "company_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "code_lists", ["company_id"], :name => "index_code_lists_on_company_id"

  create_table "codes", :force => true do |t|
    t.integer  "code_list_id"
    t.string   "code"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "codes", ["code_list_id"], :name => "index_codes_on_code_list_id"

  create_table "companies", :force => true do |t|
    t.string "name"
  end

  create_table "customers", :force => true do |t|
    t.string   "name"
    t.text     "address"
    t.string   "phone"
    t.string   "cell_phone"
    t.text     "memo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "employees", :force => true do |t|
    t.string   "team"
    t.string   "name"
    t.string   "taiwanid"
    t.string   "birthday"
    t.string   "cell"
    t.string   "home_phone"
    t.text     "address"
    t.text     "memo"
    t.integer  "company_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "employees", ["company_id"], :name => "index_employees_on_company_id"

  create_table "job_types", :force => true do |t|
    t.string  "name"
    t.integer "sort"
    t.integer "company_id"
    t.integer "serial_length", :default => 12
    t.integer "phone_length",  :default => 8
  end

  add_index "job_types", ["company_id"], :name => "index_job_types_on_company_id"

  create_table "jobs", :force => true do |t|
    t.integer  "user_id"
    t.integer  "job_type_id"
    t.integer  "employee_id"
    t.integer  "customer_id"
    t.integer  "result_id"
    t.integer  "zone_id"
    t.string   "serial_id"
    t.string   "phone_id"
    t.string   "ampm"
    t.string   "reason_id"
    t.integer  "company_id"
    t.date     "date"
    t.text     "memo"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "adjourn_id"
  end

  add_index "jobs", ["adjourn_id"], :name => "index_jobs_on_adjourn_id"
  add_index "jobs", ["company_id"], :name => "index_jobs_on_company_id"
  add_index "jobs", ["customer_id"], :name => "index_jobs_on_customer_id"
  add_index "jobs", ["employee_id"], :name => "index_jobs_on_employee_id"
  add_index "jobs", ["job_type_id"], :name => "index_jobs_on_job_type_id"
  add_index "jobs", ["phone_id"], :name => "index_jobs_on_phone_id"
  add_index "jobs", ["reason_id"], :name => "index_jobs_on_reason_id"
  add_index "jobs", ["result_id"], :name => "index_jobs_on_result_id"
  add_index "jobs", ["serial_id"], :name => "index_jobs_on_serial_id"
  add_index "jobs", ["user_id"], :name => "index_jobs_on_user_id"
  add_index "jobs", ["zone_id"], :name => "index_jobs_on_zone_id"

  create_table "length_exceptions", :force => true do |t|
    t.integer  "job_type_id"
    t.integer  "type_id"
    t.integer  "row_id"
    t.integer  "serial_length"
    t.integer  "phone_length"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "length_exceptions", ["job_type_id"], :name => "index_length_exceptions_on_job_type_id"
  add_index "length_exceptions", ["row_id"], :name => "index_length_exceptions_on_row_id"
  add_index "length_exceptions", ["type_id"], :name => "index_length_exceptions_on_type_id"

  create_table "phones", :force => true do |t|
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "problems", :force => true do |t|
    t.integer  "visit_id"
    t.integer  "employee_id"
    t.integer  "customer_id"
    t.date     "problem_date"
    t.date     "resolved_date"
    t.integer  "problem_reason_id"
    t.integer  "resolved_reason_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "results", :force => true do |t|
    t.string  "name"
    t.integer "sort"
    t.integer "company_id"
    t.boolean "is_adjourner",    :default => false
    t.integer "reason_list_id"
    t.integer "is_problem_type", :default => 0
  end

  add_index "results", ["company_id"], :name => "index_results_on_company_id"
  add_index "results", ["reason_list_id"], :name => "index_results_on_reason_list_id"

  create_table "serials", :force => true do |t|
    t.string   "serial"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "login"
    t.string   "email"
    t.string   "crypted_password",          :limit => 40
    t.string   "salt",                      :limit => 40
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "remember_token"
    t.datetime "remember_token_expires_at"
    t.integer  "role_id"
    t.integer  "company_id"
    t.string   "name"
    t.datetime "last_login",                              :default => '2009-08-21 19:30:51'
  end

  add_index "users", ["company_id"], :name => "index_users_on_company_id"
  add_index "users", ["role_id"], :name => "index_users_on_role_id"

  create_table "zones", :force => true do |t|
    t.string   "code"
    t.string   "name"
    t.integer  "company_id", :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "zones", ["company_id"], :name => "index_zones_on_company_id"

end
