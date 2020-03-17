var firebaseConfig = {
    apiKey: "AIzaSyAfQ-LCI3jUEtvkPsCDh5UerAX1VUfZLgw",
    authDomain: "reactpro-7e53b.firebaseapp.com",
    databaseURL: "https://reactpro-7e53b.firebaseio.com",
    projectId: "reactpro-7e53b",
    storageBucket: "reactpro-7e53b.appspot.com",
    messagingSenderId: "571619637921",
    appId: "1:571619637921:web:d1f7cced7aaa2a9a804ee0",
    measurementId: "G-0RTB99HY1L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
//   var ref = firebase.app().database().ref();
//   ref.once("value").then(function (snap) {
//   console.log("snap.val()", snap.val());
  //});