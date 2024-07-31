import React, { useState } from 'react';
import './authentication.css';

const AuthenticationForm = () => {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIdNumberChange = (e) => {
    setIdNumber(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <section className="authentication-section">
      <form autoComplete="off">
        <h1 className="form-heading">
          <strong>최저금리를 조회하기 위해 <br />
          본인 인증이 필요해요</strong>
        </h1>
        <br />
        <p className="form-description">
          안심하세요. 입력한 정보는 본인 인증에만 사용돼요.
        </p>
        <div className="spacer-large"></div>
        <div className="form-group">
          <div className="input-field-wrapper">
            <input
              id="name"
              className="input-field transparent-placeholder"
              placeholder="이름"
              value={name}
              onChange={handleNameChange}
            />
            <input
              id="id-number"
              className="input-field transparent-placeholder"
              placeholder="주민등록번호"
              value={idNumber}
              onChange={handleIdNumberChange}
            />
            <input
              id="phone-number"
              className="input-field transparent-placeholder"
              placeholder="휴대폰번호"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>
        <div className="spacer-medium">
          <input
            type="button"
            className="input-button"
            value="SKT"
            onClick={() => handleButtonClick('SKT')}
          />
          <input
            type="button"
            className="input-button"
            value="LGU+"
            onClick={() => handleButtonClick('LGU+')}
          />
          <input
            type="button"
            className="input-button"
            value="KT"
            onClick={() => handleButtonClick('KT')}
          />
          <br/>
          <input
            type="button"
            className="input-button"
            value="SKT 알뜰폰"
            onClick={() => handleButtonClick('SKT 알뜰폰')}
          />
          <input
            type="button"
            className="input-button"
            value="LGU+알뜰폰"
            onClick={() => handleButtonClick('LGU+알뜰폰')}
          />
          <input
            type="button"
            className="input-button"
            value="KT 알뜰폰"
            onClick={() => handleButtonClick('KT 알뜰폰')}
          />
        </div>
      </form>
    </section>
  );
};

export default AuthenticationForm;