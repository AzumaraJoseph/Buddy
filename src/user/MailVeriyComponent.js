import React from "react";
import { FaGoogle } from "react-icons/fa";

const MailVerifyComponent = () => {
  const handleEmailSignup = (event) => {
    event.preventDefault();
    // Handle email signup logic here
    console.log("Signed up with email");
  };

  const handleGoogleSignup = () => {
    // Handle Google signup logic here
    console.log("Signed up with Google");
  };

  return (
    <div className="signup-container">
        <div className="signUp-content verify-content">
            {/* <div className="signUp-content-item">
                <div className="signUp-content-payload">
                    

                    <h2>Regis</h2>
                    <div className="signUp-option">
                        <div className="btn-content">
                            <button type="submit" className="signup-btn">
                            <svg className="google-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.8 5.25C4.83939 5.25 3.25 6.83939 3.25 8.8V15.2C3.25 17.1606 4.83939 18.75 6.8 18.75H17.2C19.1606 18.75 20.75 17.1606 20.75 15.2V8.8C20.75 6.83939 19.1606 5.25 17.2 5.25H6.8ZM8.45 9.4C8.11863 9.15147 7.64853 9.21863 7.4 9.55C7.15147 9.88137 7.21863 10.3515 7.55 10.6L10.95 13.15C11.5722 13.6167 12.4278 13.6167 13.05 13.15L16.45 10.6C16.7814 10.3515 16.8485 9.88137 16.6 9.55C16.3515 9.21863 15.8814 9.15147 15.55 9.4L12.15 11.95C12.0611 12.0167 11.9389 12.0167 11.85 11.95L8.45 9.4Z" fill="#1D1D18"/>
                            </svg>
                            Sign Up with Email
                            </button>

                        </div>

                        <div className="divider">or</div>

                        <div className="btn-content">
                            <button onClick={handleGoogleSignup} className="google-btn">
                            <svg className="google-icon" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.59266 10.51C7.91184 9.56628 8.52784 8.7452 9.35277 8.16386C10.1777 7.58251 11.1694 7.27062 12.1865 7.27266C13.3394 7.27266 14.3817 7.67266 15.2004 8.32732L17.5826 6C16.1309 4.76333 14.2706 4 12.1865 4C8.95976 4 6.18191 5.79866 4.84619 8.43332L7.59266 10.51Z" fill="#EA4335"/>
                            <path d="M14.9426 16.0086C14.199 16.4773 13.2549 16.7273 12.1866 16.7273C11.1736 16.7293 10.1856 16.4199 9.3625 15.8429C8.5394 15.2658 7.92289 14.4504 7.60026 13.512L4.84424 15.5566C5.52045 16.8941 6.56693 18.0195 7.86482 18.805C9.16272 19.5904 10.66 20.0044 12.1866 19.9999C14.1874 19.9999 16.0989 19.3046 17.5308 18L14.9433 16.0086H14.9426Z" fill="#34A853"/>
                            <path d="M17.5303 18C19.0277 16.6347 19.9998 14.6027 19.9998 12C19.9998 11.5267 19.9254 11.018 19.8142 10.5453H12.186V13.6367H16.5766C16.3603 14.676 15.7784 15.4807 14.9427 16.0087L17.5303 18Z" fill="#4A90E2"/>
                            <path d="M7.59996 13.512C7.43307 13.0246 7.34828 12.514 7.34892 12C7.34892 11.4787 7.43419 10.978 7.59246 10.51L4.84599 8.43335C4.28413 9.5418 3.99449 10.763 4.00008 12C4.00008 13.28 4.30365 14.4867 4.84394 15.5567L7.59996 13.512Z" fill="#FBBC05"/>
                            </svg>
                            Sign Up with Google
                            </button>

                        </div>
                        
                    </div>

                    <p>By clicking the button above, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>

                </div>
                <p>Already have an account? <span>Login</span></p>

            </div> */}
            <span className="mail-icon mail-verify"><svg width="76" height="61" viewBox="0 0 76 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55.1 7.60004C58.2469 7.60004 60.8 10.152 60.8 13.3C60.8 15.0932 59.9569 16.7794 58.52 17.86L56.8694 19.095C48.9606 19.855 42.3344 25.0325 39.4963 32.1338L32.68 37.24C31.3263 38.2494 29.4738 38.2494 28.12 37.24L2.28 17.86C0.844669 16.7794 0 15.0932 0 13.3C0 10.152 2.55194 7.60004 5.7 7.60004H55.1ZM34.96 40.28L38.095 37.9288C38.0356 38.5819 38 39.235 38 39.9C38 44.9469 39.7931 49.59 42.7738 53.2H7.6C3.40219 53.2 0 49.7919 0 45.6V20.9L25.84 40.28C28.5475 42.3107 32.2525 42.3107 34.96 40.28ZM76 39.9C76 49.3407 68.3406 57 58.9 57C49.4594 57 41.8 49.3407 41.8 39.9C41.8 30.4594 49.4594 22.8 58.9 22.8C68.3406 22.8 76 30.4594 76 39.9ZM64.2081 34.7582L57 41.9663L53.5919 38.5582C52.8556 37.81 51.6444 37.81 50.9081 38.5582C50.16 39.2944 50.16 40.5057 50.9081 41.2419L55.6581 45.9919C56.3944 46.74 57.6056 46.74 58.3419 45.9919L66.8919 37.4419C67.64 36.7057 67.64 35.4944 66.8919 34.7582C66.1556 34.01 64.9444 34.01 64.2081 34.7582Z" fill="#84919A"/>
            </svg>

            </span>
            <div className="mail-text verify-text">
                <h2>Email verified !</h2>
                <p>The verified email address will be associated with your account. Click on the button below to continue</p>
            </div>

            <button className="mail-button verify-button">Continue</button>
            {/* <p className="mail-login">Didn't getsssss the mail? <span>Resend</span></p> */}
        </div>

    </div>
  );
};

export default MailVerifyComponent;
