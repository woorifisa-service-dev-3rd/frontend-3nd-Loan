import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useReducer } from 'react'
import './App.css';
import './styles/global.css'; // Tailwind와 커스텀 글로벌 CSS 포함
import HeaderNav from './components/ui/HeaderNav'; // HeaderNav 경로를 확인하세요
import Authentication from './getLoan/authentication.jsx';
import JobType from './getLoan/jobType.jsx';
import Collateral from './getLoan/collateral.jsx';
import Income from './getLoan/income.jsx';
import Wantloan from './getLoan/wantloan.jsx'
import CarNumber from './getLoan/carNumber.jsx'
import HomeAddress from './getLoan/homeAddress.jsx';
import {
  PRODUCT_NAMES,
  DEFAULT_INTEREST_RATES,
  DEFAULT_MAX_LIMITS,
  REPAYMENT_PERIODS,
  FEATURES,
  APPLICATION_METHODS,
  REQUIRED_CREDIT_SCORES,
  LOAN_PROVIDERS
} from './constants/loanConstants';
import { LoanContext, LoanDispatchContext } from './contexts/Loancontext.jsx';
import { LoanList } from './components/LoanList/LoanList.jsx';
import { LoanBody } from './components/LoanList/LoanBody.jsx';

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/authentication');
  };
}

// 회원의 신용도 렌덤점수 할당 함수 ( 회원 조회시 마다 할당 )
const getRandomCreditScore = () => Math.floor(Math.random() * (850 - 300 + 1)) + 300;

const userData = [
  {
    "id": 1,
    "name": "유정호",
    "email": "yujungho@example.com",
    "phoneNumber": "010-1234-5678",
    "address": "서울특별시 강남구",
    "registeredDate": "2024-01-15",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 2,
    "name": "강세필",
    "email": "kangsepil@example.com",
    "phoneNumber": "010-2345-6789",
    "address": "부산광역시 해운대구",
    "registeredDate": "2024-02-20",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 3,
    "name": "강재연",
    "email": "kangjaeyeon@example.com",
    "phoneNumber": "010-3456-7890",
    "address": "대구광역시 달서구",
    "registeredDate": "2024-03-10",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 4,
    "name": "강현우",
    "email": "kanghyunwoo@example.com",
    "phoneNumber": "010-4567-8901",
    "address": "인천광역시 남동구",
    "registeredDate": "2024-04-05",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 5,
    "name": "공소연",
    "email": "gongsoyeon@example.com",
    "phoneNumber": "010-5678-9012",
    "address": "경기도 수원시",
    "registeredDate": "2024-05-22",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 6,
    "name": "공예진",
    "email": "gongyejin@example.com",
    "phoneNumber": "010-6789-0123",
    "address": "서울특별시 종로구",
    "registeredDate": "2024-06-18",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 7,
    "name": "곽지은",
    "email": "kwakjieun@example.com",
    "phoneNumber": "010-7890-1234",
    "address": "경기도 고양시",
    "registeredDate": "2024-07-25",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 8,
    "name": "구자빈",
    "email": "gujabin@example.com",
    "phoneNumber": "010-8901-2345",
    "address": "서울특별시 마포구",
    "registeredDate": "2024-08-30",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 9,
    "name": "기남석",
    "email": "kinamseok@example.com",
    "phoneNumber": "010-9012-3456",
    "address": "서울특별시 송파구",
    "registeredDate": "2024-09-15",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 10,
    "name": "길가은",
    "email": "gilgaeun@example.com",
    "phoneNumber": "010-0123-4567",
    "address": "경기도 안양시",
    "registeredDate": "2024-10-01",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 11,
    "name": "김민지",
    "email": "kimminji@example.com",
    "phoneNumber": "010-1234-5678",
    "address": "서울특별시 강동구",
    "registeredDate": "2024-10-15",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 12,
    "name": "김영성",
    "email": "kimyoungsung@example.com",
    "phoneNumber": "010-2345-6789",
    "address": "부산광역시 동래구",
    "registeredDate": "2024-11-05",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 13,
    "name": "김창영",
    "email": "kimchangyoung@example.com",
    "phoneNumber": "010-3456-7890",
    "address": "대구광역시 서구",
    "registeredDate": "2024-12-01",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 14,
    "name": "김현우",
    "email": "kimhyunwoo@example.com",
    "phoneNumber": "010-4567-8901",
    "address": "인천광역시 부평구",
    "registeredDate": "2024-12-10",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 15,
    "name": "김혜빈",
    "email": "kimhyebin@example.com",
    "phoneNumber": "010-5678-9012",
    "address": "서울특별시 동대문구",
    "registeredDate": "2024-12-20",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 16,
    "name": "김호철",
    "email": "kimhocheol@example.com",
    "phoneNumber": "010-6789-0123",
    "address": "경기도 광명시",
    "registeredDate": "2024-12-25",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 17,
    "name": "류혜리",
    "email": "ryuhyeri@example.com",
    "phoneNumber": "010-7890-1234",
    "address": "서울특별시 관악구",
    "registeredDate": "2024-01-10",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 18,
    "name": "박서연",
    "email": "parkseoyeon@example.com",
    "phoneNumber": "010-8901-2345",
    "address": "부산광역시 사하구",
    "registeredDate": "2024-02-15",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 19,
    "name": "박주영",
    "email": "parkjuyoung@example.com",
    "phoneNumber": "010-9012-3456",
    "address": "대구광역시 북구",
    "registeredDate": "2024-03-20",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 20,
    "name": "박준형",
    "email": "parkjunhyeong@example.com",
    "phoneNumber": "010-0123-4567",
    "address": "인천광역시 연수구",
    "registeredDate": "2024-04-25",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 21,
    "name": "방성경",
    "email": "bangseongkyeong@example.com",
    "phoneNumber": "010-1234-5678",
    "address": "경기도 용인시",
    "registeredDate": "2024-05-30",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 22,
    "name": "신원섭",
    "email": "shinwonseop@example.com",
    "phoneNumber": "010-2345-6789",
    "address": "서울특별시 서초구",
    "registeredDate": "2024-06-15",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 23,
    "name": "안찬웅",
    "email": "anchanwung@example.com",
    "phoneNumber": "010-3456-7890",
    "address": "부산광역시 기장군",
    "registeredDate": "2024-07-20",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 24,
    "name": "오선민",
    "email": "oseonmin@example.com",
    "phoneNumber": "010-4567-8901",
    "address": "대구광역시 동구",
    "registeredDate": "2024-08-25",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 25,
    "name": "유승아",
    "email": "yuseungah@example.com",
    "phoneNumber": "010-5678-9012",
    "address": "인천광역시 서구",
    "registeredDate": "2024-09-30",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 26,
    "name": "이규한",
    "email": "leegyuhan@example.com",
    "phoneNumber": "010-6789-0123",
    "address": "경기도 평택시",
    "registeredDate": "2024-10-15",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 27,
    "name": "이도이",
    "email": "leedoi@example.com",
    "phoneNumber": "010-7890-1234",
    "address": "서울특별시 강북구",
    "registeredDate": "2024-11-10",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 28,
    "name": "이명렬",
    "email": "leemyeongryeol@example.com",
    "phoneNumber": "010-8901-2345",
    "address": "부산광역시 남구",
    "registeredDate": "2024-12-05",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 29,
    "name": "이성희",
    "email": "leeseonghee@example.com",
    "phoneNumber": "010-9012-3456",
    "address": "대구광역시 달성군",
    "registeredDate": "2024-12-20",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 30,
    "name": "이현아",
    "email": "leehyeona@example.com",
    "phoneNumber": "010-0123-4567",
    "address": "서울특별시 강서구",
    "registeredDate": "2024-01-05",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 31,
    "name": "임지혁",
    "email": "imjihyeok@example.com",
    "phoneNumber": "010-1234-5678",
    "address": "경기도 의정부시",
    "registeredDate": "2024-02-10",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 32,
    "name": "정석진",
    "email": "jeongseokjin@example.com",
    "phoneNumber": "010-2345-6789",
    "address": "서울특별시 강서구",
    "registeredDate": "2024-03-15",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 33,
    "name": "정성윤",
    "email": "jeongseongyun@example.com",
    "phoneNumber": "010-3456-7890",
    "address": "부산광역시 연제구",
    "registeredDate": "2024-04-20",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 34,
    "name": "조예은",
    "email": "joeyeun@example.com",
    "phoneNumber": "010-4567-8901",
    "address": "대구광역시 중구",
    "registeredDate": "2024-05-25",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 35,
    "name": "최윤정",
    "email": "choiyunjeong@example.com",
    "phoneNumber": "010-5678-9012",
    "address": "경기도 성남시",
    "registeredDate": "2024-06-30",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 36,
    "name": "홍찬의",
    "email": "hongchanui@example.com",
    "phoneNumber": "010-6789-0123",
    "address": "서울특별시 동작구",
    "registeredDate": "2024-07-15",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  },
  {
    "id": 37,
    "name": "황순범",
    "email": "hwangsoonbeom@example.com",
    "phoneNumber": "010-7890-1234",
    "address": "부산광역시 북구",
    "registeredDate": "2024-08-20",
    "loanHistory": [],
    "currentLoans": [],
    "creditScore": getRandomCreditScore()
  }
];

const initialLoanProducts = [
  {
    // 대출 상품의 고유 식별자
    id: 1,

    // 대출 상품 이름
    name: PRODUCT_NAMES.SMALL_LOAN,

    // 기본 이자율
    interestRate: DEFAULT_INTEREST_RATES.SMALL_LOAN_RATE,

    // 최대 대출 한도
    maxLimit: DEFAULT_MAX_LIMITS.SMALL_LOAN_LIMIT,

    // 상환 기간
    repaymentPeriod: REPAYMENT_PERIODS.SMALL_LOAN_PERIOD,

    // 대출 상품의 특징
    features: [
      FEATURES.FAST_APPROVAL,
      FEATURES.MOBILE_APPLICATION,
    ],

    // 대출 신청 방법
    applicationMethods: [
      APPLICATION_METHODS.MOBILE,
      APPLICATION_METHODS.INTERNET,
    ],

    // 대출에 필요한 신용 점수
    requiredCreditScore: REQUIRED_CREDIT_SCORES.SMALL_LOAN_SCORE,

    // 대출 제공자
    provider: 'p2p 제공자' // P2P 대출 제공자
  },
  {
    id: 2,
    name: PRODUCT_NAMES.MEDIUM_LOAN,
    interestRate: DEFAULT_INTEREST_RATES.MEDIUM_LOAN_RATE,
    maxLimit: DEFAULT_MAX_LIMITS.MEDIUM_LOAN_LIMIT,
    repaymentPeriod: REPAYMENT_PERIODS.MEDIUM_LOAN_PERIOD,
    features: [
      FEATURES.QUICK_APPROVAL,
      FEATURES.COUPON_PROVIDED
    ],
    applicationMethods: [
      APPLICATION_METHODS.INTERNET
    ],
    requiredCreditScore: REQUIRED_CREDIT_SCORES.MEDIUM_LOAN_SCORE,
    provider: LOAN_PROVIDERS.BANK_B,
  },
  {
    id: 3,
    name: PRODUCT_NAMES.LARGE_LOAN,
    interestRate: DEFAULT_INTEREST_RATES.LARGE_LOAN_RATE,
    maxLimit: DEFAULT_MAX_LIMITS.LARGE_LOAN_LIMIT,
    repaymentPeriod: REPAYMENT_PERIODS.LARGE_LOAN_PERIOD,
    features: [
      FEATURES.DIRECT_TRANSACTION,
      FEATURES.NO_DOCUMENTS
    ],
    applicationMethods: [
      APPLICATION_METHODS.MOBILE,
      APPLICATION_METHODS.INTERNET
    ],
    requiredCreditScore: REQUIRED_CREDIT_SCORES.LARGE_LOAN_SCORE,
    provider: LOAN_PROVIDERS.SAVINGS_BANK_A,
  },
  {
    id: 4,
    name: PRODUCT_NAMES.EMERGENCY_LOAN,
    interestRate: DEFAULT_INTEREST_RATES.EMERGENCY_LOAN_RATE,
    maxLimit: DEFAULT_MAX_LIMITS.EMERGENCY_LOAN_LIMIT,
    repaymentPeriod: REPAYMENT_PERIODS.EMERGENCY_LOAN_PERIOD,
    features: [
      FEATURES.FAST_APPROVAL,
      FEATURES.EASY_APPLICATION
    ],
    applicationMethods: [
      APPLICATION_METHODS.MOBILE
    ],
    requiredCreditScore: REQUIRED_CREDIT_SCORES.EMERGENCY_LOAN_SCORE,
    provider: LOAN_PROVIDERS.LOAN_COMPANY_A,
  },
  {
    id: 5,
    name: PRODUCT_NAMES.URGENT_LOAN,
    interestRate: DEFAULT_INTEREST_RATES.URGENT_LOAN_RATE,
    maxLimit: DEFAULT_MAX_LIMITS.URGENT_LOAN_LIMIT,
    repaymentPeriod: REPAYMENT_PERIODS.URGENT_LOAN_PERIOD,
    features: [
      FEATURES.NO_DOCUMENTS,
      FEATURES.QUICK_APPROVAL
    ],
    applicationMethods: [
      APPLICATION_METHODS.INTERNET
    ],
    requiredCreditScore: REQUIRED_CREDIT_SCORES.URGENT_LOAN_SCORE,
    provider: LOAN_PROVIDERS.P2P_PLATFORM_A,
  },
  {
    id: 6,
    name: PRODUCT_NAMES.SMALL_LOAN,
    interestRate: DEFAULT_INTEREST_RATES.SMALL_LOAN_RATE,
    maxLimit: DEFAULT_MAX_LIMITS.SMALL_LOAN_LIMIT,
    repaymentPeriod: REPAYMENT_PERIODS.SMALL_LOAN_PERIOD,
    features: [
      FEATURES.MOBILE_APPLICATION,
      FEATURES.FAST_APPROVAL
    ],
    applicationMethods: [
      APPLICATION_METHODS.INTERNET
    ],
    requiredCreditScore: REQUIRED_CREDIT_SCORES.SMALL_LOAN_SCORE,
    provider: LOAN_PROVIDERS.CAPITAL_COMPANY_A,
  },
  {
    id: 7,
    name: PRODUCT_NAMES.MEDIUM_LOAN,
    interestRate: DEFAULT_INTEREST_RATES.MEDIUM_LOAN_RATE,
    maxLimit: DEFAULT_MAX_LIMITS.MEDIUM_LOAN_LIMIT,
    repaymentPeriod: REPAYMENT_PERIODS.MEDIUM_LOAN_PERIOD,
    features: [
      FEATURES.COUPON_PROVIDED,
      FEATURES.QUICK_APPROVAL
    ],
    applicationMethods: [
      APPLICATION_METHODS.MOBILE
    ],
    requiredCreditScore: REQUIRED_CREDIT_SCORES.MEDIUM_LOAN_SCORE,
    provider: LOAN_PROVIDERS.BANK_A,
  },
  {
    id: 8,
    name: PRODUCT_NAMES.LARGE_LOAN,
    interestRate: DEFAULT_INTEREST_RATES.LARGE_LOAN_RATE,
    maxLimit: DEFAULT_MAX_LIMITS.LARGE_LOAN_LIMIT,
    repaymentPeriod: REPAYMENT_PERIODS.LARGE_LOAN_PERIOD,
    features: [
      FEATURES.DIRECT_TRANSACTION,
      FEATURES.NO_DOCUMENTS
    ],
    applicationMethods: [
      APPLICATION_METHODS.INTERNET
    ],
    requiredCreditScore: REQUIRED_CREDIT_SCORES.LARGE_LOAN_SCORE,
    provider: LOAN_PROVIDERS.SAVINGS_BANK_A,
  },
  {
    id: 9,
    name: PRODUCT_NAMES.EMERGENCY_LOAN,
    interestRate: DEFAULT_INTEREST_RATES.EMERGENCY_LOAN_RATE,
    maxLimit: DEFAULT_MAX_LIMITS.EMERGENCY_LOAN_LIMIT,
    repaymentPeriod: REPAYMENT_PERIODS.EMERGENCY_LOAN_PERIOD,
    features: [
      FEATURES.FAST_APPROVAL,
      FEATURES.EASY_APPLICATION
    ],
    applicationMethods: [
      APPLICATION_METHODS.MOBILE
    ],
    requiredCreditScore: REQUIRED_CREDIT_SCORES.EMERGENCY_LOAN_SCORE,
    provider: LOAN_PROVIDERS.BANK_B,
  },
  {
    id: 10,
    name: PRODUCT_NAMES.URGENT_LOAN,
    interestRate: DEFAULT_INTEREST_RATES.URGENT_LOAN_RATE,
    maxLimit: DEFAULT_MAX_LIMITS.URGENT_LOAN_LIMIT,
    repaymentPeriod: REPAYMENT_PERIODS.URGENT_LOAN_PERIOD,
    features: [
      FEATURES.NO_DOCUMENTS,
      FEATURES.QUICK_APPROVAL
    ],
    applicationMethods: [
      APPLICATION_METHODS.INTERNET
    ],
    requiredCreditScore: REQUIRED_CREDIT_SCORES.URGENT_LOAN_SCORE,
    provider: LOAN_PROVIDERS.LOAN_COMPANY_A,
  }
];

const reducer = (loans, action) => {
  switch (action.type) {
    case "ADD":
      console.log("Log3 >>", action.newLoan)
      return [...loans, action.newLoan];
  }

}
function App() {
  const [loans, Dispatch] = useReducer(reducer, initialLoanProducts);

  // 새로운 대출 상품 객체를 추가하는 함수
  function addNewLoanProduct(id, name, interestRate, maxLimit, repaymentPeriod, features, applicationMethods, requiredCreditScore, provider) {
    // 새로운 대출 상품 객체 생성
    const newLoanProduct = {
      id, // 대출 상품의 고유 식별자
      name, // 대출 상품 이름
      interestRate, // 기본 이자율
      maxLimit, // 최대 대출 한도
      repaymentPeriod, // 상환 기간
      features, // 대출 상품의 특징 배열
      applicationMethods, // 대출 신청 방법 배열
      requiredCreditScore, // 대출에 필요한 신용 점수
      provider // 대출 제공자
    };

    // 새로운 대출 상품 객체를 배열에 추가
    newLoanProduct.push(newLoanProduct);
  }

  return (
    <>
      <Router>
        <HeaderNav />  
        <section>
          <LoanContext.Provider value={loans}>
            <LoanDispatchContext.Provider value={Dispatch}>
              {/* <MainPage/> */}
              {/* <LoanList/> */}
              <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/job-type" element={<JobType />} />
          <Route path="/collateral" element={<Collateral />} />
          <Route path="/car-number" element={<CarNumber />} />
          <Route path="/home-address" element={<HomeAddress />} />
          <Route path="/income" element={<Income />} />
          <Route path="/want-loan" element={<Wantloan userData={userData} />} />
                <Route path="/LoanList" element={<LoanList />} />
              </Routes>
            </LoanDispatchContext.Provider>
          </LoanContext.Provider>
        </section>
      </Router>
    </>
  )
}


export default App;