"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC165Mock__factory = void 0;
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
const _bytecode = "0x608060405234801561001057600080fd5b5060c78061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806301ffc9a714602d575b600080fd5b604e60383660046062565b6001600160e01b0319166301ffc9a760e01b1490565b604051901515815260200160405180910390f35b600060208284031215607357600080fd5b81356001600160e01b031981168114608a57600080fd5b939250505056fea26469706673582212204b1619ed801fcc1446e9ba04ea986bb08d65ae355b88d4358496ec59a37b962464736f6c634300080a0033";
class ERC165Mock__factory extends ethers_1.ContractFactory {
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
exports.ERC165Mock__factory = ERC165Mock__factory;
ERC165Mock__factory.bytecode = _bytecode;
ERC165Mock__factory.abi = _abi;
//# sourceMappingURL=ERC165Mock__factory.js.map