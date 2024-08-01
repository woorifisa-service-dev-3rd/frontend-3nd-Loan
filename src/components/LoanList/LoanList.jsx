import { useContext } from "react";
import { LoanContext } from "../../contexts/Loancontext";
import { LoanItem } from "./LoanItem";
import FilterHeader from "@/components/LoanList/FilterHeader";
import DefaultLayout from "../../layouts/DefaultLayout";

export const LoanList = () => {
  const loans = useContext(LoanContext);
  console.log(`log : ${loans}`);

  return (
    <div className="min-h-screen flex justify-center items-center p-1">
      <div className="w-screen h-screen flex flex-col">
        <div className="flex-grow overflow-hidden">
          {console.log("loans + " + loans)}
          <DefaultLayout>
            <FilterHeader loans={loans} />
          </DefaultLayout>
          <ul className="px-0 my-0 overflow-y-auto h-full scrollbar-hidden">
            {loans.map(loan =>
              <LoanItem key={loan.id} loan={loan} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
