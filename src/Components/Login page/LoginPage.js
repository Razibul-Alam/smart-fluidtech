import { React, useState, useContext, useEffect } from 'react';
  import { initializeApp } from 'firebase/app';
import {userContext} from './../../App';
  import {useHistory,useLocation} from 'react-router';
  import { Form,Button } from 'react-bootstrap';
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from '../../Firebase-config/FirebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
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
//  setLoggedInUser(newUser)
localStorage.setItem('userDetails',newUser.name)
history.go('/')



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
       <>
       <div className="mt-5 d-flex justify-content-center row">
         <div className="col-lg-6 col-md-6 col-sm-8 mx-2" >
       {loggedInUser?<div className="bg-primary p-5 text-dark rounded">
         <h2 className="text-center"><FontAwesomeIcon icon={faUserCircle}/></h2>
          <h3 className="text-center">{loggedInUser}</h3>
          <Button variant="danger" 
   className="form-control mt-3" onClick = {handleLogout}>
    Logout
  </Button></div>
    :<div className="m-2 p-2 bg-light">
  
        {/* <Form>
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
</Form> */}
{/* <h4 className=" text-center my-1 text-danger">Or</h4> */}
<div className='text-center'>
<img className="my-logo" src="https://smartfluidtech.com/wp-content/uploads/2019/08/logo.png" alt="" />
<h4 className="my-4 text-danger">Please Login</h4>
</div>
        <Button variant="primary" 
   className="form-control mb-3" onClick = {handleSignin}>
    <span className="text-danger fs-4 me-2"><FontAwesomeIcon icon={faGoogle} /></span>Login With Google
  </Button>
</div>}
</div>
  </div>
  </>
    );
  }
  
  
  export default LoginPage;