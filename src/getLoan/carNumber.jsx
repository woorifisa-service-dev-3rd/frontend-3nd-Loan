import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './carNumber.css';

const CarNumber = () => {
  const [carNumber, setCarNumber] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCarNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/collateral'); 
  };

  return (
    <section className="car-number-section">
      <br/>
      <br/>
      <h1 className="form-heading">
        <strong>자동차 번호를 입력하세요</strong>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="car-number-input"
          placeholder="자동차 번호"
          value={carNumber}
          onChange={handleChange}
        />
        <button type="submit" className="button-link">저장</button>
      </form>
    </section>
  );
};

export default CarNumber;