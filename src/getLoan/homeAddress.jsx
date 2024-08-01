import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homeAddress.css';

const HomeAddress = () => {
    const [homeAddress, setHomeAddress] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setHomeAddress(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/collateral');
    };

    return (
        <section className="home-address">
            <br/>
            <br/>
            <h1 className="form-heading">
                <strong>집 주소를 입력하세요</strong>
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="home-address-input"
                  placeholder="집 주소"
                  value={homeAddress}
                  onChange={handleChange}
                />
                <button type="submit" className="button-link">저장</button>
            </form>
        </section>
    )
}

export default HomeAddress;