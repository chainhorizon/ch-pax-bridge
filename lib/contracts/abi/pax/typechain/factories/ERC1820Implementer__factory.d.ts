import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1820Implementer, ERC1820ImplementerInterface } from "../ERC1820Implementer";
export declare class ERC1820Implementer__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC1820Implementer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC1820Implementer;
    connect(signer: Signer): ERC1820Implementer__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610114806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063249cb3fa14602d575b600080fd5b603c603836600460a4565b604e565b60405190815260200160405180910390f35b6000828152602081815260408083206001600160a01b038516845290915281205460ff16607b576000609d565b7fa2ef4600d742022d532d4747cb3547474667d6f13804902513b2ec01c848f4b45b9392505050565b6000806040838503121560b657600080fd5b8235915060208301356001600160a01b038116811460d357600080fd5b80915050925092905056fea26469706673582212208483754a3d338c548732577bcf0a2c6706b9934c0d262fd8d5f605557fd48f2264736f6c634300080a0033";
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
    static createInterface(): ERC1820ImplementerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1820Implementer;
}
//# sourceMappingURL=ERC1820Implementer__factory.d.ts.map