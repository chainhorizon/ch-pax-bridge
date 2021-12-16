"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC165MissingData__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x6080604052348015600f57600080fd5b5060a28061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806301ffc9a714602d575b600080fd5b603b6038366004603d565b50565b005b600060208284031215604e57600080fd5b81356001600160e01b031981168114606557600080fd5b939250505056fea2646970667358221220df79d2e7edf7e893fb5f8fe950c78d182be6490d8ed91a66786095887bdf482e64736f6c634300080a0033";
class ERC165MissingData__factory extends ethers_1.ContractFactory {
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
exports.ERC165MissingData__factory = ERC165MissingData__factory;
ERC165MissingData__factory.bytecode = _bytecode;
ERC165MissingData__factory.abi = _abi;
//# sourceMappingURL=ERC165MissingData__factory.js.map