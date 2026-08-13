import React from 'react';

const SuccessView = ({ onReset }) => {
  return (
    <div className="success-container">
      <div className="success-icon-wrapper">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="40" fill="url(#circle-gradient)" />
          <path
            d="M28 40.5L36 48.5L52 31.5"
            stroke="white"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient
              id="circle-gradient"
              x1="-10"
              y1="-10"
              x2="80"
              y2="80"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6348FE" />
              <stop offset="1" stopColor="#61059F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <h1 className="success-title">THANK YOU!</h1>
      <p className="success-message">We've added your card details</p>

      <button type="button" className="btn-submit" onClick={onReset}>
        Continue
      </button>
    </div>
  );
};

export default SuccessView;
