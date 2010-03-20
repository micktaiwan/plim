require 'socket'

class SendMsg
  # unsigned	char
  attr_accessor :msg_type


#msg_type : 訊息型態
#0：帳號密碼檢查
#1：傳送文字簡訊
#2：查詢文字簡訊傳送結果
#3：接收文字簡訊 (一般用戶不開放)
#13：傳送 WAP PUSH
#14：查詢WAP PUSH 傳送結果
#15：傳送國際簡訊
#　　查詢國際簡訊傳送結果請用msg_type=2即可。
#16：取消預約文字簡訊
    # unsigned	char
  attr_accessor  :msg_coding
  # unsigned	char
  attr_accessor  :msg_priority
  # unsigned	char
  attr_accessor  :msg_country_code
  # unsigned	char
  attr_accessor  :msg_set_len
  # unsigned	char
  attr_accessor  :msg_content_len
  # char[100]
  attr_accessor  :msg_set
  # char[160]
  attr_accessor  :msg_content

  def initialize
    @msg_type  =  0
    @msg_priority = @msg_country_code = 0
    @msg_coding = 1
    @msg_content = ""
  end

  def build_login(login, pwd)
    puts "building login from #{login} and #{pwd}"
    @msg_type = 0
    @msg_set = [login,pwd].pack("a#{login.size+1}a#{pwd.size+1}")
    @msg_set_len = @msg_set.size
    @msg_content_len = @msg_content.size
    pack
  end

  def build_sms(phone, msg)
    puts "building sms from #{phone} and #{msg}"
    @msg_type = 1
    @msg_set = [phone,"01"].pack("a#{phone.size+1}a#{3}")
    @msg_set_len = @msg_set.size
    @msg_content = msg
    @msg_content_len = @msg_content.size
    pack
  end

private

  def pack
    rv = [@msg_type, @msg_coding, @msg_priority, @msg_country_code, @msg_set_len, @msg_content_len, @msg_set, @msg_content]
    packing = "CCCCCCa#{@msg_set_len}a#{@msg_content_len}"  
    1.upto(266 - 6 - (@msg_set_len+@msg_content_len)) {
      rv << 0
      packing += "C"
      }
    rv = rv.pack(packing)
    [rv, rv.size]
  end
   end

class RetMsg

   # unsigned char ret_code ;
   attr_accessor :code
   # unsigned char ret_coding ;
   attr_accessor :coding
   # unsigned char ret_set_len;
   attr_accessor :set_len
   # unsigned char ret_content_len;
   attr_accessor :content_len
   # char ret_set[80];
   attr_accessor :set
   # char ret_content[160]
   attr_accessor :content
   
=begin
ret_code	ret_content	原 因
0	ID/Password check successful	帳號/密碼檢查成功
1	Password error	密碼錯誤
2	The account not exist	帳號不存在
3	Over the maximun allowed connection numbe	超過允許的最大連線數目
4	The account status not correct	帳號狀態不正確或已退租
5	get account data error	無法取得帳號資料
6	get password data error	無法取得密碼資料
7	System error, try again later	暫時無法檢查帳號/密碼
=end
   
  def parse(data)
    @code         = data[0].to_i
    @coding       = data[1].to_i
    @set_len      = data[2].to_i
    @content_len  = data[3].to_i
    @set          = data[4..4+@set_len]
    @content      = data[84..84+@content_len]
  end
   
  def to_s
    "code: #{code}\ncoding: #{coding}\nset_len: #{set_len}\ncontent_len: #{content_len}\nset: #{set}\ncontent: #{content}"
  end 
end


class HinetSmsSender

  PORT = 8000
  attr_accessor :server_ip, :login, :pwd

  def initialize
  end
  
  def send_sms(phone, msg)
    @phone  = phone
    @msg    = msg
    puts "sending to #{phone}: #{msg}"
    send_packet    
    @answer
  end
  
  def query(msg_id)
    puts "querying #{msg_id}"
    [1,"not implemented"]
  end
  
private

  def build_packet
    #@packet = [].pack
  end
  
  def send_packet
    begin
      t = TCPSocket.new(@server_ip, PORT)
    rescue
      @answer= [0, "error: #{$!}"]
      t.close if t
    else
      puts "sending..."
      msg = SendMsg.new
      
      # login
      
      m, s = msg.build_login(@login,@pwd)
      # puts "size = #{s}"
      t.send m, s
      puts "reading..."
      data = t.read(244)
      puts "received #{data.size} bytes: #{data}"
      ret = RetMsg.new
      ret.parse(data)
      if ret.code != 0
        @answer = [ret.code, "login sending phase: "+ret.content]
        t.close
        return
      end
      
      # send msg
      
      m, s = msg.build_sms(@phone,@msg)
      # puts "size = #{s}"
      t.send m, s
      puts "reading..."
      data = t.read(244)
      puts "received #{data.size} bytes: #{data}"
      ret = RetMsg.new
      ret.parse(data)
      if ret.code != 0
        @answer = [ret.code, "sms sending phase: " + ret.content]
        t.close
        return
      end
      
      #puts ret.to_s
      #data.each_byte { |b| puts b}
      @answer = [1, "SMS sent sucessfully"]
      t.close
    end
  end 

end

