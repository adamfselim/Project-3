// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const UserSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     default: ''
//   },
//   lastName: {
//     type: String,
//     default: ''
//   },
//   userName: {
//     type: String,
//     default: ''
//   },
//   email: {
//     type: String,
//     default: ''
//   },
//   password: {
//     type: String,
//     default: ''
//   },
//   title: {
//     type: String,
//     default: ''
//   },
//   isDeleted: {
//     type: Boolean,
//     default: false
//   },
// });

// UserSchema.methods.generateHash = function(password) {
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// UserSchema.methods.validPassword = function(password) {
// 	return bcrypt.compareSync(password, this.password);
// };

// module.exports = mongoose.model('User', UserSchema);




//Setting up database using mySQL
module.exports = function(sequelize, Sequelize) {

	var User = sequelize.define('user', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
		firstname: { type: Sequelize.STRING,notEmpty: true},
		lastname: { type: Sequelize.STRING,notEmpty: true},
		username: {type:Sequelize.TEXT},
		title : {type:Sequelize.TEXT},
        email: { type:Sequelize.STRING, validate: {isEmail:true} },
        last_login: {type: Sequelize.INTEGER},
		password : {type: Sequelize.STRING,allowNull: false }, 
        last_login: {type: Sequelize.DATE},
        status: {type: Sequelize.ENUM('active','inactive'),defaultValue:'active' }

});

	return User;

}