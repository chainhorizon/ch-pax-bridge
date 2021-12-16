"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigratableMockV1__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "x",
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
];
const _bytecode = "0x608060405234801561001057600080fd5b50610177806100206000396000f3fe6080604052600436106100295760003560e01c80630c55699c1461002e578063fe4b84df14610056575b600080fd5b34801561003a57600080fd5b5061004460015481565b60405190815260200160405180910390f35b610069610064366004610128565b61006b565b005b600054610100900460ff1680610084575060005460ff16155b6100eb5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff1615801561010d576000805461ffff19166101011790555b60018290558015610124576000805461ff00191690555b5050565b60006020828403121561013a57600080fd5b503591905056fea264697066735822122005b561ec777ce43f0bba7a00fcba294b389600c7ce29dc5c1f2829114a5bc91b64736f6c634300080a0033";
class MigratableMockV1__factory extends ethers_1.ContractFactory {
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
exports.MigratableMockV1__factory = MigratableMockV1__factory;
MigratableMockV1__factory.bytecode = _bytecode;
MigratableMockV1__factory.abi = _abi;
//# sourceMappingURL=MigratableMockV1__factory.js.map