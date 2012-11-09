/**
 * This is a grid panel ({@link Ext.grid.Panel}).
 */
Ext.define('TM.view.todolist.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.todolist',

    title: 'All lists',

    /**
     * Hide header row
     */
    hideHeaders: true,

    store: 'TodoLists',

    /**
     * @property selModel The selection model
     * @property selModel.selType The selection type
     */
    selModel: {
        selType: 'rowmodel'
    },

    initComponent: function() {

        this.columns = [
            {
                header: 'Title',
                dataIndex: 'title',
                flex: 1,
                allowBlank: false
            }
        ];

        this.callParent(arguments);
    }
});