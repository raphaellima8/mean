var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

module.exports = function(){
	var schema = mongoose.Schema({
		nome: {
			type: String,
			required: true
		},
		tipo: {
			type: String,
			required: true
		},
		preco: {
			type: String,
			required: true
		},
		descricao: {
			type: String,
			required: true,
		},
		sabor: {
			type: String,
			required: true
		},
		quantidade: {
			type: Number,
			required: true
		}
	});

	schema.plugin(findOrCreate);
	return mongoose.model('Produto', schema);
}