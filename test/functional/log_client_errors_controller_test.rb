require 'test_helper'

class LogClientErrorsControllerTest < ActionController::TestCase
  
  test "should log a clien error message" do
  	get :index, error_message: "Dummy is undefined"
    assert_response :success
  end
end
