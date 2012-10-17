class TodoItemsController < ApplicationController

  # GET /todo_items
  # GET /todo_items.json
  # GET /todo_lists/1/todo_items.json
  def index
    @items = TodoList.find(params[:todo_list_id]).todo_items
    
    respond_to do |format|
      format.html
      format.json {render json: @items}
    end
    
    rescue ActiveRecord::RecordNotFound
      respond_to do |format|
        format.json { head :not_found }
      end
  end

  # GET /todo_items/1
  # GET /todo_items/1.json
  # GET /todo_lists/1/todo_items/1.json
  def show
    @item = TodoItem.find(params[:id])
    
    respond_to do |format|
      format.html
      format.json {render json: @item}
    end
    
    rescue ActiveRecord::RecordNotFound
      respond_to do |format|
        format.json { head :not_found }
      end
  end

  # POST /todo_items
  # POST /todo_items.json
  # POST /todo_lists/1/todo_items.json
  def create
    
    @item = TodoItem.new(params[:todo_item])

    respond_to do |format|
      if @item.save
        format.html { redirect_to @item, notice: 'TodoItem was successfully created.' }
        format.json { render json: @item, status: :created, location: @item }
      else
        format.html { render action: "new" }
        format.json { render json: @item.errors, status: :unprocessable_entity }
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
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @item.errors, status: :unprocessable_entity }
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
      format.json { head :no_content }
    end
  end
end
