import React, { useContext } from 'react';
import { InvestmentContext } from '../../contexts/InvestmentContext';
import InvestItem from './InvestItem'; 
import { ToastContainer } from 'react-toastify'; // ToastContainer를 상위 컴포넌트로 이동

export const InvestmentList = () => {
  const investments = useContext(InvestmentContext);
  console.log(`log : ${investments}`);

  return (
    <div className="min-h-screen flex justify-center items-center p-1">
      <div className="w-screen h-screen flex flex-col">
        <div className="flex-grow overflow-hidden">
          <ul className="px-0 my-0 overflow-y-auto h-full scrollbar-hidden">
            {investments.length > 0 ? (
              investments.map((investment) => (
                <InvestItem key={investment.id} investment={investment} />
              ))
            ) : (
              <p>투자 정보가 없습니다.</p>
            )}
          </ul>
        </div>
      </div>
      <ToastContainer /> {/* 한 번만 렌더링되도록 함 */}
    </div>
  );
};
