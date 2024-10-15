import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 


const OtpComponent = () => {
    const [otp, setOtp] = useState(["", "", "", ""]);

    const navigate = useNavigate(); 

    const handleChange = (element, index) => {
        const value = element.value.replace(/[^0-9]/g, ""); 
        if (value) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (element.nextSibling) {
                element.nextSibling.focus();
            }
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === "Backspace") {
            event.preventDefault();
            const newOtp = [...otp];
    
            if (otp[index]) {
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (!otp[index] && index > 0) {
                const prevInput = event.target.previousSibling;
                if (prevInput) {
                    prevInput.focus();
                    newOtp[index - 1] = "";
                    setOtp(newOtp);
                }
            }
        }
    };

    const handleVerifyOtp = async () => {
        const token = localStorage.getItem('token');
        const otpInput = otp.join(""); 

        if (!otpInput || otpInput.length < 4) {
            alert("Please enter the complete 4-digit OTP.");
            return;
        }

        try {
            const response = await fetch('https://fe-test.revvex.io/api/admin/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}` 
                },
                body: JSON.stringify({ otp: otpInput }) 
            });

            const data = await response.json();

            if (response.ok && data.success) {
                console.log('OTP verified successfully:', data.message);
                
                navigate("/verify-mail"); 
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
                    <p>A four-digit OTP code has been sent to your email <span>seyi@zojatech.com</span></p>
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
                    <button onClick={handleVerifyOtp} className="mail-button otp-button">Confirm code</button>
                    <p className="mail-login otp-login">Didn't get the mail? <span>Resend</span></p>
                </div>
            </div>
        </div>
    );
};

export default OtpComponent;
