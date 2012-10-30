Ext.define('TM.model.TodoItem', {
    extend: 'Ext.data.Model',
    fields: ['id', 'description', 'status', 'todo_list_id'],

    proxy: {
        type: 'rest',
        url: 'todo_items',
        format: 'json',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success',
            messageProperty: 'message'
        }
    }
});