Ext.define('TM.view.todolist.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.todolist',

    title: 'All lists',

    store: 'TodoLists',

    initComponent: function() {

        this.columns = [
            {header: 'Title',  dataIndex: 'title',  flex: 1}
        ];

        this.callParent(arguments);
    }
});