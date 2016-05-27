var Sequelize = require('sequelize');
var db = new Sequelize('test1', 'root', 'onepiece14');

var User = db.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
}, {
  timestamps: false,
  tableName: 'users'
});

var Trips = db.define('Trips', {
  name: Sequelize.STRING
}, {
  timestamps: false,
  tableName: 'trips'
});

var Stops = db.define('Stops', {
  id_trips: Sequelize.INTEGER,
  coordinates: Sequelize.STRING,
  descriptions: Sequelize.STRING
}, {
  timestamps: false,
  tableName: 'stops'
});

var user2trip = db.define('Stops', {
  id_users: Sequelize.INTEGER,
  id_trips: Sequelize.INTEGER,
}, {
  timestamps: false,
  tableName: 'stops'
});

var db = require('../utilities/connectMySQL.js');
db = db.connect();



module.exports = {

  users: {
    get: function (callback) {
      
      // Message.sync()
      //   .then(function() {
      //     return Message.findAll({attributed: ['username', 'text', 'roomname']});
      //   }).then(function(results) {
      //     callback(results);
      //   });

    }, // a function which produces all the messages
    post: function (message, callback) {

      // Message.sync()
      //   .then(function() {
      //     return Message.create({username: message.username, text: message.text, roomname: message.roomname});
      //   }).then(function(results) {
      //     callback(results);
      //   }).catch(function(err) {
      //     console.log(err);
      //   });

    } // a function which can be used to insert a message into the database
  },

  trips: {
    // Ditto as above.
     get: function (message) {},

     post: function (username, callback) {
      
    //   Message.sync()
    //     .then(function() {
    //       return Message.create({username: username, text: 'sup', roomname: '1'});
    //     }).then(function(results) {
    //       callback(results);
    //     }).catch(function(err) {
    //       console.log(err);
    //     });

     }
  }

  // login: {
  //   // Ditto as above.
  //   get: function (message) {},

  //   post: function (userinfo, callback) {
      
  //     User.sync()
  //       .then(function() {
  //         return User.findAll({attributed: ['user', 'password']});
  //       })
  //       .then(function(results) {
  //         _.each(results, function(value){
  //           console.log('#$%!%!@#%!@#%!@#!@%!@#', value);
  //         })
  //        // console.log('____! _@_!@_$_@_$_@THE RESULTS', results);
  //         return User.create({password: userinfo.password,user: userinfo.username});
  //       }).then(function(results) {
  //         callback(results);
  //       }).catch(function(err) {
  //         console.log(err);
  //       });


  //   }
  // }
};