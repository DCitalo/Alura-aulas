module.exports = function(app) {
    app.get("/produtos",function(req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password : "$v1r4B4z!7(8]*7", 
            database: "casadocodigo_nodejs",
            insecureAuth : true
        });

        connection.query('desc produtos', function(err, results){
            res.send(results);
            console.log(err)
        });

        connection.end();

    });
}