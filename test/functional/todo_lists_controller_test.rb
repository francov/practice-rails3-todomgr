require 'test_helper'

class TodoListsControllerTest < ActionController::TestCase
  setup do
    @list = todo_lists(:shoppinglist)
  end
  
  test "should get index" do
    get :index, format: 'json'
    assert_response :success
    assert_not_nil assigns(:lists)
    
    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert composed_response['success']
    assert !composed_response['data'].empty?
    assert_equal "Shopping list for today", composed_response['data'][0]['title']
  end


  test "should show list" do
    get :show, format: 'json', id: @list.id
    assert_response :success

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert composed_response['success']
    assert !composed_response['data'].empty?
    assert_equal "Shopping list for today", composed_response['data'][0]['title']
  end


  test "should create list" do
    assert_difference('TodoList.count') do
        post :create, format: 'json', todo_list: {title: "My list"}
    end
    assert_response :created

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert composed_response['success']
    assert !composed_response['data'].empty?
    assert_equal "My list", composed_response['data'][0]['title']
    assert_not_nil TodoList.find_by_title("My list")
  end

  test "should not create list with empty title" do
    title = ""
    assert_difference('TodoList.count', 0) do
        post :create, format: 'json', todo_list: {title: title}
    end
    assert_response :success

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert !composed_response['success']
    assert composed_response['data'].empty?
    assert_equal composed_response['message']['title'][0], "can't be blank"
    assert_nil TodoList.find_by_title(title)
  end


  test "should update list" do
    put :update, format: 'json', id: @list.id, todo_list: {title: "Shopping list for tomorrow"}
    assert_response :success

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert composed_response['success']
    assert composed_response['data'].empty?
  end

  test "should not update list with empty title" do
    title = ""
    put :update, format: 'json', id: @list.id, todo_list: {title: title}
    assert_response :success

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert !composed_response['success']
    assert composed_response['data'].empty?
    assert_equal composed_response['message']['title'][0], "can't be blank"
    assert_equal TodoList.find(@list.id).title, "Shopping list for today"
  end
  

  test "should destroy list" do
    assert_difference('TodoList.count', -1) do
      delete :destroy, format: 'json', id: @list.id
    end

    assert_response :success

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert composed_response['success']
    assert composed_response['data'].empty?

    assert_nil TodoList.find_by_title("Shopping list for today")
  end

  test "should not get a non existent list" do
    get :show, format: 'json', id: @list.id+1234

    assert_response :success

    composed_response = JSON.parse(@response.body)

    assert_equal composed_response.length, 3
    assert !composed_response['success']
    assert composed_response['data'].empty?
    assert_equal "Data not found", composed_response['message']

  end

end
