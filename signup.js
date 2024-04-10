
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
  const form = document.getElementById('signup-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  
  // Add an event listener to the form
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
  
    // Get the input values
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
  
    // Create a new user with Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User is signed in
        const user = userCredential.user;
        console.log('User created:', user);
  
        // Update the user's display name
        user.updateProfile({
          displayName: name
        }).then(() => {
          console.log('Display name updated:', user.displayName);
        }).catch((error) => {
          console.error('Error updating display name:', error);
        });
       
          //   enable alert
          document.querySelector(".alert").style.display = "block";

      //   remove the alert
       setTimeout(() => {
       document.querySelector(".alert").style.display = "none";
       }, 3000);

        // Reset the form
        form.reset();

        window.location.href= "index1.html";

      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  });