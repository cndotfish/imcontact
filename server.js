//自定义模块 server.js 
//模块功能：启动一个httpserver
var http = require('http');
var url = require('url');
function start(route,handle){
	http.createServer(function(req,res){
		console.log('recieve a request');
		//console.log('request url:' + req.url);
		var pathname = url.parse(req.url).pathname;			
		console.log('request pathname:' + pathname);
		
		var content = route(handle,pathname);
		
		res.writeHead(200,{"Content-Type":"text/plain"});
		//res.write("Hello World.");
		res.write(content);
		res.end();
	}).listen(8080);
	console.log("server has started.");
}
exports.start = start;