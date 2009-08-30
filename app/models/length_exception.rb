class LengthException < ActiveRecord::Base

  belongs_to :job_type
  # types:
  TYPE_ZONE = 1

  def duplicate?
    LengthException.find(:first, :conditions=>["job_type_id=? and type_id=? and row_id=?", self.job_type_id, self.type_id, self.row_id])
  end

  def origin_field
    case type_id
    when TYPE_ZONE
      r = Zone.find(row_id)
      "#{r.code} #{r.name}"
    else
      "unknown type"
    end
  end

end

