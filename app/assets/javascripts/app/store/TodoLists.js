/**
 * The TodoLists store uses the {@link TM.model.TodoList} model, and a rest proxy.
 * Urls are formatted using the _.json_ suffix.
 */
Ext.define('TM.store.TodoLists', {
    extend: 'Ext.data.Store',
    
    model: 'TM.model.TodoList',

    /**
     * We want to load on instantiation
     */
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