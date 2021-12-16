import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721PausableMock, ERC721PausableMockInterface } from "../ERC721PausableMock";
export declare class ERC721PausableMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721PausableMock>;
    getDeployTransaction(name: string, symbol: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721PausableMock;
    connect(signer: Signer): ERC721PausableMock__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162001a6038038062001a608339810160408190526200003491620001ec565b8151829082906200004d90600090602085019062000079565b5080516200006390600190602084019062000079565b50506006805460ff191690555062000293915050565b828054620000879062000256565b90600052602060002090601f016020900481019282620000ab5760008555620000f6565b82601f10620000c657805160ff1916838001178555620000f6565b82800160010185558215620000f6579182015b82811115620000f6578251825591602001919060010190620000d9565b506200010492915062000108565b5090565b5b8082111562000104576000815560010162000109565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200014757600080fd5b81516001600160401b03808211156200016457620001646200011f565b604051601f8301601f19908116603f011681019082821181831017156200018f576200018f6200011f565b81604052838152602092508683858801011115620001ac57600080fd5b600091505b83821015620001d05785820183015181830184015290820190620001b1565b83821115620001e25760008385830101525b9695505050505050565b600080604083850312156200020057600080fd5b82516001600160401b03808211156200021857600080fd5b620002268683870162000135565b935060208501519150808211156200023d57600080fd5b506200024c8582860162000135565b9150509250929050565b600181811c908216806200026b57607f821691505b602082108114156200028d57634e487b7160e01b600052602260045260246000fd5b50919050565b6117bd80620002a36000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80635c975abb116100b857806395d89b411161007c57806395d89b411461027a578063a144819414610282578063a22cb46514610295578063b88d4fde146102a8578063c87b56dd146102bb578063e985e9c5146102ce57600080fd5b80635c975abb146102205780636352211e1461022b57806370a082311461023e5780638456cb591461025f5780638832e6e31461026757600080fd5b80633f4ba83a116100ff5780633f4ba83a146101cc57806340c10f19146101d457806342842e0e146101e757806342966c68146101fa5780634f558e791461020d57600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a457806323b872dd146101b9575b600080fd5b61014f61014a36600461125d565b61030a565b60405190151581526020015b60405180910390f35b61016c61035c565b60405161015b91906112d2565b61018c6101873660046112e5565b6103ee565b6040516001600160a01b03909116815260200161015b565b6101b76101b236600461131a565b610488565b005b6101b76101c7366004611344565b61059e565b6101b76105cf565b6101b76101e236600461131a565b6105d9565b6101b76101f5366004611344565b6105e7565b6101b76102083660046112e5565b610602565b61014f61021b3660046112e5565b61060e565b60065460ff1661014f565b61018c6102393660046112e5565b61062d565b61025161024c366004611380565b6106a4565b60405190815260200161015b565b6101b761072b565b6101b761027536600461143e565b610733565b61016c61073e565b6101b761029036600461131a565b61074d565b6101b76102a3366004611495565b610757565b6101b76102b63660046114d1565b610762565b61016c6102c93660046112e5565b61079a565b61014f6102dc366004611539565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061033b57506001600160e01b03198216635b5e139f60e01b145b8061035657506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461036b9061156c565b80601f01602080910402602001604051908101604052809291908181526020018280546103979061156c565b80156103e45780601f106103b9576101008083540402835291602001916103e4565b820191906000526020600020905b8154815290600101906020018083116103c757829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661046c5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006104938261062d565b9050806001600160a01b0316836001600160a01b031614156105015760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610463565b336001600160a01b038216148061051d575061051d81336102dc565b61058f5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610463565b6105998383610882565b505050565b6105a833826108f0565b6105c45760405162461bcd60e51b8152600401610463906115a7565b6105998383836109e7565b6105d7610b92565b565b6105e38282610c25565b5050565b61059983838360405180602001604052806000815250610762565b61060b81610d73565b50565b6000818152600260205260408120546001600160a01b03161515610356565b6000818152600260205260408120546001600160a01b0316806103565760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610463565b60006001600160a01b03821661070f5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610463565b506001600160a01b031660009081526003602052604090205490565b6105d7610e1a565b610599838383610e95565b60606001805461036b9061156c565b6105e38282610ec8565b6105e3338383610ee2565b61076c33836108f0565b6107885760405162461bcd60e51b8152600401610463906115a7565b61079484848484610fb1565b50505050565b6000818152600260205260409020546060906001600160a01b03166108195760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610463565b600061083060408051602081019091526000815290565b90506000815111610850576040518060200160405280600081525061087b565b8061085a84610fe4565b60405160200161086b9291906115f8565b6040516020818303038152906040525b9392505050565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906108b78261062d565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166109695760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610463565b60006109748361062d565b9050806001600160a01b0316846001600160a01b031614806109af5750836001600160a01b03166109a4846103ee565b6001600160a01b0316145b806109df57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166109fa8261062d565b6001600160a01b031614610a625760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610463565b6001600160a01b038216610ac45760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610463565b610acf8383836110e2565b610ada600082610882565b6001600160a01b0383166000908152600360205260408120805460019290610b0390849061163d565b90915550506001600160a01b0382166000908152600360205260408120805460019290610b31908490611654565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60065460ff16610bdb5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610463565b6006805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b038216610c7b5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610463565b6000818152600260205260409020546001600160a01b031615610ce05760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610463565b610cec600083836110e2565b6001600160a01b0382166000908152600360205260408120805460019290610d15908490611654565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000610d7e8261062d565b9050610d8c816000846110e2565b610d97600083610882565b6001600160a01b0381166000908152600360205260408120805460019290610dc090849061163d565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b60065460ff1615610e605760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610463565b6006805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610c083390565b610e9f8383610c25565b610eac6000848484611149565b6105995760405162461bcd60e51b81526004016104639061166c565b6105e3828260405180602001604052806000815250610e95565b816001600160a01b0316836001600160a01b03161415610f445760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610463565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610fbc8484846109e7565b610fc884848484611149565b6107945760405162461bcd60e51b81526004016104639061166c565b6060816110085750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611032578061101c816116be565b915061102b9050600a836116ef565b915061100c565b60008167ffffffffffffffff81111561104d5761104d61139b565b6040519080825280601f01601f191660200182016040528015611077576020820181803683370190505b5090505b84156109df5761108c60018361163d565b9150611099600a86611703565b6110a4906030611654565b60f81b8183815181106110b9576110b9611717565b60200101906001600160f81b031916908160001a9053506110db600a866116ef565b945061107b565b60065460ff16156105995760405162461bcd60e51b815260206004820152602b60248201527f4552433732315061757361626c653a20746f6b656e207472616e73666572207760448201526a1a1a5b19481c185d5cd95960aa1b6064820152608401610463565b60006001600160a01b0384163b1561123c57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061118d90339089908890889060040161172d565b6020604051808303816000875af19250505080156111c8575060408051601f3d908101601f191682019092526111c59181019061176a565b60015b611222573d8080156111f6576040519150601f19603f3d011682016040523d82523d6000602084013e6111fb565b606091505b50805161121a5760405162461bcd60e51b81526004016104639061166c565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506109df565b506001949350505050565b6001600160e01b03198116811461060b57600080fd5b60006020828403121561126f57600080fd5b813561087b81611247565b60005b8381101561129557818101518382015260200161127d565b838111156107945750506000910152565b600081518084526112be81602086016020860161127a565b601f01601f19169290920160200192915050565b60208152600061087b60208301846112a6565b6000602082840312156112f757600080fd5b5035919050565b80356001600160a01b038116811461131557600080fd5b919050565b6000806040838503121561132d57600080fd5b611336836112fe565b946020939093013593505050565b60008060006060848603121561135957600080fd5b611362846112fe565b9250611370602085016112fe565b9150604084013590509250925092565b60006020828403121561139257600080fd5b61087b826112fe565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126113c257600080fd5b813567ffffffffffffffff808211156113dd576113dd61139b565b604051601f8301601f19908116603f011681019082821181831017156114055761140561139b565b8160405283815286602085880101111561141e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561145357600080fd5b61145c846112fe565b925060208401359150604084013567ffffffffffffffff81111561147f57600080fd5b61148b868287016113b1565b9150509250925092565b600080604083850312156114a857600080fd5b6114b1836112fe565b9150602083013580151581146114c657600080fd5b809150509250929050565b600080600080608085870312156114e757600080fd5b6114f0856112fe565b93506114fe602086016112fe565b925060408501359150606085013567ffffffffffffffff81111561152157600080fd5b61152d878288016113b1565b91505092959194509250565b6000806040838503121561154c57600080fd5b611555836112fe565b9150611563602084016112fe565b90509250929050565b600181811c9082168061158057607f821691505b602082108114156115a157634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6000835161160a81846020880161127a565b83519083019061161e81836020880161127a565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b60008282101561164f5761164f611627565b500390565b6000821982111561166757611667611627565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60006000198214156116d2576116d2611627565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826116fe576116fe6116d9565b500490565b600082611712576117126116d9565b500690565b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611760908301846112a6565b9695505050505050565b60006020828403121561177c57600080fd5b815161087b8161124756fea2646970667358221220383336e293da05080fae23ebdd739a75ca4cc405d9bc95e1abae93f09d486fd564736f6c634300080a0033";
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
    static createInterface(): ERC721PausableMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721PausableMock;
}
//# sourceMappingURL=ERC721PausableMock__factory.d.ts.map