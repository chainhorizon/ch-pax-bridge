import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20NoReturnMock, ERC20NoReturnMockInterface } from "../ERC20NoReturnMock";
export declare class ERC20NoReturnMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC20NoReturnMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC20NoReturnMock;
    connect(signer: Signer): ERC20NoReturnMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101ed806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063095ea7b31461005c57806323b872dd146100755780633ba93f261461008d578063a9059cbb1461005c578063dd62ed3e146100ad575b600080fd5b61007361006a366004610105565b50506000600155565b005b61007361008336600461012f565b5050600060015550565b61007361009b36600461016b565b33600090815260208190526040902055565b6100d76100bb366004610184565b506001600160a01b031660009081526020819052604090205490565b60405190815260200160405180910390f35b80356001600160a01b038116811461010057600080fd5b919050565b6000806040838503121561011857600080fd5b610121836100e9565b946020939093013593505050565b60008060006060848603121561014457600080fd5b61014d846100e9565b925061015b602085016100e9565b9150604084013590509250925092565b60006020828403121561017d57600080fd5b5035919050565b6000806040838503121561019757600080fd5b6101a0836100e9565b91506101ae602084016100e9565b9050925092905056fea26469706673582212201339b60abb628829a232fd8b53c9b5de3292a9266e6e5713fda0375a618d181f64736f6c634300080a0033";
    static readonly abi: {
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
    }[];
    static createInterface(): ERC20NoReturnMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20NoReturnMock;
}
//# sourceMappingURL=ERC20NoReturnMock__factory.d.ts.map