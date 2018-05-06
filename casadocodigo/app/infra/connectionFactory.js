var mysql  = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'italo',
        password: 'root',
        database: 'casadocodigo_nodejs'
    });
}

module.exports = function() {
    return createDBConnection;
}