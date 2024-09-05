import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';

const InvestItem = ({ investment }) => {
  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isInvesting, setIsInvesting] = useState(false);

  const handleIncrease = () => {
    setInvestmentAmount(prevAmount => prevAmount + 1000);
  };

  const handleDecrease = () => {
    setInvestmentAmount(prevAmount => (prevAmount - 1000 >= 0 ? prevAmount - 1000 : 0));
  };

  const handleChange = (e) => {
    let newValue = parseInt(e.target.value, 10) || 0;
    newValue = Math.round(newValue / 1000) * 1000;
    setInvestmentAmount(newValue);
  };

  const handleInvest = () => {
    if (isInvesting) return;
    setIsInvesting(true);

    if (investmentAmount >= 1000) {
      toast.success(`${investment.name}에 ${investmentAmount}원 투자하셨습니다!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
        setIsInvesting(false);
      }, 3000);
    } else {
      toast.error('최소 투자 금액은 1000원입니다. 정확한 금액을 입력해주세요.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      setIsInvesting(false);
    }
  };

  return (
    <li className="flex justify-center items-center py-2 px-4">
      {showConfetti && <Confetti />}
      <div
        className="w-full max-w-4xl flex gap-4 px-4 py-4 border rounded-lg
        bg-white shadow-xl transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-50"
      >
        <picture className="dark:hidden">
          {/* 여기에 투자 상품 로고 이미지 추가 */}
        </picture>
        <picture className="hidden dark:block">
          <img src="/imsilogo.jpeg" alt="투자 로고" width="100" height="100" className="mr-6" />
        </picture>
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-900">
            <span className="font-bold text-xl">{investment.name}</span>
          </h3>
          <p className="text-gray-700">{investment.description}</p>
          <dl className="flex gap-x-6 text-left">
            <div>
              <dt className="text-gray-500 font-medium">이자율</dt>
              <dd className="text-[22px] font-extrabold">{investment.interestRate}%</dd>
            </div>
            <div>
              <dt className="text-gray-500 font-medium">최소 투자 금액</dt>
              <dd className="text-[22px] font-extrabold">{investment.minInvestment}₩</dd>
            </div>
            <div>
              <dt className="text-gray-500 font-medium">기간</dt>
              <dd className="text-[22px] font-extrabold">{investment.duration}</dd>
            </div>
          </dl>
          <div className="mt-4 flex items-center">
            <button
              onClick={handleDecrease}
              className="px-2 py-1 bg-gray-200 text-gray-700 font-bold rounded-l-lg hover:bg-gray-300 transition-colors"
              disabled={isInvesting}
            >
              -
            </button>
            <input
              type="number"
              value={investmentAmount}
              onChange={handleChange}
              className="w-24 text-center border-y border-gray-300"
              disabled={isInvesting}
            />
            <button
              onClick={handleIncrease}
              className="px-2 py-1 bg-gray-200 text-gray-700 font-bold rounded-r-lg hover:bg-gray-300 transition-colors"
              disabled={isInvesting}
            >
              +
            </button>
            <button
              onClick={handleInvest}
              className="ml-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
              disabled={isInvesting}
            >
              투자하기
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default InvestItem;
