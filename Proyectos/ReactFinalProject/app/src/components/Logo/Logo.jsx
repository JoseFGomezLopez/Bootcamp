import './logo.css';

import React from 'react';

const Logo = ({ className }) => {
  return (
    <div className={`logoContainer ${className}`}>
      <div className="U">
        <img src="Logo/Vector-7.png" alt="logo" className="uIzq" />
        <img src="Logo/Vector (1).png" alt="logo" className="punto" />
        <img src="Logo/Vector-8.png" alt="logo" className="uDcha" />
      </div>
      <div className="logoName">
        <img src="Logo/Vector.png" alt="logo" />
        <img src="Logo/Vector-1.png" alt="logo" />
        <img src="Logo/Vector-2.png" alt="logo" />
        <img src="Logo/Vector-3.png" alt="logo" />
        <img src="Logo/Vector-4.png" alt="logo" />
        <img src="Logo/Vector-5.png" alt="logo" />
        <img src="Logo/Vector-6.png" alt="logo" className="Y" />
      </div>
    </div>
  );
};

export default Logo;
