var firebaseConfig = {
  apiKey: "AIzaSyB4n3T-wB2G2UnIrMUU3hC7SqoXhPEb4L0",
  authDomain: "classadoo-dev.firebaseapp.com",
  databaseURL: "https://classadoo-dev.firebaseio.com"	
};

firebase.initializeApp(firebaseConfig);

var store = firebase.database().ref("challenge")

function addMessage() {
  console.log("Adding message");
  store.child("messages").push({message: "<img src='i2.kym-cdn.com/photos/images/newsfeed/000/220/845/BM.jpg' alt='Smiley face' height='42' width="42">"})	
}

function readMessages(callback) {
  console.log("binding");
  store.child("messages").on("child_added", function(child) {		
    var data = child.val()
    var message = data.message		
    callback(message);
  })
}

function clearMessages() {
  console.log("clearing")
  store.child("messages").remove();
}

function listenForClear(onClear) {
  store.child("messages").on("value", function(data) {
    var messages = data.val()

    if (!messages) {
      onClear()
    }
  })
}