"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC1820ImplementerMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "interfaceHash",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "canImplementInterfaceForAddress",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "interfaceHash",
                type: "bytes32",
            },
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "registerInterfaceForAddress",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610169806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063249cb3fa1461003b5780635536e45d14610060575b600080fd5b61004e6100493660046100f7565b61009f565b60405190815260200160405180910390f35b61009d61006e3660046100f7565b6000918252602082815260408084206001600160a01b039390931684529190529020805460ff19166001179055565b005b6000828152602081815260408083206001600160a01b038516845290915281205460ff166100ce5760006100f0565b7fa2ef4600d742022d532d4747cb3547474667d6f13804902513b2ec01c848f4b45b9392505050565b6000806040838503121561010a57600080fd5b8235915060208301356001600160a01b038116811461012857600080fd5b80915050925092905056fea264697066735822122089f0b9708198db25a27f26341734b674231b9235a86b83f86bcb79e24b64ac3564736f6c634300080a0033";
class ERC1820ImplementerMock__factory extends ethers_1.ContractFactory {
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
exports.ERC1820ImplementerMock__factory = ERC1820ImplementerMock__factory;
ERC1820ImplementerMock__factory.bytecode = _bytecode;
ERC1820ImplementerMock__factory.abi = _abi;
//# sourceMappingURL=ERC1820ImplementerMock__factory.js.map