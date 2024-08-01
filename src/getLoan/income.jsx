import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './income.css';

const Income = () => {
  const [amount, setAmount] = useState('');

  const navigate = useNavigate();

  const handleNextClick = () => {
    alert("추천 대출 상품을 준비하는중입니다.");

    setTimeout(() => {
      navigate('/want-loan'); 
    }, 2000); 
  };

  return (
    <>
      <section className="job-section">
        <h1 className="form-heading">
          <strong>소득정보</strong>
        </h1>
        <p className="information">
          내게 맞는 금리와 한도 조회를 위해 <br/>
          정보를 정확히 입력해 주세요.
        </p>
        <div className="input-container">
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="금액을 입력하세요" 
            className="amount-input" 
          />
          <span className="currency">만원</span>
        </div>

        <button type="button" onClick={handleNextClick} className="button-link">
          다음
        </button>
      </section>
    </>
  );
};

export default Income;