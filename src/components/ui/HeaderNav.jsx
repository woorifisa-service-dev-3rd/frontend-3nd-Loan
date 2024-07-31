import React from 'react';

export default function HeaderNav() {
  return (
    <header className="bg-white shadow-md h-16 flex items-center px-4">
      <div className="flex items-center w-full max-w-screen-xl mx-auto">
        {/* Left-aligned items */}
        <div className="flex items-center space-x-4">
          <button type="button" className="md:hidden p-2 rounded-full text-gray-500 hover:text-gray-700">
            <i aria-hidden="true" className="mdi mdi-menu text-2xl"></i>
          </button>
          <a href="/" className="flex items-center">
            <img src="/imsilogo.jpeg" alt="Nenoe logo" className="h-8" />
          </a>
        </div>

        {/* Center-aligned items */}
        <div className="flex-grow flex justify-center space-x-4 hidden md:flex">
          <a href="/invest" className="text-gray-700 hover:text-gray-900">투자하기</a>
          <a href="https://bit.ly/2ZpfNx4" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
          대출받기</a>
          
        </div>

        {/* Right-aligned items */}
        <div className="flex items-center space-x-4 ml-auto">
          <a href="/notice" className="hidden md:block text-gray-700 hover:text-gray-900">공지사항</a>
          <a href="/signup" className="hidden md:block text-gray-700 hover:text-gray-900">회원가입</a>
          <button type="button" className="hidden md:block p-2 rounded-full text-gray-500 hover:text-gray-700">
            로그인
          </button>
        </div>
      </div>
    </header>
  );
}
