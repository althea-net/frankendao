// import Althea from 'Embark/contracts/Althea';
import React from "react";
export const Context = React.createContext();

const abi = [
  {
    constant: true,
    inputs: [{ name: "_ip", type: "bytes16" }],
    name: "getMember",
    outputs: [{ name: "addr", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x376679b0"
  },
  {
    constant: true,
    inputs: [],
    name: "getCountOfSubscribers",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x3b8bd013"
  },
  {
    constant: true,
    inputs: [],
    name: "perBlockFee",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x50e34717"
  },
  {
    constant: true,
    inputs: [],
    name: "wallet",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x521eb273"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "billMapping",
    outputs: [
      { name: "balance", type: "uint256" },
      { name: "perBlock", type: "uint256" },
      { name: "lastUpdated", type: "uint256" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x6bcbf58a"
  },
  {
    constant: false,
    inputs: [],
    name: "payMyBills",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x7f0dc238"
  },
  {
    constant: false,
    inputs: [
      { name: "_ethAddr", type: "address" },
      { name: "_ip", type: "bytes16" },
      { name: "_nick", type: "bytes16" }
    ],
    name: "addMember",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x841ee3f0"
  },
  {
    constant: false,
    inputs: [{ name: "_subscriber", type: "address" }],
    name: "addBill",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
    signature: "0x962e9972"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "bytes16" }],
    name: "userMapping",
    outputs: [
      { name: "ethAddr", type: "address" },
      { name: "nick", type: "bytes16" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xa41557c6"
  },
  {
    constant: false,
    inputs: [],
    name: "addBill",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
    signature: "0xa4db47ef"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "subnetSubscribers",
    outputs: [{ name: "", type: "bytes16" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xad8073e3"
  },
  {
    constant: false,
    inputs: [],
    name: "collectBills",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xbc852c40"
  },
  {
    constant: false,
    inputs: [{ name: "_ip", type: "bytes16" }],
    name: "deleteMember",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xdb8c13e3"
  },
  {
    constant: false,
    inputs: [],
    name: "withdrawFromBill",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xef5001fe"
  },
  {
    constant: false,
    inputs: [{ name: "_newFee", type: "uint256" }],
    name: "setPerBlockFee",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xfbeff137"
  },
  {
    inputs: [{ name: "_wallet", type: "address" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  { payable: true, stateMutability: "payable", type: "fallback" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "ethAddress", type: "address" },
      { indexed: false, name: "ipAddress", type: "bytes16" },
      { indexed: false, name: "nickname", type: "bytes16" }
    ],
    name: "NewMember",
    type: "event",
    signature:
      "0xe57f5784e78b1736f101d6f3bc8c6872a5f459f075ec7d57f43eff44b5dcfd38"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "ethAddress", type: "address" },
      { indexed: false, name: "ipAddress", type: "bytes16" },
      { indexed: false, name: "nickname", type: "bytes16" }
    ],
    name: "MemberRemoved",
    type: "event",
    signature:
      "0x3fa707f0a1b643f48caf25a10ef749f570de0f6ad6645179168ba127eebb0dd7"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "payer", type: "address" },
      { indexed: false, name: "collector", type: "address" }
    ],
    name: "NewBill",
    type: "event",
    signature:
      "0xed553a58c1e3ebde0827bcbf800a42dd39790c2b44ac7e0cda649b027cebd5f9"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "payer", type: "address" }],
    name: "BillUpdated",
    type: "event",
    signature:
      "0x7d89b3c7d3be1f4bff77e84ddba0d3f104bf9ea3086a1e71fd7d0a84e4a0eaf4"
  }
];

const ethers = window.ethers;
let provider = new ethers.providers.JsonRpcProvider();
let contractAddress = "0x15978B376de73fE5D819f4BDE03a10A682128458";
let pk = "86DE2CF259BF21A9AA2B8CF78F89ED479681001CA320C5762BB3237DB65445CB";
let wallet = new ethers.Wallet(pk, provider);
window.wallet = wallet;
let althea = new ethers.Contract(contractAddress, abi, wallet);
window.althea = althea;

export default althea;
