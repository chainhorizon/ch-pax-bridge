"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleHuman__factory = void 0;
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
        inputs: [],
        name: "isHuman",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b5061016a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634a6c9db61461003b5780638129fc1c14610062575b600080fd5b60005461004e9062010000900460ff1681565b604051901515815260200160405180910390f35b61006a61006c565b005b600054610100900460ff1680610085575060005460ff16155b6100ec5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff1615801561010e576000805461ffff19166101011790555b6000805462ff00001916620100001790558015610131576000805461ff00191690555b5056fea2646970667358221220fa4d7352661c63d234d485f198566f19d9ca2eba241057a075c88680a3ac760a64736f6c634300080a0033";
class SampleHuman__factory extends ethers_1.ContractFactory {
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
exports.SampleHuman__factory = SampleHuman__factory;
SampleHuman__factory.bytecode = _bytecode;
SampleHuman__factory.abi = _abi;
//# sourceMappingURL=SampleHuman__factory.js.map