import React from "react";
import SignupComponent from "./SignUpComponent";
import DescriptionComponent from "./DescriptionComponent";
import MailVerifyComponent from "./MailVeriyComponent";

const MailVerifyPage = () => {
  return (
    <div className="signup-page">
      
      <div className="description-section">
        <DescriptionComponent />
      </div>

      <div className="signup-section">
        <MailVerifyComponent />
      </div>
    </div>
  );
};

export default MailVerifyPage
;

