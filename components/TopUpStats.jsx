import React from 'react';

const TopUpStats = () => {
  return (
    <div className="flex justify-between mt-8 bg-[#388ee41a] p-4">
      <div className="flex items-center gap-8">
        <div>
          <h5 className="text-gray-400 text-sm">Total top up amount</h5>
          <h3 className="font-bold">1.1324 ETH</h3>
          <h5 className="text-gray-400 text-sm">($2150.27)</h5>
        </div>

        <div>
          <h5 className="text-gray-400 text-sm">Service Fee:</h5>
          <h3 className="font-bold">0.014 ETH</h3>
          <h5 className="text-gray-400 text-sm">($26.58)</h5>
        </div>
      </div>

      <div>
        <h5 className="text-gray-400 text-sm">Total:</h5>
        <h3 className="font-bold">1.1464 ETH</h3>
        <h5 className="text-gray-400 text-sm">($2176.85)</h5>
      </div>
    </div>
  );
};

export default TopUpStats;
