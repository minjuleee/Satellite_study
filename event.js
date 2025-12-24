// event 모듈 require
var events = require("events");

console.log("Event Example Start!!");

// 이벤트 발생기 EventEmitter 생성
var EventEmitter = new events.EventEmitter();

// 이벤트 처리 함수
var goHome = function goHomeFunc(){
  console.log("이제 집에 가야할 시간");

  // 일반 함수에서 이벤트를 발생시킬 수도 있음
  EventEmitter.emit("sleepNow2");
}

// goHomeNow 이벤트 발생 시 goHome 시전
EventEmitter.on("goHomeNow", goHome);

// 함수 직접 설정도 가능
EventEmitter.on("sleepNow", function(){
  console.log("아무 생각없이 지구에 나를 내려놓는다");
});

EventEmitter.on("sleepNow2", function(){
  console.log("아무 생각이 없는 채로 지구에 나를 내려놓는다");
});

for(let i=0; i<10; i++){
  EventEmitter.emit("goHomeNow");
  EventEmitter.emit("sleepNow");
}