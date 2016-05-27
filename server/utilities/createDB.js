var users = ""+
  "CREATE TABLE users ( " +
    " id INTEGER AUTO_INCREMENT," +
    " username TEXT NULL DEFAULT NULL," +
    " password TEXT NULL DEFAULT NULL," +
    " PRIMARY KEY(id) " +
    ");";

var user2trip = ""+
  "CREATE TABLE user2trip ( " +
    " id INTEGER AUTO_INCREMENT," +
    " id_users INTEGER NULL DEFAULT NULL," +
    " id_trips INTEGER NULL DEFAULT NULL," +
    " PRIMARY KEY(id) " +
    ");";

var trips = ""+
  "CREATE TABLE trips ( " +
    " id INTEGER AUTO_INCREMENT," +
    " name TEXT NULL DEFAULT NULL," +
    " PRIMARY KEY(id) " +
    ");";

var stops = ""+
  "CREATE TABLE stops ( " +
    " id INTEGER AUTO_INCREMENT," +
    " id_trips INTEGER NULL DEFAULT NULL," +
    " coordinates TEXT NULL DEFAULT NULL," +
    " description TEXT NULL DEFAULT NULL," +
    " PRIMARY KEY(id) " +
    ");";


var alter1 = "ALTER TABLE user2trip ADD FOREIGN KEY (id_users) REFERENCES users (id);"
var alter2 = "ALTER TABLE user2trip ADD FOREIGN KEY (id_trips) REFERENCES trips (id);"
var alter3 = "ALTER TABLE stops ADD FOREIGN KEY (id_trips) REFERENCES trips (id);"


// -- INSERT INTO `users` (`id`,`username`,`password`) VALUES
// -- ('','','');
// -- INSERT INTO `user2trip` (`id`,`id_users`,`id_trips`) VALUES
// -- ('','','');
// -- INSERT INTO `trips` (`id`,`name`) VALUES
// -- ('','');
// -- INSERT INTO `stops` (`id`,`id_trips`,`coordinates`,`description`) VALUES
// -- ('','','','');


var mysql = require('mysql');
var dbConnectionCreator = require('./connectMySQL.js');

var dbConnection = dbConnectionCreator();

var listOfActions = [ createDropFunction("users"),              createTable("users", users),
                      createDropFunction("trips"),    createTable("trips", trips),
                      createDropFunction("stops"),     createTable("stops", stops),
                      createDropFunction("user2trip"),     createTable("user2trip", user2trip),
                      createTable("f1", alter1),
                      createTable("f2", alter2),
                      createTable("f3", alter3),
                      endClientConnection];
var currentIndex = 0;

function runNextQueries(){
  var action = listOfActions[currentIndex++];
  action();
}

function createDropFunction(table){
  return function(){
    console.log("Dropping table: ", table);
    var query = "DROP TABLE IF EXISTS "+ table +" CASCADE";
    dbConnection.query(query, function(error,b,c,d){
      runNextQueries();
    });
  }
}

function createTable(tableName, query){
  return function(){
    console.log("Creating table: ", tableName);
    dbConnection.query(query, function(error,b,c,d){
      if (error) console.log("error: ", error);
      runNextQueries();
    }); 
  }
}

function endClientConnection(){
  console.log("done creating tables!");
  dbConnection.destroy();
}

runNextQueries(currentIndex);
