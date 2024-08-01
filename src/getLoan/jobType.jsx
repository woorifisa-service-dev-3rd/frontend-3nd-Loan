import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './JobType.css'; 

const JobType = () => {
  
  const navigate = useNavigate();

   const handleNavigate = () => {
    navigate('/collateral');
  };

  return (
      <>
        <section className="job-section">
          <h1 className="form-heading">
            <p>ㅤ</p>
            <strong>직업을 선택하세요</strong>
          </h1>

          <p className="transparent-text" onClick={handleNavigate}>정규직 직장인</p>
          <p className="transparent-text" onClick={handleNavigate}>계약직 직장인</p>
          <p className="transparent-text" onClick={handleNavigate}>개인사업자</p>
          <p className="transparent-text" onClick={handleNavigate}>공무원</p>
          <p className="transparent-text" onClick={handleNavigate}>프리랜서</p>
          <p className="transparent-text" onClick={handleNavigate}>기타소득자 / 무직</p>

        </section>
      </>
    );
  };
    
export default JobType;