import React from "react";
import logo from '../assets/img/logo.png'


const DescriptionComponent = () => {
  return (
    <div className="description-container">
        <img src={logo} alt={logo} width={120} height={36} className="logo" />
        <div>
            <h2>Why Join Us?</h2>
            <p>
            Track real-time overview of company’s financial performance.
            </p>

        </div>

        <div>
            <h2>Why Join Us?</h2>
            <p>
            Track created projects budget against actual revenue and expenses.
            </p>

        </div>

        <div>
            <h2>Why Join Us?</h2>
            <p>
            Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation.
            </p>

        </div>
    </div>
  );
};

export default DescriptionComponent;
