import FunctionsKit from 'functions-kit';
import { ethers } from 'ethers';

const addresses = {
  FunctionConsumer: '0x7C70c7412dc99F5040CA2A01a48DB82Fa0d3D073',
  PayMaster: '0xe9C82e8a953DBff1882701f39F233bB13eF4Afda',
  FuncReg: '0x93AE40312412bc88322B440ceDd0eB1026Bf319',
  FuncClient: '0x09ed74E9F18b1AB61B38fA17DF6F107D1702fEC5',
};

const rpcUrl = process.env.NEXT_PUBLIC_ALCHEMY_URL;
const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;

const functionKit = new FunctionsKit({
  rpcUrl: rpcUrl,
  funcClientAddress: addresses.FuncClient,
  funcRegAddress: addresses.FuncReg,
  payMasterAddress: addresses.PayMaster,
});

export const getAdminBalance = async (adminAddress, tokenType) => {
  try {
    const balance = await functionKit.getAdminBalance(adminAddress, tokenType);
    return balance;
  } catch (e) {
    console.log(e.message);
  }
};

const registerAutoFunction = async (
  source,
  args,
  interval,
  tokenType,
  returnType
) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(PRIVATE_KEY);

    //Signer can be gotten from metamask if SDK is implemented in a web app
    const signer = wallet.connect(provider);

    const functionId = await functionKit.registerAutoFunction(
      signer,
      tokenType,
      source,
      args,
      secret,
      interval,
      returnType
    );
    return functionId;
  } catch (e) {
    console.log(e.message);
  }
};

const registerDefaultFunction = async (caller, tokenType, returnType) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(PRIVATE_KEY);

    //Signer can be gotten from metamask if SDK is implemented in a web app
    const signer = wallet.connect(provider);

    const functionId = await functionKit.registerFunction(
      signer,
      caller,
      tokenType,
      returnType
    );
    return functionId;
  } catch (e) {
    console.log(e.message);
  }
};

const changeFunctionStage = async (functionId) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(PRIVATE_KEY);

    //Signer can be gotten from metamask if SDK is implemented in a web app
    const signer = wallet.connect(provider);

    toogleFunctionState = await functionKit.toogleFunctionState(signer, 1);
  } catch (e) {
    console.log(e.message);
  }
};

const makeRequest = async (source, args, functionId, secret) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(PRIVATE_KEY);

    //Signer can be gotten from metamask if SDK is implemented in a web app
    const signer = wallet.connect(provider);

    const request = await functionKit.makeRequest(
      signer,
      functionId,
      source,
      args,
      secret
    );
    return request;
  } catch (e) {
    console.log(e.message);
  }
};

export const topUpAdminBalance = async (amount, tokenType) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY);
    const signer = provider.getSigner();

    const topUp = await functionKit.topup(signer, amount, tokenType);
    return topUp;
  } catch (e) {
    console.log(e.message);
  }
};

const adminWithdraw = async (tokenType) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(PRIVATE_KEY);
    //Signer can be gotten from metamask if SDK is implemented in a web app
    const signer = wallet.connect(provider);
    const withdrawn = await functionKit.adminWithdraw(signer, tokenType);
    return withdrawn;
  } catch (e) {
    console.log(e.message);
  }
};

const deprecateFunction = async (functionId) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(PRIVATE_KEY);
    //Signer can be gotten from metamask if SDK is implemented in a web app
    const signer = wallet.connect(provider);
    const deprecatedId = await functionKit.cancelRegFunctions(
      signer,
      functionId
    );
    return deprecatedId;
  } catch (e) {
    console.log(e.message);
  }
};

const getAdminFunctions = async (adminAddress) => {
  try {
    const adminFunctions = await functionKit.getAdminFunctions(adminAddress);
    return adminFunctions;
  } catch (e) {
    console.log(e.message);
  }
};

const getRegisteredFunction = async (functionId) => {
  try {
    const functionById = await functionKit.getRegFunction(functionId);
    return functionById;
  } catch (e) {
    console.log(e.message);
  }
};

const getAllRequest = async (functionId) => {
  try {
    const allRequest = await functionKit.getAllRequest(functionId);
    return allRequest;
  } catch (e) {
    console.log(e.message);
  }
};

const getLatestRequest = async (functionId) => {
  try {
    const latestRequest = await functionKit.getLatestRequest(functionId);
    return latestRequest;
  } catch (e) {
    console.log(e.message);
  }
};

const getRequestById = async (functionId, requestId) => {
  try {
    const request = await functionKit.getRequestById(functionId, requestId);
    return request;
  } catch (e) {
    console.log(e.message);
  }
};
