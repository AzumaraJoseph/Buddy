import React from "react";
import { useNavigate } from 'react-router-dom';


const SignupComponent = () => {

  const navigate = useNavigate();

  const handleNavigateToRegister = () => {
    navigate('/register'); 
  };

  const handleNavigateToLogin = () => {
      navigate('/login'); 
    };

  return (
    <div className="signup-container">
        <div className="signUp-content">
            <div className="signUp-content-item">
                <div className="signUp-content-payload">
                    

                    <h2>Register your account</h2>
                    <div className="signUp-option">
                        <div className="btn-content">
                            <button onClick={handleNavigateToRegister} type="button" className="signup-btn">
                            <svg className="google-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.8 5.25C4.83939 5.25 3.25 6.83939 3.25 8.8V15.2C3.25 17.1606 4.83939 18.75 6.8 18.75H17.2C19.1606 18.75 20.75 17.1606 20.75 15.2V8.8C20.75 6.83939 19.1606 5.25 17.2 5.25H6.8ZM8.45 9.4C8.11863 9.15147 7.64853 9.21863 7.4 9.55C7.15147 9.88137 7.21863 10.3515 7.55 10.6L10.95 13.15C11.5722 13.6167 12.4278 13.6167 13.05 13.15L16.45 10.6C16.7814 10.3515 16.8485 9.88137 16.6 9.55C16.3515 9.21863 15.8814 9.15147 15.55 9.4L12.15 11.95C12.0611 12.0167 11.9389 12.0167 11.85 11.95L8.45 9.4Z" fill="#1D1D18"/>
                            </svg>
                            Sign Up with Email
                            </button>

                        </div>

                        <div className="divider">or</div>

                        <div className="btn-content">
                            <button onClick={handleNavigateToRegister} type="button" className="google-btn">
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
                <p>Already have an account? <span onClick={handleNavigateToLogin}>Login</span></p>

            </div>

            <button className="help">Get help
                <svg className="help-icon" width="19.43" height="18.13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3492_3)">
                <path d="M16.1769 14.4428C16.0508 14.5693 15.9542 14.7221 15.894 14.8902C15.8338 15.0583 15.8113 15.2377 15.8284 15.4154C15.9137 16.2382 16.0755 17.0512 16.3116 17.844C14.6177 17.4518 13.5831 16.9976 13.1132 16.7596C12.8467 16.6246 12.5397 16.5927 12.2511 16.6698C11.4236 16.8904 10.5708 17.0014 9.71443 17.0001C4.86214 17.0001 1.21442 13.5916 1.21442 9.71436C1.21442 5.83836 4.86214 2.42864 9.71443 2.42864C14.5667 2.42864 18.2144 5.83836 18.2144 9.71436C18.2144 11.4969 17.4652 13.1508 16.1769 14.4428ZM16.7755 19.1846C17.0632 19.2416 17.3518 19.2938 17.6413 19.3412C17.8841 19.3801 18.0687 19.1275 17.9728 18.9016C17.865 18.6474 17.7661 18.3894 17.6765 18.1281L17.6729 18.116C17.3717 17.2417 17.1264 16.2363 17.0366 15.3001C18.5265 13.8065 19.4287 11.8515 19.4287 9.71436C19.4287 5.01993 15.0791 1.21436 9.71443 1.21436C4.34971 1.21436 0.000139236 5.01993 0.000139236 9.71436C0.000139236 14.4088 4.34971 18.2144 9.71443 18.2144C10.6766 18.2157 11.6347 18.0907 12.5644 17.8428C13.1958 18.1621 14.5546 18.7438 16.7755 19.1846Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_3492_3">
                <rect width="19.4286" height="19.4286" fill="white" transform="matrix(-1 0 0 1 19.4287 0)"/>
                </clipPath>
                </defs>
                </svg>
            </button>
        </div>

    </div>
  );
};

export default SignupComponent;
