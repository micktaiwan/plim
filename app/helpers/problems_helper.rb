module ProblemsHelper

  def sms_icone(status, code)
    icon = case status
      when 0; "loading.png"
      when 1; "loading.png"
      when 2, -1
        if code == 0
          "ok.png"
        else
          "error.png"
        end
      else
        "question.png"
    end
    "<img src='/images/#{icon}' border='0'>"
  end

end
