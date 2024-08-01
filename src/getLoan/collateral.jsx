import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import carImage from '../getLoan/car.png';
import apartImage from '../getLoan/home.png'
import './collateral.css'; 

const Collateral = () => {
  
  const navigate = useNavigate();

  const handleCarClick = () => {
    navigate('/car-number');
  };

  const handleHomeClick = () => {
    navigate('/home-address');
  };

  const handleNextClick = () => {
    navigate('/income');
  };
  
  return (
      <>
        <br/>
        <br/>
        <section className="info">
        <h1 className="form-heading">
          <strong>보유한 자산을 입력하면 <br/>한도가 늘어나요</strong>
        </h1>

        <div className="input-area" onClick={handleCarClick}>
          <img src={carImage} alt="Car" className="car-image" />
          <p className="car-text">
            자동차가 있어요
          </p>
        </div>
        <div className="input-area1" onClick={handleHomeClick}>
          <img src={apartImage} alt="Apart" className="apart-image" />
          <p className="apart-text">
            아파트가 있어요
          </p>
        </div>
        <br/>
        <button type="button" onClick={handleNextClick} className="button-link">다음</button>
      </section>
      </>
    );
  };
    
export default Collateral;