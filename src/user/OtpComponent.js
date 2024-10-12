// import React  from "react";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const OtpComponent = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);

    const handleChange = (element, index) => {
      const value = element.value.replace(/[^0-9]/g, ""); // Only allow numbers
      if (value) {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
  
        // Move to the next input box if it exists
        if (element.nextSibling) {
          element.nextSibling.focus();
        }
      }
    };
  
    const handleKeyDown = (event, index) => {
      if (event.key === "Backspace" && !otp[index] && index > 0) {
        event.preventDefault();
        const prevInput = event.target.previousSibling;
        prevInput.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    };

  return (
    <div className="signup-container">
        <div className="signUp-content mail-content">

            <div className="mail-text mail-text-verify">
                <h2>Verify your email</h2>
                <p>A four digit OTP code has been sent to your email <span>seyi@zojatech.com</span></p>
            </div>

            <div className="otp-container">
                {otp.map((data, index) => (
                    <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="otp-input"
                    />
                ))}
            </div>
            {/* <div className="group-item"> */}
                <button className="mail-button">Confrim code</button>
                <p className="mail-login">Didn't get the mail? <span>Resend</span></p>

            {/* </div> */}
        </div>

    </div>
  );
};

export default OtpComponent;
