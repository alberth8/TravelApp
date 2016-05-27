module.exports = {

  mysqlParams     : {
                      socketPath          : '/tmp/mysql.sock',
                      user                : "root",
                      password            : "onepiece14",
                      database            : "test1",
                      multipleStatements  : true // allows for multiple queries. consider making this a different connection?
                    }
};