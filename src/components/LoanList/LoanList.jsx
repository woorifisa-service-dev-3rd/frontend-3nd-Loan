import { useContext } from "react";
import { LoanContext } from "../../contexts/Loancontext";
import { LoanItem } from "./LoanItem";

export const LoanList = () => {

  const loans = useContext(LoanContext);
  console.log(`log : ${loans}`);

  return (
    <>
        <ul className='px-0 my-8'>
          {loans.map(loan =>
            <LoanItem key={loans.id} loan={loan} />)}
        </ul>
    </>
  );
}