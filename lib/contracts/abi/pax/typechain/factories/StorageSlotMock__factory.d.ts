import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StorageSlotMock, StorageSlotMockInterface } from "../StorageSlotMock";
export declare class StorageSlotMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StorageSlotMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StorageSlotMock;
    connect(signer: Signer): StorageSlotMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061023c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80634f3029c21161005b5780634f3029c21461010a578063a6ed563e146100c5578063ca446dd91461011e578063f8715b3e1461014957600080fd5b806321f8a7211461008d57806333598b00146100c55780633848207a146100e55780634e91db081461010a575b600080fd5b6100a861009b366004610165565b546001600160a01b031690565b6040516001600160a01b0390911681526020015b60405180910390f35b6100d76100d3366004610165565b5490565b6040519081526020016100bc565b6100fa6100f3366004610165565b5460ff1690565b60405190151581526020016100bc565b61011c61011836600461017e565b9055565b005b61011c61012c3660046101a0565b81546001600160a01b0319166001600160a01b0391909116179055565b61011c6101573660046101dc565b815460ff1916901515179055565b60006020828403121561017757600080fd5b5035919050565b6000806040838503121561019157600080fd5b50508035926020909101359150565b600080604083850312156101b357600080fd5b8235915060208301356001600160a01b03811681146101d157600080fd5b809150509250929050565b600080604083850312156101ef57600080fd5b82359150602083013580151581146101d157600080fdfea2646970667358221220b6b50d154c3edb4ac796baa943d76c83124ca7cac199921879e62687928f224564736f6c634300080a0033";
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
    static createInterface(): StorageSlotMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): StorageSlotMock;
}
//# sourceMappingURL=StorageSlotMock__factory.d.ts.map