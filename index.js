const firebaseConfig = {
    apiKey: "AIzaSyA1dih9rPHZAhhx0uF66z-rNS4mewNf7cA",
    authDomain: "todo-list-d3f84.firebaseapp.com",
    projectId: "todo-list-d3f84",
    storageBucket: "todo-list-d3f84.appspot.com",
    messagingSenderId: "1082693872084",
    appId: "1:1082693872084:web:6f62c6b9c533ef9d1ece41"
  };
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const database = firebase.database();
  
  auth.signOut();

  function register() {
    email = document.getElementById("email2").value;
    password = document.getElementById("password2").value;
    if (validate_email(email) == false){
        alert("Email invalid");
        return;
    }
    if (validate_password(password) == false) {
        alert("Password must be >6 characters");
        return;
    }
   
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      let user = auth.currentUser;
      let database_ref = database.ref();
  
      let user_data = {
        email : email,
        last_login : Date.now()
      };
  
      database_ref.child('users/' + user.uid).set(user_data);
      alert('User Created!');
      window.myFunction();
    })
    .catch(function(error) {
      let error_code = error.code;
      let error_message = error.message;
  
      alert(error_message);
    })
  }
  
  function login () {
    const email = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;
  
    if (validate_email(email) == false){
        alert("Email invalid");
        return;
    }
    if (validate_password(password) == false) {
        alert("Password must be >6 characters");
        return;
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      let user = auth.currentUser;
      let database_ref = database.ref();
  
      let user_data = {
        last_login : Date.now()
      }
  
      database_ref.child('users/' + user.uid).update(user_data);
      alert('User Logged In!');
      window.myFunction();
    })
    .catch(function(error) {
      let error_code = error.code;
      let error_message = error.message;
  
      alert(error_message);
    })
  }
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if (expression.test(email) == true) {
      return true;
    } else {
      return false;
    }
  }
  
  function validate_password(password) {
    if (password < 6) {
      return false;
    } else {
      return true;
    }
  }