Ext.data.JsonP.TM_controller_TodoItems({"tagname":"class","name":"TM.controller.TodoItems","extends":"Ext.app.Controller","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-TM.controller.TodoItems","code_type":"ext_define","members":{"cfg":[],"property":[{"name":"models","tagname":"property","owner":"TM.controller.TodoItems","meta":{"private":true},"id":"property-models"},{"name":"stores","tagname":"property","owner":"TM.controller.TodoItems","meta":{"private":true},"id":"property-stores"},{"name":"views","tagname":"property","owner":"TM.controller.TodoItems","meta":{"private":true},"id":"property-views"}],"method":[{"name":"control","tagname":"method","owner":"TM.controller.TodoItems","meta":{},"id":"method-control"},{"name":"editTodoItem","tagname":"method","owner":"TM.controller.TodoItems","meta":{},"id":"method-editTodoItem"},{"name":"init","tagname":"method","owner":"TM.controller.TodoItems","meta":{"private":true},"id":"method-init"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"TodoItems.js","href":"TodoItems2.html#TM-controller-TodoItems"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.app.Controller"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.app.Controller<div class='subclass '><strong>TM.controller.TodoItems</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/TodoItems2.html#TM-controller-TodoItems' target='_blank'>TodoItems.js</a></div></pre><div class='doc-contents'><p>TodoItems Controller. This controller is responsible for managing events and logic\nfor the following views:</p>\n\n<ul>\n<li><a href=\"#!/api/TM.view.todoitem.List\" rel=\"TM.view.todoitem.List\" class=\"docClass\">TM.view.todoitem.List</a></li>\n<li><a href=\"#!/api/TM.view.todoitem.ItemField\" rel=\"TM.view.todoitem.ItemField\" class=\"docClass\">TM.view.todoitem.ItemField</a></li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-models' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TM.controller.TodoItems'>TM.controller.TodoItems</span><br/><a href='source/TodoItems2.html#TM-controller-TodoItems-property-models' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TM.controller.TodoItems-property-models' class='name expandable'>models</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>['TodoList', 'TodoItem']</code></p></div></div></div><div id='property-stores' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TM.controller.TodoItems'>TM.controller.TodoItems</span><br/><a href='source/TodoItems2.html#TM-controller-TodoItems-property-stores' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TM.controller.TodoItems-property-stores' class='name expandable'>stores</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>['TodoItems']</code></p></div></div></div><div id='property-views' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TM.controller.TodoItems'>TM.controller.TodoItems</span><br/><a href='source/TodoItems2.html#TM-controller-TodoItems-property-views' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TM.controller.TodoItems-property-views' class='name expandable'>views</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>['todoitem.List', 'todoitem.ItemField']</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-control' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TM.controller.TodoItems'>TM.controller.TodoItems</span><br/><a href='source/TodoItems2.html#TM-controller-TodoItems-method-control' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TM.controller.TodoItems-method-control' class='name expandable'>control</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Adds listeners to the following components:\n\n\n'todoitemlist' -> edit ...</div><div class='long'><p>Adds listeners to the following components:</p>\n\n<ul>\n<li><strong>'todoitemlist'</strong> -> <a href=\"#!/api/TM.controller.TodoItems-method-editTodoItem\" rel=\"TM.controller.TodoItems-method-editTodoItem\" class=\"docClass\">edit</a></li>\n</ul>\n\n</div></div></div><div id='method-editTodoItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TM.controller.TodoItems'>TM.controller.TodoItems</span><br/><a href='source/TodoItems2.html#TM-controller-TodoItems-method-editTodoItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TM.controller.TodoItems-method-editTodoItem' class='name expandable'>editTodoItem</a>( <span class='pre'>editor, e</span> )</div><div class='description'><div class='short'>Edit event handler for the TM.view.todoitem.List's row editors. ...</div><div class='long'><p>Edit event handler for the <a href=\"#!/api/TM.view.todoitem.List\" rel=\"TM.view.todoitem.List\" class=\"docClass\">TM.view.todoitem.List</a>'s row editors.\nIt simply <em>sync</em> the <a href=\"#!/api/TM.store.TodoItems\" rel=\"TM.store.TodoItems\" class=\"docClass\">TM.store.TodoItems</a> store to save just edited row.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>editor</span> : Ext.Editor<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TM.controller.TodoItems'>TM.controller.TodoItems</span><br/><a href='source/TodoItems2.html#TM-controller-TodoItems-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TM.controller.TodoItems-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>"});