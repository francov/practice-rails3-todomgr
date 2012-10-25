Ext.define('TM.model.TodoItem', {
    extend: 'Ext.data.Model',
    fields: ['id', 'description', 'status', 'todo_list_id']

	// fields: ['id', 'description', 
	// {
	//     name: 'status',
	//     type: 'boolean',
	//     convert: function(value, record) {
	//     	return (value == 'completed') ? 1 : 0
	// 	}
	// }, 'todo_list_id']
});