require 'test_helper'

class TodoItemsControllerTest < ActionController::TestCase
  
  setup do
    @list = todo_lists(:shoppinglist)
    @item = @list.todo_items[0]
  end
  
  test "should get index" do
    get :index, todo_list_id: @list
    assert_response :success
    assert_not_nil assigns(:items)
  end

  test "should show item" do
    get :show, id: @list.todo_items[0]
    assert_response :success
  end
  
  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create item" do
    assert_difference('TodoItem.count') do
      post :create, todo_item: {description: @item.description, status: "uncompleted", todo_list_id: @list}
    end

    assert_redirected_to todo_item_path(assigns(:item))
  end
  
  test "should update item" do
    put :update, id: @item, todo_item: {description: @item.description, status: "completed", todo_list_id: @list}
    
    assert_redirected_to todo_item_path(assigns(:item))
  end

  test "should destroy list" do
    assert_difference('TodoItem.count', -1) do
      delete :destroy, id: @item
    end

    assert_redirected_to todo_items_path
  end

end
