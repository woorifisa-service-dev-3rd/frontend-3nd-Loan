import React, { useState, useContext, useEffect } from 'react';
import { LoanContext } from "../../contexts/Loancontext";
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import {
  PRODUCT_NAMES,
  FEATURES,
  APPLICATION_METHODS,
  REPAYMENT_PERIODS,
  LOAN_PROVIDERS
} from '@/constants/loanConstants';
import * as S from '@/components/BottomSheet/BottomSheet.style';

const FilterHeader = ({ onFilter }) => {
  const loans = useContext(LoanContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [sortState, setSortState] = useState({
    interestDesc: false,
    limitDesc: false,
    creditScoreDesc: false
  });
  const [filteredLoans, setFilteredLoans] = useState(loans);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);

  useEffect(() => {
    applyFilterAndSort(selectedFilter, sortState);
  }, [selectedFilter, sortState, loans]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };

  const handleSortSelect = (sort) => {
    const newSortState = { ...sortState, [sort]: !sortState[sort] };
    setSortState(newSortState);
  };

  const handleResetFilter = () => {
    setSelectedFilter(null);
  };

  const allHandleResetFilter = () => {
    setSelectedFilter(null);
    setSortState({
      interestDesc: false,
      limitDesc: false,
      creditScoreDesc: false
    });
    setFilteredLoans(loans);
  };

  const applyFilterAndSort = (filter, sortState) => {
    let result = [...loans];

    if (filter) {
      result = result.filter((loan) => Object.values(loan).includes(filter));
    }

    if (sortState.interestDesc) {
      result.sort((a, b) => b.interestRate - a.interestRate);
    } else if (sortState.limitDesc) {
      result.sort((a, b) => b.maxLimit - a.maxLimit);
    } else if (sortState.creditScoreDesc) {
      result.sort((a, b) => b.requiredCreditScore - a.requiredCreditScore);
    }

    setFilteredLoans(result);
    if (onFilter) {
      onFilter(result);
    }
  };

  return (
    <div className='bottom'>
      <div className="flex justify-center space-x-2 mb-4">
        <button onClick={handleOpenModal} className="p-2 bg-blue-500 text-white rounded">검색 조건</button>
        <button
          className={`p-2 ${sortState.interestDesc ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
          onClick={() => handleSortSelect('interestDesc')}
          disabled={Object.values(sortState).some(state => state && !sortState.interestDesc)}
        >
          금리순
        </button>
        <button
          className={`p-2 ${sortState.limitDesc ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
          onClick={() => handleSortSelect('limitDesc')}
          disabled={Object.values(sortState).some(state => state && !sortState.limitDesc)}
        >
          한도순
        </button>
        <button
          className={`p-2 ${sortState.creditScoreDesc ? 'bg-blue-500 text-white' : 'bg-gray-300'} rounded`}
          onClick={() => handleSortSelect('creditScoreDesc')}
          disabled={Object.values(sortState).some(state => state && !sortState.creditScoreDesc)}
        >
          신용 점수순
        </button>
        <button onClick={allHandleResetFilter} className="p-2 bg-red-500 text-white rounded">초기화</button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <BottomSheet onClose={handleCloseModal} filterCount={filteredLoans.length}>
            <S.ContentWrapper className="overflow-y-auto">
              <h3 className="font-bold text-xl mb-4">대출 종류</h3>
              <S.FilterSection>
                {Object.values(PRODUCT_NAMES).map((name) => (
                  <button
                    key={name}
                    className={selectedFilter === name ? 'active' : ''}
                    onClick={() => handleFilterSelect(name)}
                  >
                    {name}
                  </button>
                ))}
              </S.FilterSection>
              <h3 className="font-bold text-xl mb-4">상품 특징</h3>
              <S.FilterSection>
                {Object.values(FEATURES).map((feature) => (
                  <button
                    key={feature}
                    className={selectedFilter === feature ? 'active' : ''}
                    onClick={() => handleFilterSelect(feature)}
                  >
                    {feature}
                  </button>
                ))}
              </S.FilterSection>
              <h3 className="font-bold text-xl mb-4">신청 방법</h3>
              <S.FilterSection>
                {Object.values(APPLICATION_METHODS).map((method) => (
                  <button
                    key={method}
                    className={selectedFilter === method ? 'active' : ''}
                    onClick={() => handleFilterSelect(method)}
                  >
                    {method}
                  </button>
                ))}
              </S.FilterSection>
              <h3 className="font-bold text-xl mb-4">상환 기간</h3>
              <S.FilterSection>
                {Object.values(REPAYMENT_PERIODS).map((provider) => (
                  <button
                    key={provider}
                    className={selectedFilter === provider ? 'active' : ''}
                    onClick={() => handleFilterSelect(provider)}
                  >
                    {provider}
                  </button>
                ))}
              </S.FilterSection>
              <h3 className="font-bold text-xl mb-4">금융권</h3>
              <S.FilterSection>
                {Object.values(LOAN_PROVIDERS).map((provider) => (
                  <button
                    key={provider}
                    className={selectedFilter === provider ? 'active' : ''}
                    onClick={() => handleFilterSelect(provider)}
                  >
                    {provider}
                  </button>
                ))}
              </S.FilterSection>
            <S.Footer>
              <button className="reset-button" onClick={handleResetFilter}>필터 초기화</button>
              <button className="loan-button" onClick={handleCloseModal}>{filteredLoans.length}개 대출 보기</button>
            </S.Footer>
            </S.ContentWrapper>
          </BottomSheet>
        </div>
      )}
    </div>
  );
};

export default FilterHeader;
