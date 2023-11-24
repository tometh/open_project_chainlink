import { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdAppRegistration } from 'react-icons/md';
import TokenSelect from './TokenSelect';
import { ethers } from 'ethers';
import { deployedAddresses } from '@/constants';
import FunctionsKit from 'functions-kit';
import { AiOutlinePlus } from 'react-icons/ai';

const tokenType = 'ETH';

const functionKit = new FunctionsKit({
  rpcUrl: process.env.NEXT_PUBLIC_ALCHEMY_URL,
  funcClientAddress: deployedAddresses.FuncClient,
  funcRegAddress: deployedAddresses.FuncReg,
  payMasterAddress: deployedAddresses.PayMaster,
});

const RegisterFunctionsAutomationForm = () => {
  const [sourceFile, setSourceFile] = useState('');
  const [argument, setArgument] = useState('');
  const [interval, setInterval] = useState(0);

  const [returnType, setReturnType] = useState('');
  const [secret, setSecret] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [dynamicInputs, setDynamicInputs] = useState(['']);

  const addInput = () => {
    setDynamicInputs([...dynamicInputs, '']);
  };

  const handleChange = (e, index) => {
    const newInputs = [...dynamicInputs];
    newInputs[index] = e.target.value;
    setDynamicInputs(newInputs);
  };

  const handleArgumentChange = (event) => {
    setArgument(event.target.value);
  };

  const handleReturnTypeChange = (event) => {
    setReturnType(event.target.value);
  };

  const handleSecretChange = (event) => {
    setSecret(event.target.value);
  };

  const handleSourceFileChange = (event) => {
    setSourceFile(event.target.value);
  };

  const convertToSeconds = () => {
    const totalSeconds = hours * 3600 + minutes * 60 + parseInt(seconds);
    console.log('Total seconds:', totalSeconds);
    setInterval(totalSeconds);
  };

  const registerAutoFunction = async (e) => {
    try {
      e.preventDefault();

      convertToSeconds();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(
        signer,
        tokenType,
        sourceFile,
        argument,
        secret,
        interval,
        returnType
      );

      const registerFunction = await functionKit.registerAutoFunction(
        signer,
        tokenType,
        sourceFile,
        argument,
        secret,
        interval,
        returnType
      );
      return registerFunction;
    } catch (error) {
      console.log(e.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      secret.trim() === '' ||
      targetContract.trim() === '' ||
      adminAddress.trim() === '' ||
      sourceFile === null ||
      configFile === null
    ) {
      setIsFormValid(false);
      return;
    }

    // Form is valid, perform submission logic here
    setIsFormValid(true);

    // Reset form fields
    setTargetContract('');
    setSecret('');
    setAdminAddress('');
    setSourceFile(null);
    setConfigFile(null);
  };

  return (
    <>
      <div className="ml-20">
        <h1 className="font-bold text-lg uppercase">
          Register Functions With Automation
        </h1>
        <p className="text-md font-semibold">
          To register and use Chainlink functions in your smart contracts, fill
          in these details.
        </p>
      </div>
      <div className="flex justify-start ml-20 mt-8">
        <form
          className="w-[600px] h-full p-6 bg-white rounded shadow-md py-20 mb-20"
          onSubmit={registerAutoFunction}
        >
          <div className="mb-4 flex items-center">
            <label
              htmlFor="targetContract"
              className="block text-gray-700 font-bold mb-2 w-full"
            >
              Source File:
            </label>
            <input
              type="text"
              id="targetContract"
              value={sourceFile}
              onChange={handleSourceFileChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 flex items-center mt-8">
            <label className="block">
              <span className="text-gray-700">Label</span>
              {dynamicInputs.map((input, index) => (
                <input
                  key={index}
                  type="text"
                  value={input}
                  onChange={(e) => handleChange(e, index)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              ))}
            </label>
            <button
              type="button"
              onClick={addInput}
              className="flex items-center justify-center w-10 h-10 bg-blue-500  rounded-full focus:outline-none"
            >
              <AiOutlinePlus />
            </button>
          </div>

          <div className="mb-4 flex items-center mt-8">
            <label
              htmlFor="functionName"
              className="block text-gray-700 font-bold mb-2 w-full"
            >
              Secret:
            </label>
            <input
              type="text"
              id="secret"
              value={secret}
              onChange={handleSecretChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 mt-8 flex items-center">
            <label
              htmlFor="adminAddress"
              className="block text-gray-700 font-bold mb-2 w-full"
            >
              Interval:
            </label>

            {/* duration start */}

            <div className="flex items-center overflow-hidden">
              <div className="">
                <label htmlFor="hours" className="mr-2">
                  Hours:
                </label>
                <input
                  type="number"
                  id="hours"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  className="border border-gray-300 p-1 w-[60px]"
                />
              </div>
              <div className="">
                <label htmlFor="minutes" className="mr-2">
                  Minutes:
                </label>
                <input
                  type="number"
                  id="minutes"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                  className="border border-gray-300 p-1 w-[60px]"
                />
              </div>
              <div className="">
                <label htmlFor="seconds" className="mr-2">
                  Seconds:
                </label>
                <input
                  type="number"
                  id="seconds"
                  value={seconds}
                  onChange={(e) => setSeconds(e.target.value)}
                  className="border border-gray-300 p-1 w-[60px]"
                />
              </div>
            </div>

            {/* duration end */}
          </div>

          <div className="mb-4 mt-8 flex items-center">
            <label
              htmlFor="functionName"
              className="block text-gray-700 font-bold mb-2 w-[300px] mr-3"
            >
              Top up Token:
            </label>
            <TokenSelect />
          </div>

          <div className="mb-4 mt-8 flex items-center justify gap-[150px]">
            <label
              htmlFor="adminAddress"
              className="block text-gray-700 font-bold mb-2 w-full"
            >
              Return Type:
            </label>
            <input
              type="text"
              id="adminAddress"
              value={returnType}
              onChange={handleReturnTypeChange}
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

export default RegisterFunctionsAutomationForm;
