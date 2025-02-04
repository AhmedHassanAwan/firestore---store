console.log("hellow js");

import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";


import { auth } from "./config.js";




const email = document.querySelector("#email");
const password = document.querySelector("#password");
const btn = document.querySelector("#btn");

btn.addEventListener("click",()=>{
    console.log(email.value);
    console.log(password.value);

    


    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
    });
    
    

    
})