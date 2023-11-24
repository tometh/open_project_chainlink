import { useState } from 'react';
import { IoEyeSharp } from 'react-icons/io5';
import ViewFunctionModal from './modals/ViewFunctionModal';

const functionID = 'Tnfsk34rdfj0';

const RegisteredFunctionsTable = ({
  functionId,
  admin,
  caller,
  functionState,
  topUpToken,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <tr className=" text-center">
        <td className=" px-4 py-2">CI/D</td>
        <td className=" px-4 py-2">
          <span className="text-[#388ee4] underline">{functionID}</span>
        </td>
        <td className=" px-4 py-2 flex justify-center">
          <button className="flex items-center justify-center border-[#388ee469] border p-2 text-[#116ECB]">
            <p
              className="font-bold cursor-pointer uppercase"
              onClick={toggleModal}
            >
              View
            </p>
            <IoEyeSharp className="ml-1 text-[#116ECB]" />
          </button>{' '}
        </td>
        <td className=" px-4 py-2">---</td>
      </tr>

      <ViewFunctionModal
        openModal={openModal}
        handleOnClose={closeModal}
        functionID={functionID}
      />
    </>
  );
};

export default RegisteredFunctionsTable;
