class CreateTodoItems < ActiveRecord::Migration
  def change
    create_table :todo_items do |t|
      t.string :description, null: false
      t.string :status, default: 'uncompleted'
      t.integer :todo_list_id

      t.timestamps
    end
  end
end
