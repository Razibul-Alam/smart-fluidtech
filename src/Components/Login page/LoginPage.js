import { React, useState, useContext, useEffect } from 'react';
  import { initializeApp } from 'firebase/app';
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
    const history = useHistory();
    const location = useLocation();
    let {
      from
    } = location.state || {
      from: {
        pathname: "/"
      }
    };
    
   const handleLogout=()=>{
     localStorage.removeItem('userDetails');
     window.location.reload(false)
   }
  
  
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
    const user = result.user;
    // console.log(user)
    const newUser={
        email:user.email,
        name:user.displayName,
        success:user.emailVerified,
        img:user.photoURL
 }
 setLoggedInUser(newUser)
localStorage.setItem('userDetails',newUser.name)
 history.replace('/');
window.location.reload(false)

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
    <div className="mt-5 d-flex justify-content-center">
      <div className="w-75">
  
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" 
   className="form-control">
    Submit
  </Button>
</Form>
       
        {loggedInUser?<Button variant="danger" 
   className="form-control mt-3" onClick = {handleLogout}>
    Logout
  </Button>:
        <Button variant="primary" 
   className="form-control mt-3" onClick = {handleSignin}>
    Login With Google signin
  </Button>}
</div>
  </div>
    );
  }
  
  
  export default LoginPage;