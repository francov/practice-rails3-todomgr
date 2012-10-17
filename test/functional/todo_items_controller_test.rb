require 'test_helper'

class TodoItemsControllerTest < ActionController::TestCase
  
  setup do
    @list = todo_lists(:wishlist)
    @item = @list.todo_items[0]
  end
  
  test "should get index" do
    get :index, format: 'json', todo_list_id: @list
    assert_response :success
    assert_not_nil assigns(:items)
  end

  test "should show item" do
    get :show, format: 'json', id: @list.todo_items[0]
    assert_response :success
  end

  test "should create item" do
    assert_difference('TodoList.find(@list.id).todo_items.size') do
      post :create, format: 'json', todo_list_id: @list.id, todo_item: {description: "Buy new shoes", status: "uncompleted", todo_list_id: @list.id}
    end

    assert_response :created
    assert_not_nil TodoItem.find_by_description("Buy new shoes")
    assert_not_nil assigns(:item)
  end
  
  test "should update item" do
    put :update, format: 'json', id: @item, todo_item: {description: @item.description, status: "completed", todo_list_id: @list}
    
    assert_response :success
    assert_not_nil assigns(:item)
  end

  test "should destroy item" do
    item_description = @item.description
    assert_difference('TodoItem.count', -1) do
      delete :destroy, format: 'json', id: @item
    end

    assert_response :success
    assert_nil TodoItem.find_by_description(item_description)
  end

end
