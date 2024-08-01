import React from 'react';

export const LoanItem = ({ loan }) => {
  return (
    <>
      <a href='#'>
        <div className='flex justify-center items-center h-full'>
          <div className="w-80p max-w-full flex gap-4 px-2 py-4 border rounded-lg shadow-md bg-white">
            <picture className='dark:hidden' />
            <picture className='hidden dark:block'>
              {/* 은행 로고 */}
              <img src='/imsilogo.jpeg' alt="은행 로고" width="100px" height="100px" className="mr-6" />
            </picture>
            <div className="flex flex-col gap-6">
              <h3 className="text-body-10 text-gray-900">
                <span class="font-bold text-xl text-left">{loan.provider}</span>
                <br />
                <span class="font-medium text-left">{loan.name}</span>
              </h3>
              <dl className="flex gap-x-6 text-left">
                <div>
                  <dt className='text-body-14 font-medium text-gray-500 text-left'>최저 금리</dt>
                  <dt className='text-[22px] font-extrabold leading-[32px]'>{loan.interestRate}%</dt>
                </div>
                <div>
                  <dt className='text-body-14 font-medium text-gray-500 text-left'>최대 한도</dt>
                  <dt className='text-[22px] font-extrabold leading-[32px]'>{loan.maxLimit / 10000 > 10000
                    ? `${(loan.maxLimit / 100000000).toFixed(1)} 억`
                    : `${(loan.maxLimit / 10000).toFixed(0)} 만원`}</dt>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <hr className='absolute bottom-0 my-0 h-1 w-full border-0 bg-gray-750'></hr>
      </a>
    </>
  );
}



