import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Import useNavigate



const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleNavigateToRegister = () => {
        navigate('/register'); // Navigate to the Register page
      };

    const navigate = useNavigate(); // Initialize useNavigate

  
    const handleEmailChange = (e) => {
    //   setEmail(e.target.value.slice(0, 60)); // Limit to 15 characters

        const newEmail = e.target.value.slice(0, 60);
        setEmail(newEmail);
        setFormData((prevFormData) => ({
            ...prevFormData,
            email: newEmail,
        }));
    };
  
    const handlePasswordChange = (e) => {
    //   setPassword(e.target.value.slice(0, 15)); // Limit to 15 characters

        const newPassword = e.target.value.slice(0, 15);
        setPassword(newPassword);
        setFormData((prevFormData) => ({
            ...prevFormData,
            password: newPassword,
        }));
    };
  

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //     const response = await fetch("https://fe-test.revvex.io/api/admin/login", {
    //         method: "POST",
    //         headers: {
    //         "Content-Type": "application/json", // Indicate that you're sending JSON data
    //         },
    //         body: JSON.stringify(formData), // Convert formData to JSON string
    //     });
    
    //     // Check if the response is OK (status code 200-299)
    //     if (!response.ok) {
    //         const errorData = await response.json(); // Parse the error response
    //         throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
    //     }
    //         console.log("Login successful");

    
    //     // const data = await response.json(); // Parse the JSON response
    
    //     // Store token in local storage
    //     // const token = data.data.token; // Access token from response data
    //     // localStorage.setItem("token", token);
    
    //     // Log OTP
    //     // const otp = data.data.opt; // Ensure correct property name
    //     // setOtp(otp);
    //     // console.log("OTP:", otp);

    //     // Redirect to MailPage component upon successful registration
    //     navigate("/dashboard"); // Navigate to MailPage
    
    //     } catch (error) {
    //     console.error("Registration error:", error.message); // Log the error message
    //     }
    // };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://fe-test.revvex.io/api/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
            }
    
            console.log("Login successful");
            navigate("/dashboard");
    
        } catch (error) {
            console.error("Registration error:", error.message);
        }
    };
    
    return (
    <div className="signup-container">
        <div className="signUp-content register-container">
            <div className="signUp-content-item">
                <div className="signUp-content-payload">
                    
                    <div className="register">
                        <h2>Log in to your account</h2>
                        <p>Proceed to create account and setup your organization</p>
                    </div>

                    {/* <div className="form-container"> */}
                        {/* <form onSubmit={handleEmailSignup}>
                            
                            <div className="form-group">
                            <span className="icon">
                                <FaEnvelope />
                            </span>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Seyi@zojatech.com"
                            />
                            </div>

                            <div className="form-group">
                            <span className="icon">
                                <FaLock />
                            </span>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="***********"
                            />
                            </div>

                            <button type="submit">Login</button>
                        </form> */}
                        <form onSubmit={handleLogin}>
                            <div className="form-group form-group-login">
                                <label htmlFor="email">Email</label>
                                <span className="icon">
                                    <FaEnvelope />
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Seyi@zojatech.com"
                                    // value={email}
                                    value={formData.email}
                                    onChange={handleEmailChange}
                                    maxLength="60"
                                />
                                <span className="icon toggle-icon" onClick={togglePasswordVisibility}>
                                <FaEyeSlash /> 
                                </span>
                                <div className="input-counter">{`${email.length} / 60`}</div>
                            </div>
                            

                            <div className="form-group form-group-login">
                                <label htmlFor="email">Password</label>
                                <span className="icon">
                                    <FaLock />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="***********"
                                    // value={password}
                                    value={formData.password}
                                    onChange={handlePasswordChange}
                                    maxLength="15"
                                />
                                <span className="icon toggle-icon" onClick={togglePasswordVisibility}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                                <div className="input-counter">{`${password.length} / 15`}</div>
                            </div>

                            <button type="submit">Login</button>
                        </form>
                    {/* </div> */}



                    <p>By clicking the button above, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span>.</p>

                </div>
                <p>Already have an account? <span onClick={handleNavigateToRegister}>Register</span></p>

            </div>

            <button className="help">Get help
                <svg className="help-icon" width="19.43" height="18.13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3492_3)">
                <path d="M16.1769 14.4428C16.0508 14.5693 15.9542 14.7221 15.894 14.8902C15.8338 15.0583 15.8113 15.2377 15.8284 15.4154C15.9137 16.2382 16.0755 17.0512 16.3116 17.844C14.6177 17.4518 13.5831 16.9976 13.1132 16.7596C12.8467 16.6246 12.5397 16.5927 12.2511 16.6698C11.4236 16.8904 10.5708 17.0014 9.71443 17.0001C4.86214 17.0001 1.21442 13.5916 1.21442 9.71436C1.21442 5.83836 4.86214 2.42864 9.71443 2.42864C14.5667 2.42864 18.2144 5.83836 18.2144 9.71436C18.2144 11.4969 17.4652 13.1508 16.1769 14.4428ZM16.7755 19.1846C17.0632 19.2416 17.3518 19.2938 17.6413 19.3412C17.8841 19.3801 18.0687 19.1275 17.9728 18.9016C17.865 18.6474 17.7661 18.3894 17.6765 18.1281L17.6729 18.116C17.3717 17.2417 17.1264 16.2363 17.0366 15.3001C18.5265 13.8065 19.4287 11.8515 19.4287 9.71436C19.4287 5.01993 15.0791 1.21436 9.71443 1.21436C4.34971 1.21436 0.000139236 5.01993 0.000139236 9.71436C0.000139236 14.4088 4.34971 18.2144 9.71443 18.2144C10.6766 18.2157 11.6347 18.0907 12.5644 17.8428C13.1958 18.1621 14.5546 18.7438 16.7755 19.1846Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_3492_3">
                <rect width="19.4286" height="19.4286" fill="white" transform="matrix(-1 0 0 1 19.4287 0)"/>
                </clipPath>
                </defs>
                </svg>
            </button>
        </div>

    </div>
  );
};

export default LoginComponent;
