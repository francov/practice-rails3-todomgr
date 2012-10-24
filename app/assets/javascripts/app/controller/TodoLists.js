Ext.define('TM.controller.TodoLists', {
    extend: 'Ext.app.Controller',

	stores: ['TodoLists'],
    models: ['TodoList'],

    views: [
        'todolist.List',
        'todolist.Edit'
    ],

    init: function() {
        this.control({
            'todolist': {
                itemdblclick: this.editTodoList
            },
            'todolistedit button[action=save]': {
                click: this.updateTodoList
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
    }
});