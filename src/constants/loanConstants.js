// src/constants/loanConstants.js

/**
 * 대출 상품 이름
 * 각 대출 상품의 유형을 정의합니다.
 */
export const PRODUCT_NAMES = {
  SMALL_LOAN: '소액 대출',
  MEDIUM_LOAN: '중형 대출',
  LARGE_LOAN: '대형 대출',
  EMERGENCY_LOAN: '비상금 대출',
  URGENT_LOAN: '긴급 자금 대출',
};
/**
 * 대출 상품에 필요한 신용 점수
 * 각 대출 상품에 대해 필요한 신용 점수를 정의합니다.
 */
export const REQUIRED_CREDIT_SCORES = {
  SMALL_LOAN_SCORE: 500, // 소액 대출의 최소 신용 점수
  MEDIUM_LOAN_SCORE: 600, // 중형 대출의 최소 신용 점수
  LARGE_LOAN_SCORE: 700, // 대형 대출의 최소 신용 점수
  EMERGENCY_LOAN_SCORE: 550, // 비상금 대출의 최소 신용 점수
  URGENT_LOAN_SCORE: 650, // 긴급 자금 대출의 최소 신용 점수
};

/**
 * 법정 이자율 상한선
 * 대출 상품별로 법정 이자율의 상한선을 설정합니다. 연이자율 기준으로 정의됩니다.
 */
export const LEGAL_INTEREST_LIMITS = {
  SMALL_LOAN_LIMIT: 7.00, // 소액 대출의 최대 이자율 7.00%
  MEDIUM_LOAN_LIMIT: 8.50, // 중형 대출의 최대 이자율 8.50%
  LARGE_LOAN_LIMIT: 10.00, // 대형 대출의 최대 이자율 10.00%
  EMERGENCY_LOAN_LIMIT: 12.00, // 비상금 대출의 최대 이자율 12.00%
  URGENT_LOAN_LIMIT: 14.00, // 긴급 자금 대출의 최대 이자율 14.00%
};

/**
 * 기본 이자율
 * 각 대출 상품의 기본 이자율을 설정합니다. 연이자율 기준으로 정의됩니다.
 */
export const DEFAULT_INTEREST_RATES = {
  SMALL_LOAN_RATE: 5.90,
  MEDIUM_LOAN_RATE: 7.50,
  LARGE_LOAN_RATE: 9.20,
  EMERGENCY_LOAN_RATE: 11.75,
  URGENT_LOAN_RATE: 13.40,
};

/**
 * 기본 최대 대출 한도
 * 대출 상품별로 기본 최대 대출 한도를 설정합니다. 금액 단위는 원(₩)입니다.
 */
export const DEFAULT_MAX_LIMITS = {
  SMALL_LOAN_LIMIT: 10000000, // 기본 최대 대출 한도 1,000만원
  MEDIUM_LOAN_LIMIT: 50000000, // 기본 최대 대출 한도 5,000만원
  LARGE_LOAN_LIMIT: 100000000, // 기본 최대 대출 한도 1억원
  EMERGENCY_LOAN_LIMIT: 5000000, // 기본 최대 대출 한도 500만원
  URGENT_LOAN_LIMIT: 2000000, // 기본 최대 대출 한도 200만원
};

/**
 * 상환 기간
 * 각 대출 상품의 상환 기간을 정의합니다.
 */
export const REPAYMENT_PERIODS = {
  SMALL_LOAN_PERIOD: '12개월',
  MEDIUM_LOAN_PERIOD: '24개월',
  LARGE_LOAN_PERIOD: '36개월',
  EMERGENCY_LOAN_PERIOD: '6개월',
  URGENT_LOAN_PERIOD: '3개월',
};

/**
 * 대출 상품 특징
 * 각 대출 상품의 특징을 정의합니다.
 */
export const FEATURES = {
  FAST_APPROVAL: '빠른 심사',
  MOBILE_APPLICATION: '모바일 신청 가능',
  COUPON_PROVIDED: '금리 쿠폰 제공',
  DIRECT_TRANSACTION: '투자자와 직접 거래',
  QUICK_APPROVAL: '신속한 대출 승인',
  NO_DOCUMENTS: '무서류 대출',
  EASY_APPLICATION: '간편한 신청',
};

/**
 * 신청 방법
 * 대출 상품 신청 가능한 방법을 정의합니다.
 */
export const APPLICATION_METHODS = {
  MOBILE: '모바일',
  INTERNET: '인터넷',
};

export const LOAN_PROVIDERS = {
  BANK_A: '은행 A',
  BANK_B: '은행 B',
  SAVINGS_BANK_A: '저축은행 A',
  LOAN_COMPANY_A: '대출회사 A',
  P2P_PLATFORM_A: 'P2P 플랫폼 A',
  CAPITAL_COMPANY_A: '캐피탈 회사 A',
};
