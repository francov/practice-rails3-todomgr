require 'test_helper'

class TodoListsControllerTest < ActionController::TestCase
  setup do
    @list = todo_lists(:shoppinglist)
  end
  
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:lists)
  end

  test "should show list" do
    get :show, id: @list
    assert_response :success
  end

  test "should create list" do
    assert_difference('TodoList.count') do
      post :create, todo_list: {title: @list.title}
    end

    assert_redirected_to todo_list_path(assigns(:list))
  end

  test "should update list" do
    put :update, id: @list, todo_list: {title: @list.title}
    
    assert_redirected_to todo_list_path(assigns(:list))
  end

  test "should destroy list" do
    assert_difference('TodoList.count', -1) do
      delete :destroy, id: @list
    end

    assert_redirected_to todo_lists_path
  end

end
