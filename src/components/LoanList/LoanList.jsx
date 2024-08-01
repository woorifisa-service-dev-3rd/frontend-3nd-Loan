import { useContext } from "react";
import { LoanContext } from "../../contexts/Loancontext";
import { LoanItem } from "./LoanItem";



export const LoanList = () => {
  const loans = useContext(LoanContext);
  console.log(`log : ${loans}`);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center p-1">
        <div className="w-screen h-screen flex flex-col">
          <div className="flex-grow overflow-hidden">
            <ul className="px-0 my-0 overflow-y-auto h-full scrollbar-hidden">
              {loans && loans.length > 0 ? (
                loans.map((loan, index) => (
                  <LoanItem key={index} loan={loan} />
                ))
              ) : (
                <p>대출 정보가 없습니다.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
