describe("TodoLists", function() {
    var list_store = null,
    	ctlr = null,
    	item_store = null,
    	load_done = false;

    beforeEach(function(){
    	
        if (!ctlr) {
            ctlr = Application.getController('TodoLists');
        }

        if (!list_store) {
            list_store = ctlr.getStore('TodoLists');
        }

        expect(list_store).toBeTruthy();
        list_store.reload();

        waitsFor(
            function(){ return !list_store.isLoading(); },
            "load never completed",
            4000
        );

        load_done = false;
        runs(function(){
        	list_store.addListener("load", function() {
               load_done = true;
        	}, this);
        });
        waitsFor(function() { return load_done; }, "load event never fired", 4000);
        // if (!item_store) {
        //     item_store = ctlr.getStore('TodoItems');
        // }

        // expect(item_store).toBeTruthy();

	    //waits(300);
    });
    afterEach(function() {
      list_store.removeAll();
      //list_store.clearListeners();
    });

    it("should have todolists",function(){
        expect(list_store.getCount()).toBeGreaterThan(1);
    });

    it("should open the editor window", function(){
        var grid = Ext.ComponentQuery.query('todolist')[0];
        console.log(grid);
        ctlr.editTodoList(grid,list_store.getAt(0));

        var edit = Ext.ComponentQuery.query('todolistedit')[0];

        expect(edit).toBeTruthy();
        if(edit) edit.destroy();
    });

    // it("should load child todoitems", function(){
    //     var grid = Ext.ComponentQuery.query('todolist')[0];

    //     // ctlr.loadChildItems(grid,list_store.getAt(0));

      
    //     runs(function(){
    //     	ctlr.loadChildItems(grid,list_store.getAt(0));
    //     });
    //     waits(500);

    //     var items_grid = Ext.ComponentQuery.query('todoitemlist')[0];

    //     expect(items_grid).toBeTruthy();
    //     expect(items_grid.getCount()).toBeGreaterThan(1);
    //     if(items_grid) items_grid.destroy();
    // });

});