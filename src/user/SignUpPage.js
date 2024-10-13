import React from "react";
import SignupComponent from "./SignUpComponent";
import DescriptionComponent from "./DescriptionComponent";

const SignupPage = () => {

  return (
    <div className="signup-page">
      
      <div className="description-section">
        <DescriptionComponent />
      </div>

      <div className="signup-section">
        <SignupComponent />
      </div>
    </div>
  );
};

export default SignupPage;

