var http = require('http');
var app = require('./config/express')();
require('./config/passport')();
require('./config/database.js')('mongodb://localhost/mean');
var config = require('./config/config')();
require('./config/database')(config.db);

http.createServer(app).listen(config.port, config.address, function(){
  console.log('Express HTTP Server ' + config.address + ' (' + config.env + ') escutando na porta ' + config.port);
});
