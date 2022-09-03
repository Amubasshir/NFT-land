import React from 'react';
import brandLogo from '../../assets/brands-logo.png';
import './brands.css';
const Brands = () => {
  return (
    <div className="brands absolute-center">
      <img src={brandLogo} className="bi-logos" alt="brands-logo" />
    </div>
  );
};

export default Brands;
