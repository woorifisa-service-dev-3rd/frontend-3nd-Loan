import React, { useState } from 'react';

const AuthenticationForm = () => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleReset = () => {
    setName('');
  };

  return (
    <section className="css-81pjps e1ai0nff0">
      <form autoComplete="off">
        <h1 className="whitespace-pre-line text-head-28 text-gray-100">
          최저금리를 조회하기 위해 본인 인증이 필요해요
        </h1>
        <p className="pt-12 text-body-15 font-medium text-gray-300">
          안심하세요. 입력한 정보는 본인 인증에만 사용돼요.
        </p>
        <div className="bg-transparent h-20"></div>
        <div className="css-8l40fo e1kuvs654">
          <div className="css-1y21tqd el4x4ao4">
            <div className="css-qzqrxl el4x4ao3">
              <input
                id="name"
                className="text-black-000 css-brz43u el4x4ao2"
                placeholder="입력하세요"
                value={name}
                onChange={handleChange}
              />
              <label htmlFor="name" className="css-570n4m e1nw50l10">이름</label>
            </div>
            <button type="button" className="css-1fgghp4 el4x4ao1" onClick={handleReset}></button>
          </div>
        </div>
        <div className="bg-transparent h-12"></div>
        {/* 추가 입력 필드가 여기에 위치합니다 */}
      </form>
    </section>
  );
};

export default AuthenticationForm;