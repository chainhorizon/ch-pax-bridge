"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Implementation4__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        stateMutability: "nonpayable",
        type: "fallback",
    },
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
const _bytecode = "0x608060405234801561001057600080fd5b5061017a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632096525514610047578063552410771461005c5780638129fc1c14610071575b60018055005b60015460405190815260200160405180910390f35b61006f61006a36600461012b565b600155565b005b61006f600054610100900460ff168061008d575060005460ff16155b6100f45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff16158015610116576000805461ffff19166101011790555b8015610128576000805461ff00191690555b50565b60006020828403121561013d57600080fd5b503591905056fea2646970667358221220a4b7142eb78d00d4ec00c9ecbf33e4f37e492cc503ad7b85327dba2f21a5055c64736f6c634300080a0033";
class Implementation4__factory extends ethers_1.ContractFactory {
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
exports.Implementation4__factory = Implementation4__factory;
Implementation4__factory.bytecode = _bytecode;
Implementation4__factory.abi = _abi;
//# sourceMappingURL=Implementation4__factory.js.map