var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');
// var bcrypt = require('bcrypt');

module.exports = function(){
	var schema = mongoose.Schema({
		login: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		},
		nome: {
			type: String,
			required: true,
			index: {
				unique: true
			}
		},
		inclusao: {
			type: Date,
			default: Date.now
		}
	});
	schema.plugin(findOrCreate);
	return mongoose.model('Usuario', schema);
}
