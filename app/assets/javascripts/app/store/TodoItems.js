Ext.define('TM.store.TodoItems', {
    extend: 'Ext.data.Store',
    
    model: 'TM.model.TodoItem',
    // autoLoad: true,

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