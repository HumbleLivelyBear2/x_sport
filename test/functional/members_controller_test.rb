require 'test_helper'

class MembersControllerTest < ActionController::TestCase
  test "should get member_about" do
    get :member_about
    assert_response :success
  end

  test "should get member_evaluation" do
    get :member_evaluation
    assert_response :success
  end

  test "should get member_products" do
    get :member_products
    assert_response :success
  end

end
