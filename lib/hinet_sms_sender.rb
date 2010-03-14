require 'socket'

class SendMsg
  # unsigned	char
  attr_accessor :msg_type  # unsigned	char
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
    @msg_coding = 4
    @msg_content = ""
    
  end

  def build_login(login, pwd)
    puts "building login from #{login} and #{pwd}"
    @msg_set = [login,pwd].pack("a#{login.size+1}a#{pwd.size+1}")
    @msg_set_len = @msg_set.size
    @msg_content_len = @msg_content.size
    @msg_type = 0
    rv = [@msg_type, @msg_coding, @msg_priority, @msg_country_code, @msg_set_len, @msg_content_len, login, pwd, @msg_content]
    packing = "CCCCCCa#{login.size+1}a#{pwd.size+1}a#{@msg_content_len}"  
    1.upto(266 - 6 - (@msg_set_len+@msg_content_len)) {
      rv << 0
      packing += "C"
      }
    rv = rv.pack(packing)
    [rv, rv.size]
  end
   end

class HinetSmsSender

  PORT = 8000
  attr_accessor :server_ip, :login, :pwd

  def initialize
  end
  
  def send_sms(phone, msg)
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
    @packet = [].pack
  end
  
  def send_packet
    begin
      t = TCPSocket.new(@server_ip, PORT)
    rescue
      @answer= [0, "error: #{$!}"]
    else
      msg = SendMsg.new
      puts "sending..."
      m, s = msg.build_login(@login,@pwd)
      puts "size = #{s}"
      t.send m, s
      puts "reading..."
      data = t.read(10)
      puts "received:"
      data.each_byte { |b| puts b}
      @answer = [0, "it has been read"]
      t.close
    end
  end 

end

