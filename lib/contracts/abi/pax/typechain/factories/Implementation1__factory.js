"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Implementation1__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_number",
                type: "uint256",
            },
        ],
        name: "setValue",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610159806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063552410771461003b5780638129fc1c14610050575b600080fd5b61004e61004936600461010a565b600155565b005b61004e600054610100900460ff168061006c575060005460ff16155b6100d35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff161580156100f5576000805461ffff19166101011790555b8015610107576000805461ff00191690555b50565b60006020828403121561011c57600080fd5b503591905056fea26469706673582212207892b4be04086033ac6f452d6c4d2b3e1c50699ef78a1cb41ecd33e992bd276364736f6c634300080a0033";
class Implementation1__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.Implementation1__factory = Implementation1__factory;
Implementation1__factory.bytecode = _bytecode;
Implementation1__factory.abi = _abi;
//# sourceMappingURL=Implementation1__factory.js.map