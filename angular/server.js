/**
 * Created by Son-Huy TRAN on 26/02/2015.
 */
var connect = require('connect');

connect.createServer(
    connect.static("./node_modules/angular/")
).listen(5000);