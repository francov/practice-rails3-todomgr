/**
 * TodoItem field. This is an {@link Ext.panel.Panel} containing a {@link Ext.form.Panel form}
 * for the submission of a new item for to current list.
 * This form contains a description and an add button, which is managed by the
 * {@link TM.controller.TodoLists} controller.
 */
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
                        fieldLabel: 'Description',
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
                        action: 'add',
                        formBind: true
                    }
                ]
            }
        ];
        this.callParent(arguments);
    }
});
