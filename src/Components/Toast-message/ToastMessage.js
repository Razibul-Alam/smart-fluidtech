import React, { useContext, useState } from 'react';
import { Col, Row, Toast, Button} from 'react-bootstrap';
import { userContext } from '../../App';

const ToastMessage = () => {
     const [toastShow, setToastShow] = useState(true);
     const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        
      <div>
        <Toast onClose={() => setToastShow(false)} show={toastShow} delay={3000} autohide>
          <h5 className="text-center text-danger">Welcome back {loggedInUser} </h5>
        </Toast>
        </div>
    
    );
};

export default ToastMessage;