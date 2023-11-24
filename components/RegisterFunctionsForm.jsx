import { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdAppRegistration } from 'react-icons/md';
import TokenSelect from './TokenSelect';
import { useAccount } from 'wagmi';
import { deployedAddresses } from '@/constants';
import { ethers } from 'ethers';
import FunctionsKit from 'functions-kit';

const functionKit = new FunctionsKit({
  rpcUrl: process.env.NEXT_PUBLIC_ALCHEMY_URL,
  funcClientAddress: deployedAddresses.FuncClient,
  funcRegAddress: deployedAddresses.FuncReg,
  payMasterAddress: deployedAddresses.PayMaster,
});

const tokenType = 'ETH';

const RegisterFunctionsForm = () => {
  const [response, setResponse] = useState('');
  const [sourceFile, setSourceFile] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const { address } = useAccount();

  const caller = address;

  const handleResponseChange = (event) => {
    setResponse(event.target.value);
  };

  const handleSourceFileChange = (event) => {
    setSourceFile(event.target.value);
  };

  const registerDefaultFunction = async (e) => {
    try {
      e.preventDefault();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const functionId = await functionKit.registerFunction(
        signer,
        caller,
        tokenType,
        response
      );
    } catch (error) {
      console.log(e.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (targetContract.trim() === '' || sourceFile === null) {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);

    // Reset form fields
    setTargetContract('');
    setSourceFile(null);
  };

  return (
    <>
      <div className="ml-20">
        <h1 className="font-bold text-lg uppercase">Register Functions</h1>
        <p className="text-md font-semibold">
          To register and use Chainlink functions in your smart contracts, fill
          in these details.
        </p>
      </div>
      <div className="flex justify-start ml-20 mt-8">
        <form
          className="w-[600px] h-full p-6 bg-white rounded shadow-md py-20 mb-20"
          onSubmit={registerDefaultFunction}
        >
          <div className="mb-4 flex items-center">
            <label
              htmlFor="targetContract"
              className="block text-gray-700 font-bold mb-2 w-full"
            >
              Caller:
            </label>
            <input
              type="text"
              id="targetContract"
              value={address}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 mt-8 flex items-center">
            <label
              htmlFor="functionName"
              className="block text-gray-700 font-bold mb-2 w-[310px]"
            >
              Top up Token:
            </label>
            <TokenSelect />
          </div>

          <div className="mb-4 flex items-center">
            <label
              htmlFor="targetContract"
              className="block text-gray-700 font-bold mb-2 w-full"
            >
              Response Return type:
            </label>
            <input
              type="text"
              id="targetContract"
              value={response}
              onChange={handleResponseChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          {!isFormValid && (
            <p className="text-red-500 mb-4">
              Please fill in all the required fields.
            </p>
          )}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700  font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500 uppercase flex items-center gap-2"
            >
              <MdAppRegistration />
              Register Function
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterFunctionsForm;
