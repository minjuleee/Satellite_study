console.log("Callback");

var fs = require("fs");
var http = require("http");

var data = fs.readFileSync("main.js");
console.log(data.toString());

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    console.log("요청이 들어왔습니다.");

    // Sync
    // var content = fs.readFileSync("main.js");
    // console.log(content.toString());
    // response.end("<h1>File Read OK</h1>");
    // response.end("<p>");
    // response.end(content.toString());
    // response.end("</p>");

    // Async
    fs.readFile("man.js", function(err, data){
      if(err) return console.error(err);
      console.log(data.toString());
    });

    console.log("응답을 완료하였습니다.");
    response.end("");

}).listen(10002);