import { useState } from 'react';
import FunctionsAvailable from './FunctionsAvailable';
import Link from 'next/link';
import RegisterFunctionsModal from './modals/RegisterFunctionsModal';

const FunctionCalls = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(true);
  };

  const handleOnClose = () => {
    setShowModal(false);
  };

  return (
    <div className="border-2 p-6 w-[50%] rounded-md">
      <div className="flex justify-between items-center uppercase">
        <h3 className="font-semibold text-md">Functions Available</h3>
        {/* <Link href="/register-functions"> */}
        <span
          className="border-black rounded-md px-2 flex items-center justify-between border-[1px] p-1 text-sm cursor-pointer"
          onClick={toggleModal}
        >
          Register Functions <span className="font-bold ml-2 inline-block">+</span>
        </span>
        {/* </Link> */}
      </div>

      <div className="flex items-center justify-between mt-8 mx-[60px]">
        <div className="border-r-[1px] pr-8 flex flex-col items-center">
          <h1 className="font-bold text-xl">12</h1>
          <p className="text-gray-500">Running</p>
        </div>

        <div className="border-r-[1px] pr-8 flex flex-col items-center">
          <h1 className="font-bold text-xl">20</h1>
          <p className="text-gray-500">Unsuccessful</p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="font-bold text-xl">42</h1>
          <p className="text-gray-500">Total</p>
        </div>
      </div>
      <RegisterFunctionsModal
        openModal={showModal}
        handleOnClose={handleOnClose}
      />
    </div>
  );
};

export default FunctionCalls;
