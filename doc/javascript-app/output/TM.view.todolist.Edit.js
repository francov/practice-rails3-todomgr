Ext.data.JsonP.TM_view_todolist_Edit({"tagname":"class","name":"TM.view.todolist.Edit","extends":"Ext.window.Window","mixins":[],"alternateClassNames":[],"aliases":{"widget":["todolistedit"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-TM.view.todolist.Edit","code_type":"ext_define","members":{"cfg":[],"property":[{"name":"autoShow","tagname":"property","owner":"TM.view.todolist.Edit","meta":{"private":true},"id":"property-autoShow"},{"name":"buttons","tagname":"property","owner":"TM.view.todolist.Edit","meta":{},"id":"property-buttons"},{"name":"items","tagname":"property","owner":"TM.view.todolist.Edit","meta":{},"id":"property-items"},{"name":"layout","tagname":"property","owner":"TM.view.todolist.Edit","meta":{"private":true},"id":"property-layout"},{"name":"title","tagname":"property","owner":"TM.view.todolist.Edit","meta":{"private":true},"id":"property-title"}],"method":[{"name":"initComponent","tagname":"method","owner":"TM.view.todolist.Edit","meta":{"private":true},"id":"method-initComponent"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Edit.js","href":"Edit.html#TM-view-todolist-Edit"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.window.Window"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.window.Window<div class='subclass '><strong>TM.view.todolist.Edit</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Edit.html#TM-view-todolist-Edit' target='_blank'>Edit.js</a></div></pre><div class='doc-contents'><p>The Edit view for a <a href=\"#!/api/TM.model.TodoList\" rel=\"TM.model.TodoList\" class=\"docClass\">TM.model.TodoList</a> item.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-autoShow' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TM.view.todolist.Edit'>TM.view.todolist.Edit</span><br/><a href='source/Edit.html#TM-view-todolist-Edit-property-autoShow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TM.view.todolist.Edit-property-autoShow' class='name expandable'>autoShow</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-buttons' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TM.view.todolist.Edit'>TM.view.todolist.Edit</span><br/><a href='source/Edit.html#TM-view-todolist-Edit-property-buttons' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TM.view.todolist.Edit-property-buttons' class='name not-expandable'>buttons</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>Two buttons (Ext.button.Button): <em>Save</em> and <em>Cancel</em>.</p>\n</div><div class='long'><p>Two buttons (Ext.button.Button): <em>Save</em> and <em>Cancel</em>.</p>\n</div></div></div><div id='property-items' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TM.view.todolist.Edit'>TM.view.todolist.Edit</span><br/><a href='source/Edit.html#TM-view-todolist-Edit-property-items' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TM.view.todolist.Edit-property-items' class='name expandable'>items</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'>An item of type Ext.form.Panel containing:\n\n\nid: hiddenfield\ntitle: textfield ...</div><div class='long'><p>An item of type Ext.form.Panel containing:</p>\n\n<ul>\n<li><strong>id</strong>: <em>hiddenfield</em></li>\n<li><strong>title</strong>: <em>textfield</em></li>\n</ul>\n\n<p>Defaults to: <code>[{xtype: 'form', items: [{xtype: 'hiddenfield', name: 'id'}, {xtype: 'textfield', name: 'title', fieldLabel: 'Title'}]}]</code></p></div></div></div><div id='property-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TM.view.todolist.Edit'>TM.view.todolist.Edit</span><br/><a href='source/Edit.html#TM-view-todolist-Edit-property-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TM.view.todolist.Edit-property-layout' class='name expandable'>layout</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'fit'</code></p></div></div></div><div id='property-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TM.view.todolist.Edit'>TM.view.todolist.Edit</span><br/><a href='source/Edit.html#TM-view-todolist-Edit-property-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TM.view.todolist.Edit-property-title' class='name expandable'>title</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Edit TodoList'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initComponent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='TM.view.todolist.Edit'>TM.view.todolist.Edit</span><br/><a href='source/Edit.html#TM-view-todolist-Edit-method-initComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/TM.view.todolist.Edit-method-initComponent' class='name expandable'>initComponent</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>"});