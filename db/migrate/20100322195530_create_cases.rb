class CreateCases < ActiveRecord::Migration
  def self.up
    create_table :cases do |t|
      t.integer :company_id, :null=>false
      t.string  :tender_source    # 招標機關 文字
      t.string  :job_name         # 工程名稱 文字
      t.string  :code             # 工程編號 文字
      t.date    :bid_opening_date # 開標日期 日期
      t.date    :tender_deadline  # 投標期限 日期
      t.date    :compliance_deadline # 履約期限 文字
      t.integer :deposit_amount   # 押金額度 整數
      t.integer :fee              # 標單費用 整數
      t.integer :budget           # 預算金額 整數
      t.integer :max_budget       # 底價金額 整數 (not sure of the translation in english)
      t.integer :bid_amount       # 標價金額 整數
      t.integer :points           # 核定點數 整數
      t.float   :bid_price        # 得標單價 實數
      t.float   :point_price      # 底價單價 實數
      t.string  :winning_company  # 得標廠商 文字
      t.date    :publication_date # 公告日期 日期
      t.integer :downloaded       #下載 否是
      t.timestamps
    end
  end

  def self.down
    drop_table :cases
  end
end

