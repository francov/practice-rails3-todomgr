class TodoList < ActiveRecord::Base
  attr_accessible :title
  
  has_many :todo_items, dependent: :destroy
end
