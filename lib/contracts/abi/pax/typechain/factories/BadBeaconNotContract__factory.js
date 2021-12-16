"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadBeaconNotContract__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "implementation",
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
];
const _bytecode = "0x6080604052348015600f57600080fd5b50607780601d6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80635c60da1b14602d575b600080fd5b604080516001815290519081900360200190f3fea2646970667358221220305f1a2c12d4d105bcdc1db0de3a4052a71a1f765aaaae2818f9a8730bb3b29764736f6c634300080a0033";
class BadBeaconNotContract__factory extends ethers_1.ContractFactory {
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
exports.BadBeaconNotContract__factory = BadBeaconNotContract__factory;
BadBeaconNotContract__factory.bytecode = _bytecode;
BadBeaconNotContract__factory.abi = _abi;
//# sourceMappingURL=BadBeaconNotContract__factory.js.map