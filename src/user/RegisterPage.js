import React from "react";
import SignupComponent from "./SignUpComponent";
import DescriptionComponent from "./DescriptionComponent";
import RegisterComponent from "./RegisterComponent";

const RegisterPage = () => {
  return (
    <div className="signup-page">
      
      <div className="description-section">
        <DescriptionComponent />
      </div>

      <div className="signup-section">
        <RegisterComponent />
      </div>
    </div>
  );
};

export default RegisterPage;

