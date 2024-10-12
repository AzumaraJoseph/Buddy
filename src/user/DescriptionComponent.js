import React from "react";
import logo from '../assets/img/logo.png'


const DescriptionComponent = () => {
  return (
    <div className="description-container">
        <img src={logo} alt={logo} width={120} height={36} className="logo" />
        <div className="description-content">
            <div>
                <div className="description">
                    {/* <h2>Why Join Us?</h2> */}
                    <span className="unread-badge">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z"
                            fill="currentColor"
                            />
                        </svg>
                    </span>
                    <span className="description-text">
                    Track real-time overview of company’s financial performance.
                    </span>

                </div>
                <div className="description">
                    {/* <h2>Why Join Us?</h2> */}
                    <span className="unread-badge">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z"
                            fill="currentColor"
                            />
                        </svg>
                    </span>
                    <span className="description-text">
                    Track created projects budget against actual revenue and expenses.
                    </span>

                </div>
                <div className="description">
                    {/* <h2>Why Join Us?</h2> */}
                    <span className="unread-badge">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z"
                            fill="currentColor"
                            />
                        </svg>
                    </span>
                    <span className="description-text">
                    Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation.
                    </span>

                </div>

            </div>

            <small>© 2022 Revvex. All rights reserved</small>
        </div>

    </div>
  );
};

export default DescriptionComponent;
