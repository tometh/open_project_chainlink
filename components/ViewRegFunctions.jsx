import React from 'react';
import ViewRegFunctionsTable from './ViewRegFunctionsTable';

const ViewRegFunctions = () => {
  const rows = [
    {
      functionCID: '1',
      requestId: '123',
      targetContract: '0xabc',
      date: '2023-06-09',
      status: 'Success',
    },
    {
      functionCID: '2',
      requestId: '456',
      targetContract: '0xdef',
      date: '2023-06-08',
      status: 'Pending',
    },
    {
      functionCID: '3',
      requestId: '789',
      targetContract: '0xghi',
      date: '2023-06-07',
      status: 'Failed',
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="ml-[100px]">
        <h1 className="text-xl font-bold uppercase">Registered Functions</h1>
        <p className="text-md font-semibold mt-5">
          View function details for your previously registered Chainlink
          function.
        </p>
      </div>
      <div className="mx-20">
        <table className="table-auto w-full mt-8">
          <thead className="text-black uppercase font-normal text-sm bg-[#388ee426]">
            <tr>
              <th className="px-4 py-2">Function C/ID</th>
              <th className="px-4 py-2">Request ID</th>
              <th className="px-4 py-2">Target Contract</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>

          <ViewRegFunctionsTable />
        </table>
      </div>
    </div>
  );
};

export default ViewRegFunctions;
