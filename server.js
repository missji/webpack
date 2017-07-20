var path = require('path');
var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var opn=require("opn");
var app = express();
var port = 3000;
var uri = 'http://localhost:'+port;

app.use('/static', express.static(__dirname + '/static'));


(function() {

  // Step 1: Create & configure a webpack compiler
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config');
  var compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }));
})();

app.get('/nav', function(req, res) {
  list={"command":"600003","timestamp":"2017-01-13 13:28:14","code":0,"message":"ok","data":{"orderId":904463,"displayName":"太阳 VS 快船","displayBet":"快船胜 6.0","bets":13,"betTime":"2016-11-01","question":"猜第3节输赢","result":"34:34","bonus":"13.0","winStatus":3,"orderStatus":2,"iconUrl":"http://pic.8win.com/game/events/2016/8/2/f852afad-5096-4f31-afdd-9f2d511c3121.png ","pvp":false}};
  res.header("Access-Control-Allow-Origin", "*");
  res.json(list)
});


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port, 'localhost', function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
       opn(uri)
    }
});