import React from "react";
import SignupComponent from "./SignUpComponent";
import DescriptionComponent from "./DescriptionComponent";
import MailPageComponent from "./MailPageComponent";

const MailPage = () => {
  return (
    <div className="signup-page">
      
      <div className="description-section">
        <DescriptionComponent />
      </div>

      <div className="signup-section">
        <MailPageComponent />
      </div>
    </div>
  );
};

export default MailPage;

