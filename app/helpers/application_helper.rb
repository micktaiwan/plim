# Methods added to this helper will be available to all templates in the application.

ROLES = [['Viewer',300],['Editor',200],['Admin',100]]

module ApplicationHelper

  def role_to_text(id)
    case id
    when 100
      'admin'
    when 200
      'editor'
    when 300
      'viewer'
    end
  end

end
