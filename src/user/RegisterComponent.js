import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const RegisterComponent = () => {
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
        <div className="signUp-content register-container">
            <div className="signUp-content-item">
                <div className="signUp-content-payload">
                    
                    <div className="register">
                        <h2>Register your account</h2>
                        <p>Proceed to create account and setup your organization</p>
                    </div>

                    {/* <div class="form-container">
                        <form>
                            <div class="form-row">
                            <div class="form-group">
                                <span class="icon">
                                <i class="fas fa-user"></i>
                                </span>
                                <input type="text" id="firstName" name="firstName" placeholder="First Name" />
                            </div>
                            <div class="form-group">
                                <span class="icon">
                                <i class="fas fa-user"></i>
                                </span>
                                <input type="text" id="lastName" name="lastName" placeholder="Last Name" />
                            </div>
                            </div>
                            
                            <div class="form-group">
                            <span class="icon">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <input type="email" id="email" name="email" placeholder="Email" />
                            </div>
                            
                            <div class="form-group">
                            <span class="icon">
                                <i class="fas fa-lock"></i>
                            </span>
                            <input type="password" id="password" name="password" placeholder="Password" />
                            </div>
                            
                            <button type="submit">Submit</button>
                        </form>
                    </div> */}

                    <div className="form-container">
                        <form onSubmit={handleEmailSignup}>
                            <div className="form-row">
                                <div className="form-group">
                                    <span className="icon">
                                    <FaUser />
                                    </span>
                                    <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <span className="icon">
                                    <FaUser />
                                    </span>
                                    <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            

                            <div className="form-group">
                            <span className="icon">
                                <FaEnvelope />
                            </span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                            />
                            </div>

                            <div className="form-group">
                            <span className="icon">
                                <FaLock />
                            </span>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                            />
                            </div>

                            <button type="submit">Create account</button>
                        </form>
                    </div>



                    <p>By clicking the button above, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>

                </div>
                <p>Already have an account? <span>Login</span></p>

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

export default RegisterComponent;
