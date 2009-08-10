class WelcomeController < ApplicationController

  def index
    if current_user
      @jobs = Job.paginate(:all, :conditions=>["company_id=?",current_user.company_id], :order=>"date desc", :page=>params[:page], :per_page=>10)
      # for paginate results
      @results = render_to_string(:partial=>'jobs/results.erb')      
    end
    # else, will do a update 'results' for nothing....
  end

end

