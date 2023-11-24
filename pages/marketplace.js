import React from 'react';
import Navbar from '@/components/Navbar';
import FunctionsMarketplace from '@/components/FunctionsMarketplace';

const marketplace = () => {
  return (
    <div className="bg-[#388ee41a] h-full">
      <div className="bg-white">
        <Navbar />
      </div>
      <div>
        <FunctionsMarketplace />
      </div>
    </div>
  );
};

export default marketplace;
