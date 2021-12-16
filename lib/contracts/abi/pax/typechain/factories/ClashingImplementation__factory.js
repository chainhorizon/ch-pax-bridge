"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClashingImplementation__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "admin",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "delegatedFunction",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
];
const _bytecode = "0x6080604052348015600f57600080fd5b5060928061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063abf8e0e7146037578063f851a44014604b575b600080fd5b604051600181526020015b60405180910390f35b60405163111111428152602001604256fea26469706673582212200e28695350c4fb030f925540e85b29c92191448b1df9d1eee79ec7c1ff0ffd8564736f6c634300080a0033";
class ClashingImplementation__factory extends ethers_1.ContractFactory {
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
exports.ClashingImplementation__factory = ClashingImplementation__factory;
ClashingImplementation__factory.bytecode = _bytecode;
ClashingImplementation__factory.abi = _abi;
//# sourceMappingURL=ClashingImplementation__factory.js.map