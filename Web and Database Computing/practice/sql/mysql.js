/* Copyright 2018, University of Adelaide */
/* Adapts MySQL NodeJS code to a local SQLite3 Database */

var sqlite3 = require('sqlite3');

var mysql = {};

mysql.createPool = function(connectionData){
    
    var db = new sqlite3.Database('./sql/'+connectionData.database+'.sqlite');
    db.query = function(query, arg2, arg3){
        
                    // Default args
                    var params = [];
                    var callback;
        
                    // Set args
                    for(var i=0; i<arguments.length; i++){
                        if(Array.isArray(arguments[i])) {
                            params = arguments[i];
                        } else if(typeof arguments[i] === 'function') {
                            callback = arguments[i];
                        }
                    }
                    
                    db.serialize(function() {
                        statements = query.split(';');
                        for(var i=0; i<statements.length-1; i++){
                            if(statements[i].trim().length == 0){
                                continue;
                            }
                            db.all(statements[i],params);
                        }
                        if(statements.length>0){
                            if(statements[statements.length-1].trim().length == 0){
                                return;
                            }
                            if(callback === undefined) {
                                db.all(statements[statements.length-1],params);
                            } else {
                                db.all(statements[statements.length-1],params,callback);
                            }
                        }
                    });
               };
    
    var pool = {};

    pool.getConnection = function(connectFunction){
        connectFunction(null,db);
    }
    
    return pool;
}

module.exports = mysql;
