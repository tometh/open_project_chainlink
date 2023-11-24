import React from 'react';
import Navbar from '@/components/Navbar';
import RegisterFunctionsForm from '@/components/RegisterFunctionsForm';

const RegisterFunctions = () => {
  return (
    <div className="bg-[#388ee41a] h-full">
      <div className="bg-white">
        <Navbar textColor="#388EE4" />
      </div>
      <div>
        <RegisterFunctionsForm />
      </div>
    </div>
  );
};

export default RegisterFunctions;
