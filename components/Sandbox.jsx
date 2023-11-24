import React from 'react';

const SandboxContainer = () => {
  return (
    <div className="ml-20">
      <h1 className="font-bold text-lg uppercase">Sandbox</h1>
      <p className="text-md font-semibold">
        View simulated result when using Chainlink functions.
      </p>

      <div className="bg-white mt-8 h-[500px] w-[600px] flex justify-center items-center pb-20">
        <div className="bg-[#d9d9d933] w-[300px] h-[300px] text-center">
          <p className="mt-8 ml-[15px] text-gray-400">
            view of the simulated result
          </p>
        </div>
      </div>
    </div>
  );
};

export default SandboxContainer;
