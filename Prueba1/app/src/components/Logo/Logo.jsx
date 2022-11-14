import './logo.css';

import React from 'react';

const Logo = ({ className }) => {
  return (
    <div className={`logoContainer ${className}`}>
      <div className="U">
        <img src="../../../public/Logo/Vector-7.png" alt="logo" className="uIzq" />
        <img src="../../../public/Logo/Vector (1).png" alt="logo" className="punto" />
        <img src="../../../public/Logo/Vector-8.png" alt="logo" className="uDcha" />
      </div>
      <div className="logoName">
        <img src="../../../public/Logo/Vector.png" alt="logo" />
        <img src="../../../public/Logo/Vector-1.png" alt="logo" />
        <img src="../../../public/Logo/Vector-2.png" alt="logo" />
        <img src="../../../public/Logo/Vector-3.png" alt="logo" />
        <img src="../../../public/Logo/Vector-4.png" alt="logo" />
        <img src="../../../public/Logo/Vector-5.png" alt="logo" />
        <img src="../../../public/Logo/Vector-6.png" alt="logo" className="y" />
      </div>
    </div>
  );
};

export default Logo;
