/**
 * TodoItem model. We have a rest proxy, and urls are formatted using the _.json_ suffix.
 */
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