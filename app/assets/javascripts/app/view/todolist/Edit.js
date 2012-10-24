Ext.define('TM.view.todolist.Edit' ,{
    extend: 'Ext.window.Window',
    alias: 'widget.todolistedit',

    title: 'Edit TodoList',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                	{
                		xtype: 'hiddenfield',
                        name : 'id'
                	},{
                        xtype: 'textfield',
                        name : 'title',
                        fieldLabel: 'Title'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});