import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faYoutubeSquare,faTwitterSquare,faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const FooterPage = () => {
    return (
        <footer className="row justify-content-between my-footer align-items-center mt-5 text-center bg-light">
        <div className="col-lg-4 mb-2">
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faFacebook} /></span>
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faGithubSquare} /></span>
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faYoutubeSquare} /></span>
          <span className="fs-2 mx-2"><FontAwesomeIcon icon={faTwitterSquare} /></span>
          <p>Smart Fluidtech<span className="fs-4"><FontAwesomeIcon icon={faCopyright}/></span> AllRight reserve</p>
        </div>
        <div className="col-lg-4 mt-2 mb-2">
          <h5>SmartFluidtech</h5>
          <p>Email:SmartFluidtech@gmail.com</p>
          <p>Dhaka, bangladesh</p>
        </div>
        <div className="col-lg-4 mt-2">
          <h5>SmartFluidtech</h5>
          <p>Email:SmartFluidtech@gmail.com</p>
          <p>Dhaka, bangladesh</p>
        </div>
      </footer>
    );
};

export default FooterPage;