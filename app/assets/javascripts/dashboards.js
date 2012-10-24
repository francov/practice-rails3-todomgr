/**
 *= require_tree ./app/model
 *= require_tree ./app/store
 *= require_tree ./app/view
 *= require_tree ./app/controller
 *= require_self
 */
Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'TM',

    appFolder: 'app',

    controllers: [
        'TodoLists'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout:'border',
            defaults: {
                collapsible: true,
                split: true
            },
            items: [{
                xtype: 'todolist',
                region:'west',
                margins: '5 0 0 0',
                cmargins: '5 5 0 0',
                width: 175,
                maxSize: 250
            },{
                xtype: 'panel',
                title: 'Todo Items',
                collapsible: false,
                region:'center',
                margins: '5 0 0 0',
                collapsible: false
            }]
        });
    }
});