class ProblemsController < ApplicationController

  def show
    types = Result.find(:all, :conditions=>["company_id=? and is_problem_type=1", current_user.company_id]).collect{|t| t.id}
    @problems = [] and return if types.size == 0
    types = types.join(",")
    @problems = Job.find(:all, :conditions=>"result_id in (#{types})")
  end

end

