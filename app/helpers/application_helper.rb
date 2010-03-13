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

class MyLinkRenderer < WillPaginate::LinkRenderer

  def page_link(page, text, attributes = {})
    @template.link_to_remote(text, {:url=>{:page=>page}}, attributes)
  end

end

class String
  def to_hash
    Hash[*self.scan(/(.*)=>(.*)/).to_a.flatten]  
  end
end

