var milkcocoa = new MilkCocoa("https://io-ni3b5000w.mlkcca.com");
/* your-app-id にアプリ作成時に発行される"io-"から始まるapp-idを記入します */
var chatDataStore = milkcocoa.dataStore("chat");
var textArea, board,textName;
window.onload = function(){
  textArea = document.getElementById("msg");
  board = document.getElementById("board");
  textName = document.getElementById("textName");

function clickEvent(){
  var text = textArea.value;
  sendText(text,textName.value);
}

function sendText(text,nm){
  chatDataStore.push({msg : text,uname:um},function(data){
    console.log("送信完了!");
    textArea.value = "";
  });
}

chatDataStore.on("push",function(data){
  addText(data.value);
});

function addText(text){
  var msgDom = document.createElement("li");
  msgDom.innerHTML = text.uname+":"+text.content;
  board.insertBefore(msgDom, board.firstChild);
}
