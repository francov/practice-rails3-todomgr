Ext.define('TM.view.todoitem.ItemField' ,{
    extend: 'Ext.panel.Panel',
    alias: 'widget.todoitemfield',

    bodyPadding: 5,
    title: 'Add a todo.',
    layout: {
        type: 'vbox'
    },

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                border: false,
                items: [
                    {
                        xtype: 'hiddenfield',
                        name : 'id'
                    },{
                        xtype: 'textfield',
                        name : 'description',
                        emptyText: 'What do you have to do here?',
                        width: 450,
                        height: 35
                    },{
                        xtype: 'hiddenfield',
                        name : 'status',
                        value: 'uncompleted'
                    }
                ],
                buttons: [
                    {
                        text: 'Add',
                        action: 'add'
                    }
                ]
            }
        ];
        this.callParent(arguments);
    }
});
