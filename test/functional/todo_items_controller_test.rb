require 'test_helper'

class TodoItemsControllerTest < ActionController::TestCase
  
  setup do
    @list = todo_lists(:wishlist)
    @item = @list.todo_items[0]
  end
  
  test "should get index" do
    get :index, format: 'json', todo_list_id: @list.id
    assert_response :success
    assert_not_nil assigns(:items)

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert composed_response['success']
    assert !composed_response['data'].empty?
    assert_equal "find a gratifying job", composed_response['data'][0]['description']
  end

  test "should show item" do
    get :show, format: 'json', id: @list.todo_items[0].id
    assert_response :success

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert composed_response['success']
    assert !composed_response['data'].empty?
  end

  test "should create item" do
    assert_difference('TodoList.find(@list.id).todo_items.size') do
      post :create, format: 'json', todo_list_id: @list.id, todo_item: {description: "Buy new shoes", status: "uncompleted"}
    end
    assert_response :created

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert composed_response['success']
    assert !composed_response['data'].empty?
    assert_not_nil TodoItem.find_by_description("Buy new shoes")
    assert_not_nil assigns(:item)
  end

  test "should not create item with empty description" do
    desc = ""
    assert_difference('TodoList.find(@list.id).todo_items.size', 0) do
      post :create, format: 'json', todo_list_id: @list.id, todo_item: {description: desc, status: "uncompleted"}
    end
    assert_response :success

    composed_response = JSON.parse(@response.body)

    assert !composed_response['success']
    assert composed_response['data'].empty?
    assert_equal composed_response['message']['description'][0], "can't be blank"
    assert_nil TodoItem.find_by_description(desc)
  end
  
  test "should update item" do
    put :update, format: 'json', id: @item.id, todo_item: {description: @item.description, status: "completed", todo_list_id: @list}
    assert_response :success
    assert_not_nil assigns(:item)

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert composed_response['success']
    assert composed_response['data'].empty?
  end

  test "should not update item with invalid status" do
    put :update, format: 'json', id: @item.id, todo_item: {description: @item.description, status: "invalid", todo_list_id: @list}
    assert_response :success

    composed_response = JSON.parse(@response.body)

    assert !composed_response['success']
    assert composed_response['data'].empty?
    assert_equal composed_response['message']['status'][0], "is not a valid status"
  end

  test "should destroy item" do
    item_description = @item.description
    assert_difference('TodoItem.count', -1) do
      delete :destroy, format: 'json', id: @item
    end
    assert_response :success

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert composed_response['success']
    assert composed_response['data'].empty?
    assert_nil TodoItem.find_by_description(item_description)
  end

  test "should not create an item under a non existent list" do
    post :create, format: 'json', todo_list_id: @list.id+1234, todo_item: {description: "Buy new shoes", status: "uncompleted"}
    assert_response :success

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert !composed_response['success']
    assert composed_response['data'].empty?
  end

  test "should search an item" do
    TodoItem.reindex

    text_to_search = "pot"
    get :search, format: 'json', query: text_to_search
    assert_response :success

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert composed_response['success']
    assert_equal composed_response['data'].length, 1
  end

end
