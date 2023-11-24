import { useState, useEffect } from 'react';
import FunctionCalls from './FunctionCalls';
import TopUpModal from './modals/TopUpModal';
import { ethers } from 'ethers';
import { deployedAddresses } from '@/constants';
import FunctionsKit from 'functions-kit';

const functionKit = new FunctionsKit({
  rpcUrl: process.env.NEXT_PUBLIC_ALCHEMY_URL,
  funcClientAddress: deployedAddresses.FuncClient,
  funcRegAddress: deployedAddresses.FuncReg,
  payMasterAddress: deployedAddresses.PayMaster,
});

const DashboardHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [balance, setBalance] = useState('');

  const adminAddress = '0xaF93083C3c81e7070c520bfe72CD0B96FA916cd0';
  const tokenType = 'ETH';

  const getAdminBalance = async () => {
    try {
      const balance = await functionKit.getAdminBalance(
        adminAddress,
        tokenType
      );

      setBalance(balance);
      console.log(balance);
    } catch (error) {
      console.log(error.message);
    }
    // const fetchedBalance = await getAdminBalance(adminAddress, tokenType);
    // setBalance(fetchedBalance);
    // console.log(fetchedBalance);
  };

  useEffect(() => {
    getAdminBalance();
  }, []);

  const toggleModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mx-[100px]">
      <h1 className="mb-2">
        {' '}
        <span className="font-bold">(username's)</span> xfunctions
      </h1>

      <div className="flex justify-between">
        <FunctionCalls />

        <div className="border-2 rounded-md pr-[60px] pt-[20px] pb-[20px] pl-[15px] ">
          <h1 className="font-semibold text-xl">Balance</h1>
          <h2 className="mt-3 font-bold text-xl">{balance} ETH</h2>
          <p className="mt-2 uppercase">Available Balance</p>

          <div className="flex items-left gap-8 mt-4 ">
            <button className="border p-2" onClick={toggleModal}>
              Top up
            </button>
            <button className="border p-2 bg-[#ffffff26]  font-bold">
              Withdraw
            </button>
          </div>
        </div>
      </div>
      <TopUpModal openModal={showModal} handleOnClose={closeModal} />
    </div>
  );
};

export default DashboardHeader;
