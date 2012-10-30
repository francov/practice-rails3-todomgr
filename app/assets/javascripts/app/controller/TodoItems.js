Ext.define('TM.controller.TodoItems', {
    extend: 'Ext.app.Controller',

	stores: [
        'TodoItems'
    ],
    models: [
        'TodoList',
        'TodoItem'
    ],

    views: [
        'todoitem.List',
        'todoitem.ItemField'
    ],

    init: function() {
        this.control({
            'todoitemlist': {
                edit: this.editTodoItem
            }
        });
    },

    editTodoItem: function(editor, e) {
        this.getTodoItemsStore().sync();
    }

});