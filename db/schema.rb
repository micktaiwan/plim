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

ActiveRecord::Schema.define(:version => 20090714184556) do

  create_table "companies", :force => true do |t|
    t.string "name"
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

  create_table "job_types", :force => true do |t|
    t.string  "name"
    t.integer "sort"
    t.integer "company_id"
  end

  create_table "jobs", :force => true do |t|
    t.integer  "user_id"
    t.integer  "type_id"
    t.integer  "employee_id"
    t.integer  "customer_id"
    t.integer  "result_id"
    t.integer  "zone_id"
    t.string   "serial_id"
    t.string   "phone_id"
    t.integer  "ampm_id"
    t.string   "reason_id"
    t.integer  "company_id"
    t.date     "date"
    t.text     "memo"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "results", :force => true do |t|
    t.string  "name"
    t.integer "sort"
    t.integer "company_id"
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
  end

  create_table "zones", :force => true do |t|
    t.string   "code"
    t.string   "name"
    t.integer  "company_id", :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
