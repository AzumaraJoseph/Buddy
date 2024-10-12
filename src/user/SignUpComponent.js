import React from "react";
import { FaGoogle } from "react-icons/fa";

const SignupComponent = () => {
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
      <h2>Register your account</h2>
      {/* <form onSubmit={handleEmailSignup} className="signup-form">
        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
      </form> */}
        <button type="submit" className="signup-btn">
          Sign Up with Email
        </button>

      <div className="divider">or</div>

      <button onClick={handleGoogleSignup} className="google-btn">
        <FaGoogle className="google-icon" /> Sign Up with Google
      </button>

      <p>By clicking the button above, you agree to our Terms of Service and Privacy Policy.</p>

      <p>Already have an account? Login</p>
    </div>
  );
};

export default SignupComponent;
