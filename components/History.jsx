import { useState, useEffect } from 'react';
import HistoryTable from './HistoryTable';
import { deployedAddresses } from '@/constants';
import FunctionsKit from 'functions-kit';

const functionKit = new FunctionsKit({
  rpcUrl: process.env.NEXT_PUBLIC_ALCHEMY_URL,
  funcClientAddress: deployedAddresses.FuncClient,
  funcRegAddress: deployedAddresses.FuncReg,
  payMasterAddress: deployedAddresses.PayMaster,
});

const adminAddress = '0xaF93083C3c81e7070c520bfe72CD0B96FA916cd0';
const tokenType = 'ETH';

const History = () => {
  const [functionID, setFunctionID] = useState([]);

  const getAdminFunctions = async () => {
    try {
      const functions = await functionKit.getAdminFunctions(adminAddress);

      setFunctionID(functions);
      console.log(functions);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getAdminFunctions();
  }, []);

  return (
    <div className="px-[100px]">
      <div>
        <h1 className="font-bold mt-10">History</h1>
        <table className="table-auto w-full mt-4">
          <thead className=" uppercase font-normal text-sm bg-[#ffffff26]">
            <tr>
              <th className=" px-4 py-2 ">Function C/ID</th>
              <th className=" px-4 py-2 ">Request ID</th>
              <th className=" px-4 py-2 ">Target Contract</th>
              <th className=" px-4 py-2 ">Date</th>
              <th className=" px-4 py-2 ">Status</th>
            </tr>
          </thead>
          <tbody>
            {functionID.map((func) => (
              <HistoryTable
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

export default History;
