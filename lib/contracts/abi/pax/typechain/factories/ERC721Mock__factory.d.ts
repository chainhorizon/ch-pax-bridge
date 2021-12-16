import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721Mock, ERC721MockInterface } from "../ERC721Mock";
export declare class ERC721Mock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721Mock>;
    getDeployTransaction(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721Mock;
    connect(signer: Signer): ERC721Mock__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200189e3803806200189e8339810160408190526200003491620001e1565b8151829082906200004d9060009060208501906200006e565b508051620000639060019060208401906200006e565b505050505062000288565b8280546200007c906200024b565b90600052602060002090601f016020900481019282620000a05760008555620000eb565b82601f10620000bb57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000eb578251825591602001919060010190620000ce565b50620000f9929150620000fd565b5090565b5b80821115620000f95760008155600101620000fe565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013c57600080fd5b81516001600160401b038082111562000159576200015962000114565b604051601f8301601f19908116603f0116810190828211818310171562000184576200018462000114565b81604052838152602092508683858801011115620001a157600080fd5b600091505b83821015620001c55785820183015181830184015290820190620001a6565b83821115620001d75760008385830101525b9695505050505050565b60008060408385031215620001f557600080fd5b82516001600160401b03808211156200020d57600080fd5b6200021b868387016200012a565b935060208501519150808211156200023257600080fd5b5062000241858286016200012a565b9150509250929050565b600181811c908216806200026057607f821691505b602082108114156200028257634e487b7160e01b600052602260045260246000fd5b50919050565b61160680620002986000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c80636352211e116100ad578063a144819411610071578063a144819414610259578063a22cb4651461026c578063b88d4fde1461027f578063c87b56dd14610292578063e985e9c5146102a557600080fd5b80636352211e146102025780636c0360eb1461021557806370a082311461021d5780638832e6e31461023e57806395d89b411461025157600080fd5b806323b872dd116100f457806323b872dd146101a357806340c10f19146101b657806342842e0e146101c957806342966c68146101dc5780634f558e79146101ef57600080fd5b806301ffc9a71461012657806306fdde031461014e578063081812fc14610163578063095ea7b31461018e575b600080fd5b6101396101343660046110a6565b6102e1565b60405190151581526020015b60405180910390f35b610156610333565b604051610145919061111b565b61017661017136600461112e565b6103c5565b6040516001600160a01b039091168152602001610145565b6101a161019c366004611163565b61045f565b005b6101a16101b136600461118d565b610575565b6101a16101c4366004611163565b6105a6565b6101a16101d736600461118d565b6105b4565b6101a16101ea36600461112e565b6105cf565b6101396101fd36600461112e565b6105db565b61017661021036600461112e565b6105fa565b610156610671565b61023061022b3660046111c9565b61068d565b604051908152602001610145565b6101a161024c366004611287565b610714565b61015661071f565b6101a1610267366004611163565b61072e565b6101a161027a3660046112de565b610738565b6101a161028d36600461131a565b610743565b6101566102a036600461112e565b61077b565b6101396102b3366004611382565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061031257506001600160e01b03198216635b5e139f60e01b145b8061032d57506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060008054610342906113b5565b80601f016020809104026020016040519081016040528092919081815260200182805461036e906113b5565b80156103bb5780601f10610390576101008083540402835291602001916103bb565b820191906000526020600020905b81548152906001019060200180831161039e57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104435760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061046a826105fa565b9050806001600160a01b0316836001600160a01b031614156104d85760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161043a565b336001600160a01b03821614806104f457506104f481336102b3565b6105665760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161043a565b6105708383610863565b505050565b61057f33826108d1565b61059b5760405162461bcd60e51b815260040161043a906113f0565b6105708383836109c8565b6105b08282610b68565b5050565b61057083838360405180602001604052806000815250610743565b6105d881610caa565b50565b6000818152600260205260408120546001600160a01b0316151561032d565b6000818152600260205260408120546001600160a01b03168061032d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161043a565b606061068860408051602081019091526000815290565b905090565b60006001600160a01b0382166106f85760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161043a565b506001600160a01b031660009081526003602052604090205490565b610570838383610d45565b606060018054610342906113b5565b6105b08282610d78565b6105b0338383610d92565b61074d33836108d1565b6107695760405162461bcd60e51b815260040161043a906113f0565b61077584848484610e61565b50505050565b6000818152600260205260409020546060906001600160a01b03166107fa5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161043a565b600061081160408051602081019091526000815290565b90506000815111610831576040518060200160405280600081525061085c565b8061083b84610e94565b60405160200161084c929190611441565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610898826105fa565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b031661094a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161043a565b6000610955836105fa565b9050806001600160a01b0316846001600160a01b031614806109905750836001600160a01b0316610985846103c5565b6001600160a01b0316145b806109c057506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166109db826105fa565b6001600160a01b031614610a435760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b606482015260840161043a565b6001600160a01b038216610aa55760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161043a565b610ab0600082610863565b6001600160a01b0383166000908152600360205260408120805460019290610ad9908490611486565b90915550506001600160a01b0382166000908152600360205260408120805460019290610b0790849061149d565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b038216610bbe5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161043a565b6000818152600260205260409020546001600160a01b031615610c235760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161043a565b6001600160a01b0382166000908152600360205260408120805460019290610c4c90849061149d565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000610cb5826105fa565b9050610cc2600083610863565b6001600160a01b0381166000908152600360205260408120805460019290610ceb908490611486565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b610d4f8383610b68565b610d5c6000848484610f92565b6105705760405162461bcd60e51b815260040161043a906114b5565b6105b0828260405180602001604052806000815250610d45565b816001600160a01b0316836001600160a01b03161415610df45760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161043a565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610e6c8484846109c8565b610e7884848484610f92565b6107755760405162461bcd60e51b815260040161043a906114b5565b606081610eb85750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610ee25780610ecc81611507565b9150610edb9050600a83611538565b9150610ebc565b60008167ffffffffffffffff811115610efd57610efd6111e4565b6040519080825280601f01601f191660200182016040528015610f27576020820181803683370190505b5090505b84156109c057610f3c600183611486565b9150610f49600a8661154c565b610f5490603061149d565b60f81b818381518110610f6957610f69611560565b60200101906001600160f81b031916908160001a905350610f8b600a86611538565b9450610f2b565b60006001600160a01b0384163b1561108557604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610fd6903390899088908890600401611576565b6020604051808303816000875af1925050508015611011575060408051601f3d908101601f1916820190925261100e918101906115b3565b60015b61106b573d80801561103f576040519150601f19603f3d011682016040523d82523d6000602084013e611044565b606091505b5080516110635760405162461bcd60e51b815260040161043a906114b5565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506109c0565b506001949350505050565b6001600160e01b0319811681146105d857600080fd5b6000602082840312156110b857600080fd5b813561085c81611090565b60005b838110156110de5781810151838201526020016110c6565b838111156107755750506000910152565b600081518084526111078160208601602086016110c3565b601f01601f19169290920160200192915050565b60208152600061085c60208301846110ef565b60006020828403121561114057600080fd5b5035919050565b80356001600160a01b038116811461115e57600080fd5b919050565b6000806040838503121561117657600080fd5b61117f83611147565b946020939093013593505050565b6000806000606084860312156111a257600080fd5b6111ab84611147565b92506111b960208501611147565b9150604084013590509250925092565b6000602082840312156111db57600080fd5b61085c82611147565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261120b57600080fd5b813567ffffffffffffffff80821115611226576112266111e4565b604051601f8301601f19908116603f0116810190828211818310171561124e5761124e6111e4565b8160405283815286602085880101111561126757600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561129c57600080fd5b6112a584611147565b925060208401359150604084013567ffffffffffffffff8111156112c857600080fd5b6112d4868287016111fa565b9150509250925092565b600080604083850312156112f157600080fd5b6112fa83611147565b91506020830135801515811461130f57600080fd5b809150509250929050565b6000806000806080858703121561133057600080fd5b61133985611147565b935061134760208601611147565b925060408501359150606085013567ffffffffffffffff81111561136a57600080fd5b611376878288016111fa565b91505092959194509250565b6000806040838503121561139557600080fd5b61139e83611147565b91506113ac60208401611147565b90509250929050565b600181811c908216806113c957607f821691505b602082108114156113ea57634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b600083516114538184602088016110c3565b8351908301906114678183602088016110c3565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561149857611498611470565b500390565b600082198211156114b0576114b0611470565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b600060001982141561151b5761151b611470565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261154757611547611522565b500490565b60008261155b5761155b611522565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906115a9908301846110ef565b9695505050505050565b6000602082840312156115c557600080fd5b815161085c8161109056fea264697066735822122037c479af4ca12715dce6d5ab637ff00f2b0ae011d5e986fb55069d39c751736664736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC721MockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721Mock;
}
//# sourceMappingURL=ERC721Mock__factory.d.ts.map