import Navbar from '@/components/Navbar';
import React from 'react';
import ViewRegFunctions from '@/components/ViewRegFunctions';

const RegisteredFunctions = () => {
  return (
    <div className=" h-full">
      <div className="bg-white">
        <Navbar text1Color="#388EE4" />
      </div>
      <div>
        <ViewRegFunctions />
      </div>
    </div>
  );
};

export default RegisteredFunctions;
