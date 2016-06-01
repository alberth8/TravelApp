var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '123',
    database : 'travel',
    charset  : 'utf8'
  }
});

// Create connection
var db = require('bookshelf')(knex);

// Define schema below. Relationships described in models.
db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
      user.string('username', 255);
      user.string('password', 255);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('trips').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('trips', function (trips) {
      trips.increments('id').primary();
      trips.string('name', 100);
      trips.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('stops').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('stops', function (stops) {
      stops.increments('id').primary();
      stops.integer('id_trips');
      stops.string('coordinates', 100);
      stops.string('description', 100);
      stops.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;
// usage in other files: var db = require('./path/to/db')