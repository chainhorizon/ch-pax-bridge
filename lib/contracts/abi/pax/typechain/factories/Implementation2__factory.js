"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Implementation2__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "getValue",
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
const _bytecode = "0x608060405234801561001057600080fd5b50610179806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632096525514610046578063552410771461005b5780638129fc1c14610070575b600080fd5b60015460405190815260200160405180910390f35b61006e61006936600461012a565b600155565b005b61006e600054610100900460ff168061008c575060005460ff16155b6100f35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff16158015610115576000805461ffff19166101011790555b8015610127576000805461ff00191690555b50565b60006020828403121561013c57600080fd5b503591905056fea2646970667358221220b788f0ea6bd776b6bc91ddce28ff8acd84c6b4d394b6d37ba5303a63594b8e3f64736f6c634300080a0033";
class Implementation2__factory extends ethers_1.ContractFactory {
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
exports.Implementation2__factory = Implementation2__factory;
Implementation2__factory.bytecode = _bytecode;
Implementation2__factory.abi = _abi;
//# sourceMappingURL=Implementation2__factory.js.map