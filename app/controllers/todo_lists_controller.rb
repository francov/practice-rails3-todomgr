class TodoListsController < ApplicationController
  
  # GET /todo_lists
  # GET /todo_lists.json
  def index
    @lists = TodoList.all

    respond_to do |format|
      format.html
      format.json { render json: {
        success: true, 
        data: @lists, 
        message: "All Todo lists"
      }}
    end
    
  end

  # GET /todo_lists/1
  # GET /todo_lists/1.json
  def show
    @list = TodoList.find(params[:id])
    
    respond_to do |format|
      format.html
      format.json { render json: {
        success: true, 
        data: [@list], 
        message: "TodoList found."
      }}
    end
  end

  # POST /todo_lists
  # POST /todo_lists.json
  def create
    @list = TodoList.new(params[:todo_list])

    respond_to do |format|
      if @list.save
        format.html { redirect_to @list, notice: 'TodoList was successfully created.' }
        format.json { render json: { 
          success: true,
          data: [@list],
          message: "TodoList was successfully created."
        }, status: :created, location: @list }
      else
        format.html { render action: "new" }
        format.json { render json: {
          success: false,
          data: [],
          message: @list.errors
        }, status: :unprocessable_entity }
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
        format.json { render json: {
          success: true,
          data: [],
          message: "TodoList was successfully updated."
        }}
      else
        format.html { render action: "edit" }
        format.json { render json: {
          success: false,
          data: [],
          message: @list.errors
        }, status: :unprocessable_entity }
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
      format.json { render json: {
        success: true,
        data: [],
        message: "TodoList was successfully deleted."
      }}
    end
  end
end
