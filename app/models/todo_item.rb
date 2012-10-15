class TodoItem < ActiveRecord::Base
  attr_accessible :description, :status, :todo_list_id
  
  belongs_to :todo_list
  
  validates :description, presence: true
  validates :description, length: { maximum: 150, message: "must be up to %{count} chars"}
  validates :status, inclusion: {in: %w{uncompleted completed}, message: "is not a valid status"}
  validates :todo_list_id, presence: true
  
end
