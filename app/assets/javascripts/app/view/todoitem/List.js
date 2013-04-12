/**
 * TodoItem list view. This is a grid panel ({@link Ext.grid.Panel}) responsible for 
 * the rendering of todo items for the current todo list.
 */
Ext.define('TM.view.todoitem.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.todoitemlist',

    title: 'Todos',
    emptyText: 'No items here.',

    store: 'TodoItems',

    /**
     * @property plugins The plugins to use in this view
     * @property plugins.ptype The plugin type
     * @property plugins.clicksToEdit The number of click to activate the editing
     */
    plugins: [{
        ptype: 'cellediting',
        clicksToEdit: 2
    }],

    initComponent: function() {

        this.columns = [
            {
                header: 'Status',
                dataIndex: 'status',
                flex: 1,
                editor: {
                    xtype: 'combobox',
                    valueField: 'status',
                    store: ['completed', 'uncompleted']
                }
            },{
                header: 'Description',
                dataIndex: 'description',
                flex: 10,
                editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            },{
                header: 'Actions',
                xtype:'actioncolumn',
                align: 'center',
                width:50,
                items: [{
                    icon: 'assets/delete.png',
                    tooltip: 'Delete',
                    /**
                     * Handle the delete action on a row.
                     * @param {Ext.grid.Panel} grid
                     * @param  {Number} rowIndex The row index
                     * @param  {Number} colIndex The column index
                     */
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
