

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCY_RagjFh-61eWwKcOheyk9gswbSyVe_Y",
    authDomain: "login-form-283fb.firebaseapp.com",
    databaseURL: "https://login-form-283fb-default-rtdb.firebaseio.com",
    projectId: "login-form-283fb",
    storageBucket: "login-form-283fb.appspot.com",
    messagingSenderId: "952973734444",
    appId: "1:952973734444:web:733dc344b92b6ce0865789"
  };



firebase.initializeApp(firebaseConfig);

// Get references to the form and input fields
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Add an event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const email = emailInput.value;
  const password = passwordInput.value;

  // Sign in the user with Firebase Authentication
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
         // The signed-in user info
         const user = result.user;
         console.log('User signed in:', user);
   
         // Redirect the user to the home page
         window.location.href= "index1.html";
       })
       .catch((error) => {
         console.error('Error signing in:', error);
       });
   });

// Get the Google Sign-In button
const googleSignInBtn = document.getElementById('google-signin-btn');

// Add a click event listener to the Google Sign-In button
googleSignInBtn.addEventListener('click', () => {
  // Create a Google Sign-In provider
  const provider = new firebase.auth.GoogleAuthProvider();

  // Sign in with the Google Sign-In provider
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // The signed-in user info
      const user = result.user;
      console.log('User signed in:', user);

      // Redirect the user to the home page
      window.location.href= "index1.html";
    })
    .catch((error) => {
      console.error('Error signing in:', error);
    });
});