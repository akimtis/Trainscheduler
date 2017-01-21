
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
  var minutesAway = arrivalTime-frequency;


 firebase.database().ref().on("value", function(snapshot){
  })  

  $('#submit').on("click", function(){
    trainName = $('#nameinput').val().trim();
    destination = $('#destinationinput').val().trim();
    frequency = $('#frequencyinput').val().trim();
    arrivalTime = $('#firsttimeinput').val().trim();
  
    firebase.database().ref().push({
      trainName: trainName,
      destination: destination,
      frequency: frequency,
      arrivalTime: arrivalTime,
      dateAdded: firebase.database.ServerValue.TIMESTAMP,
    });

    return false;
  });

  firebase.database().ref().orderByChild("dateAdded").limitToLast(10).on("child_added", function(snapshot) {
    console.log(snapshot.val().trainName);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().frequency);
    console.log(snapshot.val().arrivalTime);
    console.log(snapshot.val().minutesAway);
    
    $("#display").append('<tr id="display-item">'+'<tr>');
    $("#display-item").append('<td>'+snapshot.val().trainName+'</td>');
    $("#display-item").append('<td>'+snapshot.val().destination+'</td>');
    $("#display-item").append('<td>'+snapshot.val().frequency+'</td>');
    $("#display-item").append('<td>'+snapshot.val().arrivalTime+'</td>');
    $("#display-item").append('<td>'+minutesAway+'</td>');
  })


