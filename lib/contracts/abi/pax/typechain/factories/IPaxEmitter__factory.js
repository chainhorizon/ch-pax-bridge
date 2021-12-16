"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPaxEmitter__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "allocPoint",
                type: "uint256",
            },
        ],
        name: "Add",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "allocPoint",
                type: "uint256",
            },
        ],
        name: "Set",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "emissionPerBlock",
                type: "uint256",
            },
        ],
        name: "SetEmissionPerBlock",
        type: "event",
    },
    {
        inputs: [],
        name: "emissionPerBlock",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "pax",
        outputs: [
            {
                internalType: "contract IPax",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
        ],
        name: "pendingPax",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "poolCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
        ],
        name: "poolInfo",
        outputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "allocPoint",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "lastEmitBlock",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "started",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalAllocPoint",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "pid",
                type: "uint256",
            },
        ],
        name: "updatePool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class IPaxEmitter__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IPaxEmitter__factory = IPaxEmitter__factory;
IPaxEmitter__factory.abi = _abi;
//# sourceMappingURL=IPaxEmitter__factory.js.map