/**
 * TodoLists Controller. This controller is responsible for managing events and logic 
 * for the following views:
 *
 * - {@link TM.view.todolist.List}
 * - {@link TM.view.todolist.Edit}
 * - {@link TM.view.todoitem.List}
 * - {@link TM.view.todoitem.ItemField}
 *
 */


Ext.define('TM.controller.TodoLists', {
    extend: 'Ext.app.Controller',

	stores: [
        'TodoLists',
        'TodoItems'
    ],
    models: [
        'TodoList',
        'TodoItem'
    ],

    views: [
        'todolist.List',
        'todolist.Edit',
        'todoitem.List',
        'todoitem.ItemField'
    ],

    init: function() {
        /**
         * @method control
         * Adds listeners to the following components:
         * 
         * - **'todolist'** -> {@link #editTodoList itemdblclick} {@link #loadChildItems itemclick}
         * - **'todolistedit button[action=save]'** -> {@link #updateTodoList click}
         * - **'todoitemfield button[action=add]'** -> {@link #addItem click}
         */
        this.control({
            'todolist': {
                itemdblclick: this.editTodoList,
                itemclick: this.loadChildItems
            },
            'todolistedit button[action=save]': {
                click: this.updateTodoList
            },
            'todoitemfield button[action=add]': {
                click: this.addItem
            }
        });
    },

    /**
     * Itemdblclick event handler for the {@link TM.view.todolist.List 'todolist'} component.
     * It loads a {@link TM.model.TodoList TodoList} record into the form panel contained 
     * in {@link TM.view.todolist.Edit} component.
     *
     * @param {Ext.grid.Panel} grid
     * @param {Ext.data.Model} record
     */
    editTodoList: function(grid, record) {
        var view = Ext.widget('todolistedit');

        view.down('form').loadRecord(record);
    },

    /**
     * Click event handler for the {@link TM.view.todolist.Edit}'s _Save_ button.
     * It gets values from the form, set those values in a record and perform a _sync()_ 
     * on the {@link TM.store.TodoItems TodoItems store}.
     *
     * @param {Ext.button.Button} button
     */
    updateTodoList: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
        record.set(values);
        win.close();
        this.getTodoListsStore().sync();
    },

    /**
     * Itemclick event handler for the {@link TM.view.todolist.List 'todolist'} component.
     * It loads all the {@link TM.model.TodoItem TodoItem} records belonging to the current TodoList.
     * This is achived by modifying the {@link TM.store.TodoItems} store url to be nested (eg.: _todo_Lists/1/todo_items_)
     *
     * @param {Ext.grid.Panel} grid
     * @param {Ext.data.Model} record
     */
    loadChildItems: function(grid, record) {
        var itemsStore = this.getTodoItemsStore(),
            old_url = itemsStore.getProxy().url;
        itemsStore.load({
            url:'todo_lists/' + record.get('id') + '/todo_items'
        });

        // here we reset the original url.
        itemsStore.getProxy().url = old_url;
    },

    /**
     * Click event handler for the {@link TM.view.todoitem.ItemField}'s _Add_ button.
     * It create a new record retriving form values, than it try to save the record
     * after rewriting the {@link TM.model.TodoItem} model's url to be nested. In the
     * end it reload the {@link TM.store.TodoItems} store.
     * 
     * @param {Ext.button.Button} button
     */
    addItem: function(button) {

        var model = Ext.ComponentQuery.query('todolist')[0],
            selectedModel = model.getSelectionModel().getSelection()[0],
            itemsStore = this.getTodoItemsStore(),
            old_url = itemsStore.getProxy().url;

        itemsStore.getProxy().url = 'todo_lists/' + selectedModel.getId() + '/todo_items';

        var form = button.up('panel').getForm(),
            values = form.getValues();

        // For handling success and failure we need to create a new record, and save 
        // to the server through his proxy.
        var record = Ext.create('TM.model.TodoItem', form.getValues());
        form.clearInvalid();

        record.getProxy().url = 'todo_lists/' + selectedModel.getId() + '/todo_items';
        record.save({
            success: function (record, op) {
                itemsStore.load();
                form.reset();
                Ext.Msg.show({
                    title : 'Success',
                    msg : op.request.scope.reader.jsonData["message"],
                    modal : true,
                    buttons : Ext.Msg.OK
                });
            },
            failure: function(record,op) {
                form.markInvalid(op.getError());
            },
            callback: function () {
                record.getProxy().url = old_url;
                itemsStore.getProxy().url = old_url;
            }
        });
    }
});