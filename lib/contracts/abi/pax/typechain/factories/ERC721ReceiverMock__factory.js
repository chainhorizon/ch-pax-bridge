"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC721ReceiverMock__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "retval",
                type: "bytes4",
            },
            {
                internalType: "enum ERC721ReceiverMock.Error",
                name: "error",
                type: "uint8",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "gas",
                type: "uint256",
            },
        ],
        name: "Received",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "onERC721Received",
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
];
const _bytecode = "0x60c060405234801561001057600080fd5b506040516104d53803806104d583398101604081905261002f9161006e565b6001600160e01b0319821660805280600381111561004f5761004f6100b9565b60a0816003811115610063576100636100b9565b8152505050506100cf565b6000806040838503121561008157600080fd5b82516001600160e01b03198116811461009957600080fd5b6020840151909250600481106100ae57600080fd5b809150509250929050565b634e487b7160e01b600052602160045260246000fd5b60805160a0516103d56101006000396000818160660152818160ec015261012b015260006101b201526103d56000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004361003e36600461020b565b610060565b6040516001600160e01b0319909116815260200160405180910390f35b600060017f00000000000000000000000000000000000000000000000000000000000000006003811115610096576100966102e7565b14156100e85760405162461bcd60e51b815260206004820152601d60248201527f45524337323152656365697665724d6f636b3a20726576657274696e67000000604482015260640160405180910390fd5b60027f0000000000000000000000000000000000000000000000000000000000000000600381111561011c5761011c6102e7565b141561012757600080fd5b60037f0000000000000000000000000000000000000000000000000000000000000000600381111561015b5761015b6102e7565b141561017057600061016d81806102fd565b50505b7f28fa6e16458f9c24aa59ddd4085264573006dbe30304837873c7deafc702b038858585855a6040516101a795949392919061031f565b60405180910390a1507f0000000000000000000000000000000000000000000000000000000000000000949350505050565b80356001600160a01b03811681146101f057600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561022157600080fd5b61022a856101d9565b9350610238602086016101d9565b925060408501359150606085013567ffffffffffffffff8082111561025c57600080fd5b818701915087601f83011261027057600080fd5b813581811115610282576102826101f5565b604051601f8201601f19908116603f011681019083821181831017156102aa576102aa6101f5565b816040528281528a60208487010111156102c357600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b634e487b7160e01b600052602160045260246000fd5b60008261031a57634e487b7160e01b600052601260045260246000fd5b500490565b600060018060a01b03808816835260208188168185015286604085015260a06060850152855191508160a085015260005b8281101561036c5786810182015185820160c001528101610350565b8281111561037e57600060c084870101525b5050608083019390935250601f91909101601f19160160c00194935050505056fea2646970667358221220190dea90fc7f1bb1065083664a7733d6f1a5214d9789982f8c5dcd55aef8fe0d64736f6c634300080a0033";
class ERC721ReceiverMock__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (args.length === 1) {
            super(_abi, _bytecode, args[0]);
        }
        else {
            super(...args);
        }
    }
    deploy(retval, error, overrides) {
        return super.deploy(retval, error, overrides || {});
    }
    getDeployTransaction(retval, error, overrides) {
        return super.getDeployTransaction(retval, error, overrides || {});
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
exports.ERC721ReceiverMock__factory = ERC721ReceiverMock__factory;
ERC721ReceiverMock__factory.bytecode = _bytecode;
ERC721ReceiverMock__factory.abi = _abi;
//# sourceMappingURL=ERC721ReceiverMock__factory.js.map