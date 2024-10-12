import React from "react";
import DescriptionComponent from "./DescriptionComponent";
import LoginComponent from "./LoginComponent";

const LoginPage = () => {
  return (
    <div className="signup-page">
      
      <div className="description-section">
        <DescriptionComponent />
      </div>

      <div className="signup-section">
        <LoginComponent />
      </div>
    </div>
  );
};

export default LoginPage;

