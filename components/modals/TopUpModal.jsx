import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import TopUpStats from '../TopUpStats';
import FunctionsKit from 'functions-kit';
import { deployedAddresses } from '@/constants';
import { ethers } from 'ethers';

const tokens = ['ETH', 'usdt', 'dai', 'usdc', 'mat'];

const functionKit = new FunctionsKit({
  rpcUrl: process.env.NEXT_PUBLIC_ALCHEMY_URL,
  funcClientAddress: deployedAddresses.FuncClient,
  funcRegAddress: deployedAddresses.FuncReg,
  payMasterAddress: deployedAddresses.PayMaster,
});

const TopUpModal = ({ openModal, handleOnClose }) => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('ETH');
  const [topUpResult, setTopUpResult] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'topup_amount') {
      setAmount(value);
    } else if (id === 'topup_token') {
      setSelectedToken(value);
    }
  };

  const topUpAdminBalance = async (e) => {
    try {
      e.preventDefault();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const formattedAmount = ethers.utils.parseEther(amount, 'wei');

      console.log(amount, selectedToken);
      setAmount('');
      setSelectedToken('ETH');

      const topUp = await functionKit.topup(signer, amount, selectedToken);

      return topUp;
    } catch (error) {
      console.log(e.message);
    }
  };

  return (
    <Transition appear show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleOnClose}>
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="w-full h-[400px] max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-2xl font-medium leading-6 text-gray-900 text-start mt-6"
              >
                Top Up for cloud<span className="text-blue-600">beam</span>
              </Dialog.Title>

              <div className="mt-4 text-center flex items-center justify-between">
                <div>
                  <h1 className="font-bold text-start">Top Up Amount:</h1>
                  <p>Put in the amount you would like to top up.</p>
                </div>
                <form onSubmit={topUpAdminBalance}>
                  <div className="mt-10 mb-6 flex items-center  text-center">
                    <input
                      type="text"
                      id="topup_amount"
                      className="bg-[#388ee41c] border border-gray-300 text-gray-700 text-sm outline-none  focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 "
                      placeholder="Enter topup amount"
                      required
                      value={amount}
                      onChange={handleChange}
                    />
                    <div className="p-0">
                      <select
                        id="topup_token"
                        className="focus:outline-none h-[42px]  uppercase text-gray-500 bg-[#388EE4] font-bold"
                        onChange={handleChange}
                        value={selectedToken}
                      >
                        {tokens.map((option, index) => (
                          <option
                            key={index}
                            value={option}
                            className="p-2 bg-gray-800"
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600  rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              <TopUpStats />
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TopUpModal;
