console.log("This is my first node.js work!!!");

var http = require("http");

// Web Server 기동하기
http.createServer(function(request, response){
    console.log("손님 오셨어요");
    // console.log(request);
    
    // HTML message display
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("<h1>This is my first node.js work!!</h1>")
}).listen(10001);