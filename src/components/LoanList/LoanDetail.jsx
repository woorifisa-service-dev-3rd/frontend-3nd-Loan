import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LoanContext } from '../../contexts/Loancontext';

export const LoanDetail = () => {
  const { loanId } = useParams();
  const { loans } = useContext(LoanContext);
  const [loan, setLoan] = useState(null);

  useEffect(() => {
    if (loans) {
      // Find the specific loan using the loanId
      const foundLoan = loans.find((loan) => loan.id === parseInt(loanId, 10));
      setLoan(foundLoan);
    }
  }, [loanId, loans]);

  if (!loans) {
    return <div>Loading...</div>; // Display loading state if loans are not yet available
  }

  if (!loan) {
    return <div>대출 정보를 찾을 수 없습니다.</div>; // Handle the case where the loan is not found
  }

  return (
    <div>
      <h1>대출 상세 정보</h1>
      <div className="loan-details">
        <h2>{loan.provider} - {loan.name}</h2>
        <p><strong>최저 금리:</strong> {loan.interestRate}%</p>
        <p><strong>최대 한도:</strong> {loan.maxLimit / 10000 > 10000
          ? `${(loan.maxLimit / 100000000).toFixed(1)} 억`
          : `${(loan.maxLimit / 10000).toFixed(0)} 만원`}
        </p>
        <p><strong>상세 설명:</strong> {loan.description}</p>
        {/* Add more fields as necessary */}
      </div>
    </div>
  );
};
