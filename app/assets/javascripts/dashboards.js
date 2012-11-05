/**
 *= require_tree ./app/util
 *= require_tree ./app/model
 *= require_tree ./app/store
 *= require_tree ./app/view
 *= require_tree ./app/controller
 *= require_self
 */


/**
 * @class TM.Dashboard
 * TodoManager Application entry point. Here we create a {@link Ext.container.Viewport}
 * containing the main components of the application.
 */
Ext.application({
    name: 'TM',
    appFolder: 'app',

    controllers: [
        'TodoLists',
        'TodoItems'
    ],

    launch: function() {

        // Observe event exception on every data proxy
        // Sulla doc è dichiarato che usa il mixin Observable, ma in questo caso
        // l'oggetto Server non aveva il metodo on().
        // http://docs.sencha.com/ext-js/4-1/#!/api/Ext.data.proxy.Server
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
