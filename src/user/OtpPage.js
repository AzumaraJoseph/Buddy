import React from "react";
import DescriptionComponent from "./DescriptionComponent";
import OtpComponent from "./OtpComponent";

const OtpPage = () => {
  return (
    <div className="signup-page">
      
      <div className="description-section">
        <DescriptionComponent />
      </div>

      <div className="signup-section">
        <OtpComponent />
      </div>
    </div>
  );
};

export default OtpPage
;

