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

    editTodoList: function(grid, record) {
        var view = Ext.widget('todolistedit');

        view.down('form').loadRecord(record);
    },

    updateTodoList: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
        record.set(values);
        win.close();
        this.getTodoListsStore().sync();
    },

    loadChildItems: function(grid, record) {
        var itemsStore = this.getTodoItemsStore();
        itemsStore.load({
            url:'todo_lists/' + record.get('id') + '/todo_items'
        });

    },

    addItem: function(button) {

        var model = Ext.ComponentQuery.query('todolist')[0],
            selectedModel = model.getSelectionModel().getSelection()[0];

        var itemsStore = this.getTodoItemsStore();
        itemsStore.getProxy().url = 'todo_lists/' + selectedModel.internalId + '/todo_items';

        var form = button.up('panel').getForm(),
            values = form.getValues();

        if (form.isValid()) {
            form.reset();
            itemsStore.add(values);
        }
        itemsStore.sync();
    }
});