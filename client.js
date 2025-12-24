var http = require("http");

// HttpRequest Open
var option = {
  host: 'localhost',
  port: '10002',
  path: '/main.js'
}

// Callback function
var callback = function(res){
  // response event data 발생 시 데이터 수신
  var content = '';
  res.on('data', function(data){
    content += data;
  });

  res.on('end', function(){
    console.log("Receiving Completed");
    console.log(content);
  });
}

var request = http.request(option, callback);
request.end();