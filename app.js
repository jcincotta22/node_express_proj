var http = require('http');
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

var appRouter = express.Router();
appRouter.get('/', function(req, res) { });
appRouter.post('/', function(req, res) { });
appRouter.get('/:id', function(req, res) { });
appRouter.patch('/:id', function(req, res) { });
appRouter.delete('/:id', function(req, res) { });
app.use('/photo', appRouter);

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

module.exports = app;
