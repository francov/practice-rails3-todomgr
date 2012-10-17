require 'test_helper'

class TodoListsControllerTest < ActionController::TestCase
  setup do
    @list = todo_lists(:shoppinglist)
  end
  
  def json_response
    ActiveSupport::JSON.decode @response.body
  end
  
  test "should get index" do
    get :index, format: 'json'
    assert_response :success
    assert_not_nil assigns(:lists)
    
    assert_equal json_response.count, 2
    assert_equal "Shopping list for today", json_response[0]['title']
  end


  test "should show list" do
    get :show, format: 'json', id: @list
    assert_response :success
    
    assert_equal "Shopping list for today", json_response['title']
  end


  test "should create list" do
    assert_difference('TodoList.count') do
        post :create, format: 'json', todo_list: {title: "My list"}
    end

    assert_response :created
    assert_equal "My list", json_response['title']
    assert_not_nil TodoList.find_by_title("My list")
  end


  test "should update list" do
    put :update, format: 'json', id: @list, todo_list: {title: "Shopping list for tomorrow"}
    
    assert_response :success
  end
  

  test "should destroy list" do
    assert_difference('TodoList.count', -1) do
      delete :destroy, format: 'json', id: @list
    end

    assert_response :success
    assert_nil TodoList.find_by_title("Shopping list for today")
  end

end
