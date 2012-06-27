require 'test_helper'

class PersonalsControllerTest < ActionController::TestCase
  test "should get profile" do
    get :profile
    assert_response :success
  end

  test "should get products" do
    get :products
    assert_response :success
  end

  test "should get evaluation" do
    get :evaluation
    assert_response :success
  end

  test "should get trade_record" do
    get :trade_record
    assert_response :success
  end

  test "should get whisper" do
    get :whisper
    assert_response :success
  end

  test "should get ask_answer" do
    get :ask_answer
    assert_response :success
  end

end
