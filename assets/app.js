

  var config = {
    apiKey: "AIzaSyBA_iU71YyDuJjAj-RbOkw1FfhTzCHCUxQ",
    authDomain: "trainscheduler-65563.firebaseapp.com",
    databaseURL: "https://trainscheduler-65563.firebaseio.com",
    storageBucket: "trainscheduler-65563.appspot.com",
    messagingSenderId: "11975148"
  };

  firebase.initializeApp(config);

  firebase.database().ref().on("value", function(snapshot){
    console.log(snapshot.val());
  })