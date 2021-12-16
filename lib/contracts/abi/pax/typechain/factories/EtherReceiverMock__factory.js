"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtherReceiverMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bool",
                name: "acceptEther",
                type: "bool",
            },
        ],
        name: "setAcceptEther",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5060c08061001f6000396000f3fe60806040526004361060205760003560e01c80634fea120c14603957600080fd5b3660345760005460ff16603257600080fd5b005b600080fd5b348015604457600080fd5b50603260503660046063565b6000805460ff1916911515919091179055565b600060208284031215607457600080fd5b81358015158114608357600080fd5b939250505056fea264697066735822122036398124ff4b5e3bebcdf54c34e5ca98eca746d94ace0ca50b917799b63755f664736f6c634300080a0033";
class EtherReceiverMock__factory extends ethers_1.ContractFactory {
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
exports.EtherReceiverMock__factory = EtherReceiverMock__factory;
EtherReceiverMock__factory.bytecode = _bytecode;
EtherReceiverMock__factory.abi = _abi;
//# sourceMappingURL=EtherReceiverMock__factory.js.map