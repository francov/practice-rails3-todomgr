/**
 * TodoItems Controller. This controller is responsible for managing events and logic 
 * for the following views:
 * 
 * - {@link TM.view.todoitem.List}
 * - {@link TM.view.todoitem.ItemField}
 *
 */
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
        /**
         * @method control
         * Adds listeners to the following components:
         * 
         * - **'todoitemlist'** -> {@link #editTodoItem edit}
         */
        this.control({
            'todoitemlist': {
                edit: this.editTodoItem
            }
        });
    },

    /**
     * Edit event handler for the {@link TM.view.todoitem.List}'s row editors.
     * It simply _sync_ the {@link TM.store.TodoItems} store to save just edited row.
     * 
     * @param {Ext.Editor} editor
     * @param {Event} e
     */
    editTodoItem: function(editor, e) {
        this.getTodoItemsStore().sync();
    }

});