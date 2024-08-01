import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './wantloan.css';

const Wantloan = ({ userData }) => {

  // 유저 데이터의 이름.신용점수를 받아서 출력해주는 함수 구현
  const randomId = Math.floor(Math.random() * userData.length) + 1;

  const user = userData.find(user => user.id === randomId);

  if (!user) return <p>유저를 찾을 수 없습니다.</p>;

  return (
    <>
      <br/>
      <br/>
      <br/>
      <h1 className="form-heading"> <strong>대출 상품이 매칭되었습니다.</strong>
      </h1>
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
// 유저데이터 (이름.신용점수) >= 신용점수 ?  해당하는 아이템 : 없음;
// 7 ~ 10
//   <h1 className=“form-heading”>
//   <strong>대출 상품이 <br/>매칭되었습니다.</strong>
//   {어쩌고 ? n 이면 아이템.id == n }
//   </h1>
    
export default Wantloan;