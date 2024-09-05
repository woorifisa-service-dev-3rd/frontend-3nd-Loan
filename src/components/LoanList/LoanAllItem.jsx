import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const LoanAllItem = ({ loan }) => {

  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/authentication');
  };

  return (
    <div className="flex justify-center items-center py-2 px-4">
      <Link to={`/loan/${loan.id}`}
        className="w-full max-w-4xl flex gap-4 px-4 py-4 border rounded-lg
        bg-white shadow-xl transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-50">
        <picture className='hidden dark:block'>
          <img src='/imsilogo.jpeg' alt="은행 로고"
            className="mr-6 w-full h-auto max-w-4xl" // 가로폭을 최대 4xl로 조정
          />
        </picture>
        <picture className='dark:hidden'>
          {/* 여기에 은행 로고 이미지 추가 */}
        </picture>
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-900">
            <span className="font-bold text-xl">{loan.provider}</span>
            <br />
            <span className="font-medium">{loan.name}</span>
          </h3>
          <dl className="flex gap-x-6 text-left">
            <div>
              <dt className='text-gray-500 font-medium'>최저 금리</dt>
              <dd className='text-[22px] font-extrabold'>{loan.interestRate}%</dd>
            </div>
            <div>
              <dt className='text-gray-500 font-medium'>최대 한도</dt>
              <dd className='text-[22px] font-extrabold'>
                {loan.maxLimit / 10000 > 10000
                  ? `${(loan.maxLimit / 100000000).toFixed(1)} 억`
                  : `${(loan.maxLimit / 10000).toFixed(0)} 만원`}
              </dd>
            </div>
          </dl>
        </div>
      </Link>
      <button
        type="button"
        onClick={handleNextClick}
        className="absolute bottom-2 right-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        대출받기
      </button>
    </div>
  );
}
