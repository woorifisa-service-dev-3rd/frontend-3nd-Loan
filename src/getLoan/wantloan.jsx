import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './wantloan.css';

const Wantloan = ({ userData }) => {

  // 유저 데이터의 이름.신용점수를 받아서 출력해주는 함수 구현
  const randomId = Math.floor(Math.random() * userData.length) + 1;
  const user = userData[randomId]

  if (!user) return <p>유저를 찾을 수 없습니다.</p>;

  return (
    <>
      <br/>
      <br/>
      <br/>
      <h1 className="form-heading"> <strong>대출 상품이 매칭되었습니다.</strong></h1>
      <div>
      <p className="product-recommend">대출 상품 추천</p>
      {user ? (
        <div>
          <p>고객 이름: {user.name}</p>
          <p>신용 점수: {user.creditScore}</p>
        </div>
      ) : (
        <p>사용자를 찾을 수 없습니다.</p>
      )}
    </div>
    </>
  );

}
    
export default Wantloan;