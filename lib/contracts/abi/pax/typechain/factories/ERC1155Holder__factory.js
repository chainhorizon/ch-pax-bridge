"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC1155Holder__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155BatchReceived",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "onERC1155Received",
        outputs: [
            {
                internalType: "bytes4",
                name: "",
                type: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
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
const _bytecode = "0x608060405234801561001057600080fd5b506103c5806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806301ffc9a714610046578063bc197c811461006e578063f23a6e61146100a6575b600080fd5b6100596100543660046100fc565b6100c5565b60405190151581526020015b60405180910390f35b61008d61007c366004610280565b63bc197c8160e01b95945050505050565b6040516001600160e01b03199091168152602001610065565b61008d6100b436600461032a565b63f23a6e6160e01b95945050505050565b60006001600160e01b03198216630271189760e51b14806100f657506301ffc9a760e01b6001600160e01b03198316145b92915050565b60006020828403121561010e57600080fd5b81356001600160e01b03198116811461012657600080fd5b9392505050565b80356001600160a01b038116811461014457600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561018857610188610149565b604052919050565b600082601f8301126101a157600080fd5b8135602067ffffffffffffffff8211156101bd576101bd610149565b8160051b6101cc82820161015f565b92835284810182019282810190878511156101e657600080fd5b83870192505b84831015610205578235825291830191908301906101ec565b979650505050505050565b600082601f83011261022157600080fd5b813567ffffffffffffffff81111561023b5761023b610149565b61024e601f8201601f191660200161015f565b81815284602083860101111561026357600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561029857600080fd5b6102a18661012d565b94506102af6020870161012d565b9350604086013567ffffffffffffffff808211156102cc57600080fd5b6102d889838a01610190565b945060608801359150808211156102ee57600080fd5b6102fa89838a01610190565b9350608088013591508082111561031057600080fd5b5061031d88828901610210565b9150509295509295909350565b600080600080600060a0868803121561034257600080fd5b61034b8661012d565b94506103596020870161012d565b93506040860135925060608601359150608086013567ffffffffffffffff81111561038357600080fd5b61031d8882890161021056fea2646970667358221220522ad5249a90ac56b4fc24b338a8516440bf29836ccdf1e46b170699e6b0222664736f6c634300080a0033";
class ERC1155Holder__factory extends ethers_1.ContractFactory {
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
exports.ERC1155Holder__factory = ERC1155Holder__factory;
ERC1155Holder__factory.bytecode = _bytecode;
ERC1155Holder__factory.abi = _abi;
//# sourceMappingURL=ERC1155Holder__factory.js.map