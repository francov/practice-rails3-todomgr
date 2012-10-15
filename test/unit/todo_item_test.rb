require 'test_helper'

class TodoItemTest < ActiveSupport::TestCase
  
  test "a todoitem must have a valid description" do 
    item = TodoItem.new
    
    assert item.invalid?
    assert item.errors[:description].any?
    assert_equal "uncompleted", item.status
    assert item.errors[:todo_list_id].any?
  end
  
  test "a todoitem description must have a valid length (150)" do 
    item = TodoItem.new(description: "a" * 160,
                        todo_list_id: 1)
    
    assert item.invalid?
    assert item.errors[:description].any?
    assert_equal "must be up to 150 chars", item.errors[:description].join("; ")
  end
  
  test "a todoitem must have a valid status" do 
    item = TodoItem.new(description: "potatoes",
                        status: "incomplete",
                        todo_list_id: 1)
    
    assert item.invalid?
    assert item.errors[:status].any?
    assert_equal "is not a valid status", item.errors[:status].join("; ")
  end
  
end
