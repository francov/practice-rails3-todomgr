Ext.define('TM.view.todoitem.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.todoitemlist',

    title: 'Todos',
    emptyText: 'No items here.',

    store: 'TodoItems',

    plugins: [
        {
            ptype: 'cellediting',
            clicksToEdit: 2
        }
    ],

    initComponent: function() {

        this.columns = [
            {
                header: 'Status',
                dataIndex: 'status',
                flex: 1,
                editor: {
                    xtype: 'checkbox',
                }
            },{
                header: 'Description',
                dataIndex: 'description',
                flex: 5,
                editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },{
                xtype:'actioncolumn',
                width:50,
                items: [{
                    icon: 'assets/delete.png',
                    tooltip: 'Delete',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.store.getAt(rowIndex);
                        grid.store.remove(rec);
                        grid.store.sync();
                    }
                }]
            }
        ];

        this.callParent(arguments);
    }
});