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


    // const handleVerifyOtp = async () => {
    //     const token = localStorage.getItem("token");
    
    //     if (!otpInput) {
    //       alert("Please enter the OTP.");
    //       return;
    //     }
    
    //     try {
    //       const response = await axios.post(
    //         "https://fe-test.revvex.io/api/admin/verify-otp",
    //         {
    //           otp: otpInput,
    //         },
    //         {
    //           headers: {
    //             Authorization: Bearer ${token}, // Use the stored token for authorization
    //           },
    //         }
    //       );
    
    //       if (response.data.success) {
    //         setOtpVerified(true);
    //         console.log("OTP verified successfully:", response.data.message);
    //       } else {
    //         console.error("OTP verification failed", response.data);
    //       }
    //     } catch (error) {
    //       console.error("OTP verification error:", error.response.data);
    //     }
    // };



    const handleVerifyOtp = async () => {
        const token = localStorage.getItem('token');
    
        if (!otpInput) {
            alert("Please enter the OTP.");
            return;
        }
    
        try {
            const response = await fetch('https://fe-test.revvex.io/api/admin/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}` // Use the stored token for authorization
                },
                body: JSON.stringify({ otp: otpInput }) // Convert OTP input to JSON string
            });
    
            const data = await response.json(); // Parse the JSON response
    
            if (response.ok && data.success) {
                setOtpVerified(true);
                console.log('OTP verified successfully:', data.message);
            } else {
                console.error('OTP verification failed:', data.message);
            }
        } catch (error) {
            console.error('OTP verification error:', error);
        }
    };
    
    

  return (
    <div className="signup-container">
        <div className="signUp-content otp-content">

            <div className="mail-text mail-text-verify">
                <h2>Verify your email</h2>
                <p>A four digit OTP code has been sent to your email <span>seyi@zojatech.com</span></p>
            </div>

            <div className="otp-group">
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
                    <button onClick={handleVerifyOtp} className="mail-button otp-button">Confirm code</button>
                    <p className="mail-login otp-login">Didn't get the mail? <span>Resend</span></p>

                {/* </div> */}
            </div>
 
                
        </div>

    </div>
  );
};

export default OtpComponent;
