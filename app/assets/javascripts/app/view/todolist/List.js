Ext.define('TM.view.todolist.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.todolist',

    title: 'All lists',
    hideHeaders: true,

    store: 'TodoLists',

    selModel: {
        selType: 'rowmodel'
    },

    initComponent: function() {

        this.columns = [
            {header: 'Title',  dataIndex: 'title',  flex: 1}
        ];

        this.callParent(arguments);
    }
});