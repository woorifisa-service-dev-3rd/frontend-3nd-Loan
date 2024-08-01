import React, { useState, useContext } from 'react';
import { LoanContext } from "../../contexts/Loancontext";
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import {
  PRODUCT_NAMES,
  DEFAULT_INTEREST_RATES,
  DEFAULT_MAX_LIMITS,
  REPAYMENT_PERIODS,
  FEATURES,
  APPLICATION_METHODS,
  REQUIRED_CREDIT_SCORES,
  LOAN_PROVIDERS
} from '@/constants/loanConstants';
import * as S from '@/components/BottomSheet/BottomSheet.style';

const FilterHeader = ({ onFilter }) => {
  const loans = useContext(LoanContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);

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
    setSelectedSort(sort);
    applySort(sort);
  };

  const handleResetFilter = () => {
    setSelectedFilter(null);
  };

  const applySort = (sort) => {
    let sortedLoans = [...loans];

    if (sort === 'interestAsc') {
      sortedLoans.sort((a, b) => a.interestRate - b.interestRate);
    } else if (sort === 'interestDesc') {
      sortedLoans.sort((a, b) => b.interestRate - a.interestRate);
    } else if (sort === 'limitAsc') {
      sortedLoans.sort((a, b) => a.maxLimit - b.maxLimit);
    } else if (sort === 'limitDesc') {
      sortedLoans.sort((a, b) => b.maxLimit - a.maxLimit);
    } else if (sort === 'creditScoreAsc') {
      sortedLoans.sort((a, b) => a.requiredCreditScore - b.requiredCreditScore);
    } else if (sort === 'creditScoreDesc') {
      sortedLoans.sort((a, b) => b.requiredCreditScore - a.requiredCreditScore);
    }

    if (onFilter) {
      onFilter(sortedLoans);
    }
  };

  return (
    <div className='bottom'>
      <S.FilterSection>
        <button onClick={handleOpenModal}>검색 조건</button>
        <button
          className={selectedSort === 'interestDesc' ? 'active' : ''}
          onClick={() => handleSortSelect('interestDesc')}
        >
          금리순
        </button>
        <button
          className={selectedSort === 'limitDesc' ? 'active' : ''}
          onClick={() => handleSortSelect('limitDesc')}
        >
          한도순
        </button>
        <button
          className={selectedSort === 'creditScoreDesc' ? 'active' : ''}
          onClick={() => handleSortSelect('creditScoreDesc')}
        >
          신용 점수순
        </button>
      </S.FilterSection>
      {isModalOpen && (
        <BottomSheet onClose={handleCloseModal} filterCount={loans.length}>
          <S.ContentWrapper>
            <h3>대출 종류</h3>
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
            <h3>상품 특징</h3>
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
            <h3>신청 방법</h3>
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
            <h3>상환 기간</h3>
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
            <h3>금융권</h3>
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
          </S.ContentWrapper>
          <S.Footer>
            <button className="reset-button" onClick={handleResetFilter}>필터 초기화</button>
            <button className="loan-button" onClick={handleCloseModal}>{loans.length}개 대출 보기</button>
          </S.Footer>
        </BottomSheet>
      )}
    </div>
  );
};

export default FilterHeader;