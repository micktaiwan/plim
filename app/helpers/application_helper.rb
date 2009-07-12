# Methods added to this helper will be available to all templates in the application.

ROLES = [[I18n.t(:viewer),300],[I18n.t(:editor),200],[I18n.t(:admin),100]]

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

