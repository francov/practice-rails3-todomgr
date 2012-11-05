/**
 *= require jquery
 *= require application
 *= require_tree ../../app/assets/javascripts/app/util
 *= require_tree ../../app/assets/javascripts/app/model
 *= require_tree ../../app/assets/javascripts/app/store
 *= require_tree ../../app/assets/javascripts/app/view
 *= require_tree ../../app/assets/javascripts/app/controller
 *= require_self
 *= require_tree .
 */

var Application = null;

Ext.onReady(function() {
    Application = Ext.create('Ext.app.Application', {
        name: 'TM',
	    controllers: [
	        'TodoLists',
	        'TodoItems'
	    ],

        launch: function() {
        	Ext.util.Observable.observe(Ext.data.proxy.Server);
        	Ext.data.proxy.Server.on('exception', TM.util.Exception.StoreExceptionHandler);

        	Ext.create('Ext.window.Window', {
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
});