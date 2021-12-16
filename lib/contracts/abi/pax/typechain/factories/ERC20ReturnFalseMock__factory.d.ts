import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20ReturnFalseMock, ERC20ReturnFalseMockInterface } from "../ERC20ReturnFalseMock";
export declare class ERC20ReturnFalseMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC20ReturnFalseMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC20ReturnFalseMock;
    connect(signer: Signer): ERC20ReturnFalseMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101c2806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063095ea7b31461005157806323b872dd14610080578063a9059cbb14610051578063dd62ed3e1461009c575b600080fd5b61006b61005f3660046100f3565b50506000600181905590565b60405190151581526020015b60405180910390f35b61006b61008e36600461011d565b600060018190559392505050565b6100af6100aa366004610159565b6100bd565b604051908152602001610077565b60006001546000146100ce57600080fd5b50600092915050565b80356001600160a01b03811681146100ee57600080fd5b919050565b6000806040838503121561010657600080fd5b61010f836100d7565b946020939093013593505050565b60008060006060848603121561013257600080fd5b61013b846100d7565b9250610149602085016100d7565b9150604084013590509250925092565b6000806040838503121561016c57600080fd5b610175836100d7565b9150610183602084016100d7565b9050925092905056fea2646970667358221220d9c5774c021a6cc73ff53c44ca6f0f28f5670b9acc65f55ef32a919843f6ee1a64736f6c634300080a0033";
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
    static createInterface(): ERC20ReturnFalseMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20ReturnFalseMock;
}
//# sourceMappingURL=ERC20ReturnFalseMock__factory.d.ts.map