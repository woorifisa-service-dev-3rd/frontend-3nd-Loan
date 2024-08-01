import React, { useContext } from "react";
import { LoanContext } from "../../contexts/Loancontext";
import HeaderNav from "../ui/HeaderNav"; // 경로가 올바른지 확인하세요
import { LoanItem } from "./LoanItem"; // LoanItem 컴포넌트를 가져옵니다

export const LoanBody = () => {
  const loans = useContext(LoanContext);
  console.log(`Loans: ${JSON.stringify(loans)}`); // 데이터 확인을 위해 JSON.stringify를 사용합니다

  return (
    <>
      <div className="container mx-auto p-4">
        {loans && loans.length > 0 ? (
          loans.map((loan, index) => (
            <LoanItem key={index} loan={loan} />
          ))
        ) : (
          <p>대출 정보가 없습니다.</p>
        )}
      </div>
    </>
  );
};
