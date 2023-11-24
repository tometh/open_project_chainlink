import React from 'react';

const HistoryTable = ({ functionId, caller, functionState }) => {
  const shortenAddress = (address) => {
    const start = address.substring(0, 6);
    const end = address.substring(address.length - 4);
    return `${start}...${end}`;
  };

  const shortenedCaller = shortenAddress(caller);

  return (
    <>
      <tr className="text-gray-500 text-center">
        <td className="px-4 py-2">CI/D</td>
        <td className="px-4 py-2">{functionId}</td>
        <td className="px-4 py-2">{shortenedCaller}</td>
        <td className="px-4 py-2">---</td>
        <td className="px-4 py-2">
          <span className="capitalize">{functionState}</span>
        </td>
      </tr>
    </>
  );
};

export default HistoryTable;
