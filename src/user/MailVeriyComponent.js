import React from "react";
import { useNavigate } from 'react-router-dom'; 


const MailVerifyComponent = () => {  
  const navigate = useNavigate(); 

  const handleNavigateToLogin = () => {
    navigate('/login'); 
  };

  return (
    <div className="signup-container">
        <div className="signUp-content verify-content">
            <span className="mail-icon mail-verify"><svg width="76" height="61" viewBox="0 0 76 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55.1 7.60004C58.2469 7.60004 60.8 10.152 60.8 13.3C60.8 15.0932 59.9569 16.7794 58.52 17.86L56.8694 19.095C48.9606 19.855 42.3344 25.0325 39.4963 32.1338L32.68 37.24C31.3263 38.2494 29.4738 38.2494 28.12 37.24L2.28 17.86C0.844669 16.7794 0 15.0932 0 13.3C0 10.152 2.55194 7.60004 5.7 7.60004H55.1ZM34.96 40.28L38.095 37.9288C38.0356 38.5819 38 39.235 38 39.9C38 44.9469 39.7931 49.59 42.7738 53.2H7.6C3.40219 53.2 0 49.7919 0 45.6V20.9L25.84 40.28C28.5475 42.3107 32.2525 42.3107 34.96 40.28ZM76 39.9C76 49.3407 68.3406 57 58.9 57C49.4594 57 41.8 49.3407 41.8 39.9C41.8 30.4594 49.4594 22.8 58.9 22.8C68.3406 22.8 76 30.4594 76 39.9ZM64.2081 34.7582L57 41.9663L53.5919 38.5582C52.8556 37.81 51.6444 37.81 50.9081 38.5582C50.16 39.2944 50.16 40.5057 50.9081 41.2419L55.6581 45.9919C56.3944 46.74 57.6056 46.74 58.3419 45.9919L66.8919 37.4419C67.64 36.7057 67.64 35.4944 66.8919 34.7582C66.1556 34.01 64.9444 34.01 64.2081 34.7582Z" fill="#84919A"/>
            </svg>

            </span>
            <div className="mail-text verify-text">
                <h2>Email verified !</h2>
                <p>The verified email address will be associated with your account. Click on the button below to continue</p>
            </div>

            <button onClick={handleNavigateToLogin} className="mail-button verify-button">Continue</button>
        </div>

    </div>
  );
};

export default MailVerifyComponent;
