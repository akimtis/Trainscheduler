
  var config = {
    apiKey: "AIzaSyBA_iU71YyDuJjAj-RbOkw1FfhTzCHCUxQ",
    authDomain: "trainscheduler-65563.firebaseapp.com",
    databaseURL: "https://trainscheduler-65563.firebaseio.com",
    storageBucket: "trainscheduler-65563.appspot.com",
    messagingSenderId: "11975148"
  };
  firebase.initializeApp(config);

  var db =  firebase.database();
  var trainName = "";
  var destination = "";
  var frequency = "";
  var arrivalTime = "";
  var minutesAway = "";


  db.ref().on("value", function(snapshot){
    console.log(snapshot.val());
  })  

  $('#submit').on("click", function(){
    trainName = $('#nameinput').val().trim();
    destination = $('#firsttimeinput').val().trim();
    frequency = $('#frequencyinput').val().trim();
    arrivalTime = $('#arrivalinput').val().trim();
    minutesAway = $('#minutesinput').val().trim();
  
    db.ref().set({
      trainName: trainName
    });

    return false;
  });

  db.ref().on("value", function(snapshot) {
  console.log(snapshot.val());
  console.log(snapshot.val().trainName);

  })

 

