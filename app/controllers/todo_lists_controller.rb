class TodoListsController < ApplicationController
  
  # GET /todo_lists
  # GET /todo_lists.json
  def index
    @lists = TodoList.all
    
    respond_to do |format|
      format.html
      format.json {render json: @lists}
    end
    
  end

  # GET /todo_lists/1
  # GET /todo_lists/1.json
  def show
    @list = TodoList.find(params[:id])
    
    respond_to do |format|
      format.html
      format.json {render json: @list}
    end
  end

  # GET /todo_lists/new
  # GET /todo_lists/new.json
  def new
    @list = TodoList.new

    respond_to do |format|
      format.html
      format.json { render json: @list }
    end
  end

  # GET /todo_lists/1/edit
  def edit
    @list = TodoList.find(params[:id])
  end

  # POST /todo_lists
  # POST /todo_lists.json
  def create
    @list = TodoList.new(params[:todo_list])

    respond_to do |format|
      if @list.save
        format.html { redirect_to @list, notice: 'TodoList was successfully created.' }
        format.json { render json: @list, status: :created, location: @list }
      else
        format.html { render action: "new" }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /todo_lists/1
  # PUT /todo_lists/1.json
  def update
    @list = TodoList.find(params[:id])

    respond_to do |format|
      if @list.update_attributes(params[:todo_list])
        format.html { redirect_to @list, notice: 'TodoList was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /todo_lists/1
  # DELETE /todo_lists/1.json
  def destroy
    @list = TodoList.find(params[:id])
    @list.destroy

    respond_to do |format|
      format.html { redirect_to todo_lists_url }
      format.json { head :no_content }
    end
  end
end
