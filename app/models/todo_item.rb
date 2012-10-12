class TodoItem < ActiveRecord::Base
  attr_accessible :description, :status, :todo_list_id
  
  belongs_to :todo_list
end
