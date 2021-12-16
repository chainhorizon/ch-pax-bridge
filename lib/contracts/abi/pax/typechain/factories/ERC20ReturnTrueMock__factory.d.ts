import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20ReturnTrueMock, ERC20ReturnTrueMockInterface } from "../ERC20ReturnTrueMock";
export declare class ERC20ReturnTrueMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC20ReturnTrueMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC20ReturnTrueMock;
    connect(signer: Signer): ERC20ReturnTrueMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610205806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063095ea7b31461005c57806323b872dd1461008b5780633ba93f26146100a7578063a9059cbb1461005c578063dd62ed3e146100c9575b600080fd5b61007661006a36600461011d565b50506000600190815590565b60405190151581526020015b60405180910390f35b610076610099366004610147565b600060019081559392505050565b6100c76100b5366004610183565b33600090815260208190526040902055565b005b6100f36100d736600461019c565b506001600160a01b031660009081526020819052604090205490565b604051908152602001610082565b80356001600160a01b038116811461011857600080fd5b919050565b6000806040838503121561013057600080fd5b61013983610101565b946020939093013593505050565b60008060006060848603121561015c57600080fd5b61016584610101565b925061017360208501610101565b9150604084013590509250925092565b60006020828403121561019557600080fd5b5035919050565b600080604083850312156101af57600080fd5b6101b883610101565b91506101c660208401610101565b9050925092905056fea26469706673582212204f42c04705d0316889de8c289a92fb0c74a09e78f70a9c42c342ca99cd1671f764736f6c634300080a0033";
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
    static createInterface(): ERC20ReturnTrueMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20ReturnTrueMock;
}
//# sourceMappingURL=ERC20ReturnTrueMock__factory.d.ts.map