var mysql = require('mysql');
var bookshelf = require('../utilities/connectMySQL');


var UserModel = bookshelf.Model.extend({
  tableName: 'users'
});

module.exports = UserModel;

