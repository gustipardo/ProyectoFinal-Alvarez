import React from "react";
import {auth, provider} from "./firebase"
import {signInWithPopup} from "firebase/auth"
import { useState } from "react";
import { useEffect } from "react";
function SignIn(){
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider)
          .then((data) => {
            setValue(data.user.email);
            localStorage.setItem("email", data.user.email);
            window.location.reload();
          })
          .catch((error) => {
            console.error("Error al iniciar sesión:", error);
          });
      };
      
    useEffect(()=>{
        setValue(localStorage.getItem("email"))
    })
    return(

        <div>
  <h3 style={{ color: 'white' }}>Regístrate para tener un carrito</h3>
  <button
    onClick={handleClick}
    style={{
      color: 'white',
      backgroundColor: '#2fdf75',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
    }}
  >
    Sign with Google
  </button>
</div>
    )
}
export default SignIn;