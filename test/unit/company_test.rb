require 'test_helper'

class CompanyTest < ActiveSupport::TestCase
  test "new company" do
    assert_equal Company.find(:all).size, 1 # see fixtures
    Company.create(:name=>"test")
    assert_equal Company.find(:all).size, 2
    c = Company.find(1)
    assert_equal c.users.size, 3 # see users fixtures
  end
end

