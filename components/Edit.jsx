import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdAppRegistration, MdModeEditOutline } from 'react-icons/md';
import { FiPlay, FiPause, FiStopCircle } from 'react-icons/fi';

const EditComponent = () => {
  const [functionName, setFunctionName] = useState('');
  const [targetContract, setTargetContract] = useState('');
  const [adminAddress, setAdminAddress] = useState('');
  const [sourceFile, setSourceFile] = useState(null);
  const [configFile, setConfigFile] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFunctionNameChange = (event) => {
    setFunctionName(event.target.value);
  };

  const handleTargetContractChange = (event) => {
    setTargetContract(event.target.value);
  };

  const handleAdminAddressChange = (event) => {
    setAdminAddress(event.target.value);
  };

  const handleSourceFileChange = (event) => {
    const selectedFileName = document.getElementById('selectedFileName');
    if (selectedFileName) {
      if (event.target.files.length > 0) {
        selectedFileName.textContent = event.target.files[0].name;
      } else {
        selectedFileName.textContent = 'Choose File';
      }
    }
    setSourceFile(event.target.files[0]);
  };

  const handleConfigFileChange = (event) => {
    setConfigFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (
      functionName.trim() === '' ||
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
    setFunctionName('');
    setTargetContract('');
    setAdminAddress('');
    setSourceFile(null);
    setConfigFile(null);
  };

  return (
    <div className="ml-16 mt-6">
      <div>
        <h1 className="font-bold text-lg uppercase">EDIT FUNCTION</h1>
        <p className="text-md font-semibold">
          Change and update details of your registered Chainlink function.
        </p>
      </div>

      <div className="w-[400px] h-[200px] bg-[#388ee41a] p-8 mt-8">
        <h1 className="font-bold">(*FUNCTION NAME*)</h1>

        <div className="flex justify-between mt-3">
          <h1 className="font-bold">C/ID:</h1>
          <p>0x00jPgFF1zxPgFtR3.....</p>
        </div>
        <div className="flex justify-between mt-3">
          <h1 className="font-bold">Request ID:</h1>
          <p>0x00jPgFF1zxPgFtR3.....</p>
        </div>
        <div className="flex gap-[125px] mt-3">
          <h1 className="font-bold">Status:</h1>
          <p className=" font-bold flex items-center gap-2">
            <span className="text-green-500">Success</span>
            <FiEdit2 />{' '}
          </p>
        </div>
      </div>
      <div className="flex justify-start  mt-8  w-full">
        <form
          className="w-[600px] h-[500px] p-6 bg-white rounded"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex items-center mt-6">
            <label
              htmlFor="functionName"
              className="block text-gray-700 font-bold mb-2 w-full"
            >
              Function Name:
            </label>
            <input
              type="text"
              id="functionName"
              value={functionName}
              onChange={handleFunctionNameChange}
              className="w-full border border-gray-300 bg-gradient-to-r from-blue-500 to-grey-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
            <span className="absolute left-[610px] top-[485px] text-blue text-xl text-blue-500">
              <MdModeEditOutline />
            </span>
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="targetContract"
              className="block text-gray-700 font-bold mb-2 w-full"
            >
              Target Contract:
            </label>
            <input
              type="text"
              id="targetContract"
              value={targetContract}
              onChange={handleTargetContractChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md bg-gradient-to-r from-blue-500 to-grey-300 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
            <span className="absolute left-[610px] top-[545px] text-blue text-xl text-blue-500">
              <MdModeEditOutline />
            </span>
          </div>
          <div className="mb-4 flex items-center">
            <label
              htmlFor="adminAddress"
              className="block text-gray-700 font-bold mb-2 w-full"
            >
              Admin Address:
            </label>
            <input
              type="text"
              id="adminAddress"
              value={adminAddress}
              onChange={handleAdminAddressChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md bg-gradient-to-r from-blue-500 to-grey-300 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
            <span className="absolute left-[610px] top-[601px] text-blue text-xl text-blue-500">
              <MdModeEditOutline />
            </span>
          </div>

          <div className="mb-4 flex items-center justify gap-[150px]">
            <h3 className="font-bold mr-4">Javascript File:</h3>
            <div className="flex flex-col items-center">
              <h3 className="mb-2 font-semibold">update your source file</h3>
              <label
                htmlFor="sourceFile"
                className="w-[150px] text-blue-500 border border-blue-500 px-1 py-2 rounded-md font-bold mr-4 cursor-pointer inline-block text-center focus:outline-none focus:ring focus:border-blue-500"
              >
                <span className="flex uppercase gap-2 items-center justify-center text-sm">
                  <FaCloudUploadAlt />
                  Source File
                </span>
                <input
                  type="file"
                  id="sourceFile"
                  accept=".js"
                  onChange={handleSourceFileChange}
                  className="hidden"
                  required
                />
              </label>
              {sourceFile && (
                <span id="selectedFileName">{sourceFile.name}</span>
              )}
            </div>
          </div>

          <div className="mb-4 flex items-center justify-end mr-[110px]">
            {/* <h3 className="font-bold mr-4">Javascript File:</h3> */}
            <div className="flex flex-col items-center">
              <h3 className="mb-2 font-semibold">update your config file</h3>
              <label
                htmlFor="configFile"
                className="w-[150px] text-blue-500 border border-blue-500 px-1 py-2 rounded-md font-bold mr-4 cursor-pointer inline-block text-center focus:outline-none focus:ring focus:border-blue-500"
              >
                <span className="flex uppercase gap-2 items-center justify-center text-sm">
                  <FaCloudUploadAlt />
                  Config File
                </span>
                <input
                  type="file"
                  id="configFile"
                  accept=".js"
                  onChange={handleConfigFileChange}
                  className="hidden"
                  required
                />
              </label>
              {configFile && (
                <span id="selectedFileName">{configFile.name}</span>
              )}
            </div>
          </div>

          <div className="mb-4 mt-12 flex items-center">
            <label
              htmlFor="actions"
              className="block text-gray-700 font-bold mb-2 w-full"
            >
              Actions:
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                className="flex items-center justify-center bg-blue-500  font-semibold py-2 px-4 rounded-l border-white focus:outline-none focus:ring focus:border-blue-500"
              >
                Play
                <FiPlay className="ml-2" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center bg-white border border-blue-500 text-blue-500 font-semibold py-2 px-4 focus:outline-none focus:ring focus:border-blue-500"
              >
                Pause
                <FiPause className="ml-2" />
              </button>
              <button
                type="button"
                className="flex items-center justify-center bg-white border border-black text-black bg-opacity-90 font-semibold py-2 px-4 rounded-r focus:outline-none focus:ring focus:border-blue-500"
              >
                Stop
                <FiStopCircle className="ml-2" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditComponent;
