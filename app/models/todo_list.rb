class TodoList < ActiveRecord::Base
  attr_accessible :title
  
  has_many :todo_items, dependent: :destroy
  
  validates :title, presence: true
  validates :title, length: { maximum: 100, message: "must be up to %{count} chars"}
end
