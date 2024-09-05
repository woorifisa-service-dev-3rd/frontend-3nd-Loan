import React, { useState, useContext, useEffect } from 'react';
import { LoanContext } from "../../contexts/Loancontext";
import { LoanAllItem } from "./LoanAllItem";
import FilterHeader from "@/components/LoanList/FilterHeader";
import DefaultLayout from "../../layouts/DefaultLayout";



export const LoanList = () => {
  const loans = useContext(LoanContext);
  const [filteredLoans, setFilteredLoans] = useState(loans);

  useEffect(() => {
    setFilteredLoans(loans);
  }, [loans]);

  const handleFilterChange = (filtered) => {
    setFilteredLoans(filtered);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-1">
      <div className="w-screen h-screen flex flex-col">
        <div className="flex-grow overflow-hidden">
          <DefaultLayout>
            <FilterHeader onFilter={handleFilterChange} />
          </DefaultLayout>
          <ul className="px-0 my-0 overflow-y-auto h-full scrollbar-hidden">
            {filteredLoans.map(loan =>
              <LoanAllItem key={loan.id} loan={loan} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
