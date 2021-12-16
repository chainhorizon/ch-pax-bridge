"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPaxSender__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "fromChain",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "sendId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "ReceiveOverHorizon",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "toChain",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "sendId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "SendOverHorizon",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "signer",
                type: "address",
            },
        ],
        name: "SetSigner",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "fromChain",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "sendId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "receiveOverHorizon",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "fromChain",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "sendId",
                type: "uint256",
            },
        ],
        name: "received",
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
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "toChain",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
        ],
        name: "sendCount",
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
                name: "toChain",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "sendOverHorizon",
        outputs: [
            {
                internalType: "uint256",
                name: "sendId",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "toChain",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "receiver",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "sendId",
                type: "uint256",
            },
        ],
        name: "sended",
        outputs: [
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "signer",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
class IPaxSender__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IPaxSender__factory = IPaxSender__factory;
IPaxSender__factory.abi = _abi;
//# sourceMappingURL=IPaxSender__factory.js.map