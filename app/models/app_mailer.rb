class AppMailer < ActionMailer::Base

  def changes(u,stats)
    @subject    = "[PLIM] Changes"
    @body["u"] = u
    @body["stats"]  = stats
    @recipients = u.email
    @from       = 'protask@protaskm.com'
    @sent_on    = Time.now
    @headers    = {}
    content_type "text/html"  
  end  

end

