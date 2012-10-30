/**
 *= require_tree ./app/util
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
        'TodoLists',
        'TodoItems'
    ],

    launch: function() {

        // Observe exception on every data proxy
        Ext.util.Observable.observe(Ext.data.proxy.Server);
        Ext.data.proxy.Server.on('exception', TM.util.Exception.StoreExceptionHandler);

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
                region:'center',
                collapsible: false,
                items: [{
                        xtype: 'todoitemfield',
                        margins: '5 0 0 0'
                    },{
                        xtype: 'todoitemlist',
                        margins: '5 0 0 0'
                    }]
            }]
        });
    }
});