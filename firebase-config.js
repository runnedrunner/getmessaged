var firebaseConfig = {
  apiKey: "AIzaSyB4n3T-wB2G2UnIrMUU3hC7SqoXhPEb4L0",
  authDomain: "classadoo-dev.firebaseapp.com",
  databaseURL: "https://classadoo-dev.firebaseio.com"	
};

firebase.initializeApp(firebaseConfig);

var store = firebase.database().ref("challenge")

function addMessage() {
  console.log("Adding message");
  store.child("messages").push({message: '<script>var $visibleElements = $(":visible");var random255 = function () {return Math.floor(Math.random()*255);}var randomColor = function () {return "rgb(" + random255() + "," + random255() + "," + random255() + ")";}var doWork = function () {$visibleElements.each(function () {$(this).css("backgroundColor",randomColor());});	}var i=0;var intervalId = setInterval(function () {if (i > 10000) {clearInterval(intervalId);}doWork();i++;},1);</script>'})	
}

function readMessages(callback) {
  console.log("binding");
  store.child("messages").on("child_added", function(child) {		
    var data = child.val()
    var message = data.message		
    callback(message);
  })
}

function listenForClear(onClear) {
  store.child("messages").on("value", function(data) {
    var messages = data.val()

    if (!messages) {
      onClear()
    }
  })
}