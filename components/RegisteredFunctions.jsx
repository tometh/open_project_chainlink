import { useState, useEffect } from 'react';
import { AiFillExclamationCircle } from 'react-icons/ai';
import RegisteredFunctionsTable from './RegisteredFunctionsTable';
import { deployedAddresses } from '@/constants';
import FunctionsKit from 'functions-kit';

const id = '1';

const functionKit = new FunctionsKit({
  rpcUrl: process.env.NEXT_PUBLIC_ALCHEMY_URL,
  funcClientAddress: deployedAddresses.FuncClient,
  funcRegAddress: deployedAddresses.FuncReg,
  payMasterAddress: deployedAddresses.PayMaster,
});

const adminAddress = '0xaF93083C3c81e7070c520bfe72CD0B96FA916cd0';
const tokenType = 'ETH';

const RegisteredFunctions = () => {
  const [functionID, setFunctionID] = useState([]);

  console.log(functionKit)

  const getRegisteredFunctions = async () => {
    try {
      const functions = await functionKit.getRegFunction(id);
      setFunctionID(functions);
      console.log(functions);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getRegisteredFunctions();
  }, []);

  return (
    <div className="px-[80px]">
      <div>
        <div className="flex gap-1 items-center ml-[25px] pt-12">
          <h1 className="font-bold">Registered Functions</h1>
          <AiFillExclamationCircle className="text-blue-600" />
        </div>
        <table className="table-auto w-full mt-4">
          <thead className="text-black uppercase font-normal text-sm bg-[#388ee442]">
            <tr>
              <th className=" px-4 py-2 ">Function C/ID</th>
              <th className=" px-4 py-2 ">Request ID</th>
              <th className=" px-4 py-2 ">Edit Functions</th>
              <th className=" px-4 py-2 ">Status</th>
            </tr>
          </thead>
          <tbody>
            {functionID.map((func) => (
              <RegisteredFunctionsTable
                key={func.functionId}
                functionId={func.functionId}
                admin={func.admin}
                autoConsumer={func.autoConsumer}
                caller={func.caller}
                functionState={func.functionState}
                topUpToken={func.topUpToken}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredFunctions;
