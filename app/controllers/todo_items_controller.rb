class TodoItemsController < ApplicationController

  # GET /todo_items
  # GET /todo_items.json
  # GET /todo_lists/1/todo_items.json
  def index
    @parent_list = TodoList.find(params[:todo_list_id])
    @items = @parent_list.todo_items
    
    respond_to do |format|
      format.html
      format.json {render json: {
        success: true,
        data: @items,
        message: "All Todo items"
      }}
    end
  end

  # GET /todo_items/1
  # GET /todo_items/1.json
  # GET /todo_lists/1/todo_items/1.json
  def show
    @item = TodoItem.find(params[:id])
    
    respond_to do |format|
      format.html
      format.json {render json: {
        success:true, 
        data: [@item],
        message: "TodoItem found."
      }}
    end
  end

  # POST /todo_items
  # POST /todo_items.json
  # POST /todo_lists/1/todo_items.json
  def create
    @parent_list = TodoList.find(params[:todo_list_id])
    
    @item = TodoItem.new(params[:todo_item])
    @item.todo_list_id = @parent_list.id

    respond_to do |format|
      if @item.save
        format.html { redirect_to @item, notice: 'TodoItem was successfully created.' }
        format.json { render json: {
          success: true,
          data: [@item],
          message: "TodoItem was successfully created."
        }, status: :created, location: @item }
      else
        format.html { render action: "new" }
        format.json { render json: {
          success: false,
          data: [],
          message: @item.errors
        }}
      end
    end
  end

  # PUT /todo_items/1
  # PUT /todo_items/1.json
  def update
    @item = TodoItem.find(params[:id])

    respond_to do |format|
      if @item.update_attributes(params[:todo_item])
        format.html { redirect_to @item, notice: 'TodoItem was successfully updated.' }
        format.json {render json: {
          success: true,
          data: [],
          message: "TodoItem was successfully updated."
        }}
      else
        format.html { render action: "edit" }
        format.json { render json: {
          success: false,
          data: [],
          message: @item.errors
        }}
      end
    end
  end

  # DELETE /todo_items/1
  # DELETE /todo_items/1.json
  def destroy
    @item = TodoItem.find(params[:id])
    @item.destroy

    respond_to do |format|
      format.html { redirect_to todo_lists_url }
      format.json {render json: {
        success: true,
        data: [],
        message: "TodoItem was successfully deleted."
      }}
    end
  end

  # GET /todo_lists/search.json
  def search
    @items = TodoItem.search do |q|
      q.text_fields { with(:description).starting_with(params[:query])}
    end
    puts "DEBUG: #{@items.results}"
    respond_to do |format|
      format.html
      format.json {render json: {
        success: true,
        data: @items.results.to_a,
        message: "All Todo items"
      }}
    end
  end
end
