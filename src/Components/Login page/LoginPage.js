import {React, useState,useContext} from 'react';
  import { initializeApp } from 'firebase/app';
//   import firebase from "firebase/app";


import {userContext} from './../../App';
  import {useHistory,useLocation} from 'react-router';
  import { Form,Button } from 'react-bootstrap';
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from './FirebaseConfig';
const app = initializeApp(firebaseConfig);




 
  
//   let userDetail={isSignid:false,
//     email:"",name:"",password:"",error:"",success:false}
   
    
    
  
  
  
  const LoginPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(loggedInUser.success)
    const history = useHistory();
    const location = useLocation();
    let {
      from
    } = location.state || {
      from: {
        pathname: "/"
      }
    };
    
   console.log(loggedInUser)
  
  
    // const handleSignin = () => {
    //   const provider = new firebase.auth.GoogleAuthProvider();
    //   firebase.auth()
    //     .signInWithPopup(provider)
    //     .then((result) => {
    //       const {
    //         email,
    //         displayName
    //       } = result.user;
    //       const signedInUser = {
    //         displayName,
    //         email
    //       }
    //       setLoggedInUser(signedInUser);
    //       history.replace(from);
    //       console.log(signedInUser)
    //     })
  
    // }
    // ....sign in finish....//
    const handleSignin=()=>{
    const provider = new GoogleAuthProvider();
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    const newUser={
        email:user.email,
        name:user.displayName,
        success:user.emailVerified,
 }
 setLoggedInUser(newUser)
//  history.replace(from);
    // console.log(newUser)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }
  
     return ( 
    <div style = {
        {
          width: "600px",
          margin: "auto"
        }
      }>
  {/* <p> {loggedInUser.error}</p>
        {loggedInUser.success&&<p>{ loggedInUser ?"created":"logged in" } successfully</p>} */}
        <button onClick = { handleSignin} > {loggedInUser.success?'Sign In with google':'Logout'}</button><br/>

  </div>
    );
  }
  
  
  export default LoginPage;