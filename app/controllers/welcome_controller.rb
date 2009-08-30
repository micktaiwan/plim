class WelcomeController < ApplicationController

  def index
    if current_user
      @jobs = Job.paginate(:all, :conditions=>["company_id=? and result_id is null",current_user.company_id], :order=>"date", :page=>params[:page], :per_page=>20)
      # for paginate results
      @results = render_to_string(:partial=>'jobs/results.erb')      
    end
    # else, will do a update 'results' for nothing....
  end

end

