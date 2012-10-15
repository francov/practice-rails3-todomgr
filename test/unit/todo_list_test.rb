require 'test_helper'

class TodoListTest < ActiveSupport::TestCase
  
  test "a todolist must have a valid title" do 
    todo_list = TodoList.new
    
    assert todo_list.invalid?
    assert todo_list.errors[:title].any?
  end
  
  test "a todolist title must be up to 100 chars length" do 
    todo_list = TodoList.new
                    
    assert todo_list.invalid?
    todo_list.title = "a" * 120
    
    assert todo_list.invalid?                 
    assert todo_list.errors[:title].any?
    assert_equal "must be up to 100 chars", todo_list.errors[:title].join("; ")
    
    todo_list.title = "This is ok"
    assert todo_list.valid?
  end
  
end
