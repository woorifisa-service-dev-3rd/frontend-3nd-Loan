import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './wantloan.css';

const Wantloan = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/LoanList');
  }, [navigate]);

  return (
    <div>
    </div>
  );
};

export default Wantloan;