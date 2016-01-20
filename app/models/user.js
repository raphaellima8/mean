var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
var bcrypt = require('bcrypt');

module.exports = function(){
	var schema = mongoose.Schema({
		nome: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		senha: {
			type: String,
			required: true
		},
		endereco: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		},
		telefone: {
			type: String,
			required: true
		}
	});

	schema.methods.generateHash = function(senha){
		return bcrypt.hashSync(senha, bcrypt.genSaltSync(8), null);
	};

	schema.plugin(findOrCreate);
	return mongoose.model('User', schema);
}