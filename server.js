var http = require("http");
var fs = require("fs");
var url = require("url");

// Create Server
http.createServer(function(request, response){
  console.log("Web Server Works");
  console.log("request");
  console.log(request.url);

  var pathName = url.parse(request.url).pathname;
  console.log("path name : " + pathName);

  // Root 접속 시 index.html로 세팅
  if(pathName == "/"){
    pathName = "/index.html";
  }


  // Read File
  fs.readFile(pathName.substring(1), function(err, data){
    if(err){
      console.log(err);
      // Page Not Found
      response.writeHead(404, {'Content-Type' : 'text/html'});
    }
    else {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      // 읽은 내용을 Body에 기술
      response.write(data.toString());
    }
    response.end();
  }); 

}).listen(10002);