import initializeWebsite from "../index";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

function initFirebase() {
    auth.signOut();
    const loginBtn = document.querySelector("#login-btn");
    const registerBtn = document.querySelector("#register-btn");
    const div1 = document.querySelector("#btn-container1");
    const div2 = document.querySelector("#btn-container2");   
    const registerPage = document.querySelector("#register-page") as HTMLDivElement;   
    const loginPage = document.querySelector("#login-page") as HTMLDivElement;                                
    registerPage.addEventListener("keypress", function (e) {
        let key = e.key; 
        if (key === "Enter") {
          e.preventDefault();
        }
    });
    loginPage.addEventListener("keypress", function (e) {
        let key = e.key; 
        if (key === "Enter") {
          e.preventDefault();
        }
    });
      
    
    div1?.append(loginBtn!);
    div2?.append(registerBtn!);
    const loginButton = document.getElementById("login-btn") as HTMLButtonElement;
    const registerButton = document.getElementById("register-btn") as HTMLButtonElement;
    
    loginButton.addEventListener("click", login);
    registerButton.addEventListener("click", register);
}

function register() {
    const emailElement = document.getElementById("email2") as HTMLInputElement;
    const passwordElement = document.getElementById("password2") as HTMLInputElement;
    const email: string = emailElement.value;
    const password: string = passwordElement.value;
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

        database_ref.child('users/' + user?.uid).set(user_data);
        alert('User Created!');
        initializeWebsite();
        })
    .catch(function(error: any) {
        let error_code = error.code;
        let error_message = error.message;
        
        alert(error_message);
        })
}

function login() {
    const emailElement = document.getElementById("email1") as HTMLInputElement;
    const passwordElement = document.getElementById("password1") as HTMLInputElement;
    const email: string = emailElement.value;
    const password: string = passwordElement.value;

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

        database_ref.child('users/' + user?.uid).update(user_data);
        alert('User Logged In!');
        initializeWebsite();
    })
    .catch(function(error: any) {
        let error_code = error.code;
        let error_message = error.message;

        alert(error_message);
    })
}

function validate_email(email: string) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if (expression.test(email) == true) {
        return true;
    } else {
        return false;
    }
}

function validate_password(password: string) {
    if (password.length < 6) {
        return false;
    } else {
        return true;
    }
}

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
initFirebase();

export {initFirebase, auth, database};