import React, { useState } from 'react';
import BottomSheet from '@/components/BottomSheet/BottomSheet';
import { PRODUCT_NAMES, FEATURES, APPLICATION_METHODS, LOAN_PROVIDERS, DEFAULT_INTEREST_RATES, DEFAULT_MAX_LIMITS, REQUIRED_CREDIT_SCORES, LEGAL_INTEREST_LIMITS, REPAYMENT_PERIODS } from '@/constants/loanConstants';
import * as S from '@/components/BottomSheet/BottomSheet.style';

const FilterHeader = ({loans}) => {
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
  };

  const handleResetFilter = () => {
      setSelectedFilter(null);
  };

  const sortedLoans = [...loans];
  if (selectedSort === 'interestAsc') {
      sortedLoans.sort((a, b) => DEFAULT_INTEREST_RATES[a.name] - DEFAULT_INTEREST_RATES[b.name]);
  } else if (selectedSort === 'interestDesc') {
      sortedLoans.sort((a, b) => DEFAULT_INTEREST_RATES[b.name] - DEFAULT_INTEREST_RATES[a.name]);
  } else if (selectedSort === 'limitAsc') {
      sortedLoans.sort((a, b) => DEFAULT_MAX_LIMITS[a.name] - DEFAULT_MAX_LIMITS[b.name]);
  } else if (selectedSort === 'limitDesc') {
      sortedLoans.sort((a, b) => DEFAULT_MAX_LIMITS[b.name] - DEFAULT_MAX_LIMITS[a.name]);
  } else if (selectedSort === 'creditScoreAsc') {
      sortedLoans.sort((a, b) => REQUIRED_CREDIT_SCORES[a.name] - REQUIRED_CREDIT_SCORES[b.name]);
  } else if (selectedSort === 'creditScoreDesc') {
      sortedLoans.sort((a, b) => REQUIRED_CREDIT_SCORES[b.name] - REQUIRED_CREDIT_SCORES[a.name]);
  } else if (selectedSort === 'interestLimitAsc') {
      sortedLoans.sort((a, b) => LEGAL_INTEREST_LIMITS[a.name] - LEGAL_INTEREST_LIMITS[b.name]);
  } else if (selectedSort === 'interestLimitDesc') {
      sortedLoans.sort((a, b) => LEGAL_INTEREST_LIMITS[b.name] - LEGAL_INTEREST_LIMITS[a.name]);
  }


  const filteredLoans = selectedFilter ? sortedLoans.filter((loans) =>
      Object.values(loans).includes(selectedFilter)
  ) : sortedLoans;

  return (
      <div className='bottom'>
        <S.FilterSection>
          <button onClick={handleOpenModal}>대출 종류</button>
        </S.FilterSection>
        <S.FilterSection>
                <h3>정렬 기준</h3>
                <button
                  className={selectedSort === 'interestAsc' ? 'active' : ''}
                  onClick={() => handleSortSelect('interestAsc')}
                >
                  금리순 (오름차순)
                </button>
                <button
                  className={selectedSort === 'interestDesc' ? 'active' : ''}
                  onClick={() => handleSortSelect('interestDesc')}
                >
                  금리순 (내림차순)
                </button>
                <button
                  className={selectedSort === 'limitAsc' ? 'active' : ''}
                  onClick={() => handleSortSelect('limitAsc')}
                >
                  한도순 (오름차순)
                </button>
                <button
                  className={selectedSort === 'limitDesc' ? 'active' : ''}
                  onClick={() => handleSortSelect('limitDesc')}
                >
                  한도순 (내림차순)
                </button>
                <button
                  className={selectedSort === 'creditScoreAsc' ? 'active' : ''}
                  onClick={() => handleSortSelect('creditScoreAsc')}
              >
                  신용 점수순 (오름차순)
              </button>
              <button
                  className={selectedSort === 'creditScoreDesc' ? 'active' : ''}
                  onClick={() => handleSortSelect('creditScoreDesc')}
              >
                  신용 점수순 (내림차순)
              </button>
              <button
                  className={selectedSort === 'interestLimitAsc' ? 'active' : ''}
                  onClick={() => handleSortSelect('interestLimitAsc')}
              >
                  이자율 상한선순 (오름차순)
              </button>
              <button
                  className={selectedSort === 'interestLimitDesc' ? 'active' : ''}
                  onClick={() => handleSortSelect('interestLimitDesc')}
              >
                  이자율 상한선순 (내림차순)
              </button>
              </S.FilterSection>
        {isModalOpen && (
          <BottomSheet onClose={handleCloseModal} filterCount={filteredLoans.length}>
            <S.ContentWrapper>
              <S.FilterSection>
                <h3>대출 종류</h3>
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
              <S.FilterSection>
                <h3>상품 특징</h3>
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
              <S.FilterSection>
                <h3>신청 방법</h3>
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
              <S.FilterSection>
                <h3>상환 기간</h3>
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
              <S.FilterSection>
                  <h3>금융권</h3>
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
              <button className="loan-button">{filteredLoans.length}개 대출 보기</button>
            </S.Footer>
          </BottomSheet>
        )}
      </div>
    );
  };
  
  export default FilterHeader;