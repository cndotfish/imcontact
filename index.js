var server = require("./server");
var router = require("./route");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
server.start(router.route,handle);