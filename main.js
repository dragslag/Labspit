
  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAhWB3jw0REZwgN93rp0It1JeDn9HVcMEQ",
    authDomain: "contactform-4d4d6.firebaseapp.com",
    databaseURL: "https://contactform-4d4d6.firebaseio.com",
    projectId: "contactform-4d4d6",
    storageBucket: "contactform-4d4d6.appspot.com",
    messagingSenderId: "782691775346",
    appId: "1:782691775346:web:87c8828ae19923b86da3eb",
    measurementId: "G-700YPTW7FP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//reference messages collection

var messagesRef = firebase.database().ref('messages');

// Listen for form submit

document.getElementById('contactform').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

   //Get values
   var name = getInputVal('name');
   var email = getInputVal('email');
   var phone = getInputVal('phone');
   var message = getInputVal('message');

   //save message
   saveMessage(name, email, phone, message);

   // Show alert
   document.querySelector('.alert').style.display = 'block';

   // Hide alert after 3 seconds
   setTimeout(function(){
       document.querySelector('.alert').style.display = 'none';
   },3000);

   //celear form
   document.getElementById('contactform').reset();
}

// funktion to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}


// save the message to firebase

function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}