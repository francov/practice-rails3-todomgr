/**
 * The TodoItems store uses the {@link TM.model.TodoItem} model, and a rest proxy.
 * Urls are formatted using the _.json_ suffix.
 */
Ext.define('TM.store.TodoItems', {
    extend: 'Ext.data.Store',
    
    model: 'TM.model.TodoItem',

    proxy: {
        type: 'rest',
        url: 'todo_items',
        format: 'json',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});
