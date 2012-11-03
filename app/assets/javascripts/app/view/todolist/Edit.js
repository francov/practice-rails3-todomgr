/**
 * The Edit view for a {@link TM.model.TodoList} item.
 */
Ext.define('TM.view.todolist.Edit' ,{
    extend: 'Ext.window.Window',
    alias: 'widget.todolistedit',

    title: 'Edit TodoList',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        /**
         * An item of type {@link Ext.form.Panel} containing:
         * 
         * - **id**: _hiddenfield_
         * - **title**: _textfield_
         */
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

        /**
         * Two buttons ({@link Ext.button.Button}): _Save_ and _Cancel_.
         */
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