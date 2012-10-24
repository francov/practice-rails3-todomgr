Ext.define('TM.store.TodoLists', {
    extend: 'Ext.data.Store',
    
    model: 'TM.model.TodoList',
    autoLoad: true,

    proxy: {
        type: 'rest',
        url: 'todo_lists',
        format: 'json',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});