import Navbar from '@/components/Navbar';
import React from 'react';
import SandboxContainer from '@/components/Sandbox';

const Sandbox = () => {
  return (
    <div className="bg-[#388ee41a] h-full">
      <div className="bg-white">
        <Navbar textColor="#388EE4" />
      </div>
      <div>
        <div className="h-screen">
          <SandboxContainer />
        </div>
      </div>
    </div>
  );
};

export default Sandbox;
