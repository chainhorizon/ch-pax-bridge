import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC165MissingData, ERC165MissingDataInterface } from "../ERC165MissingData";
export declare class ERC165MissingData__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC165MissingData>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC165MissingData;
    connect(signer: Signer): ERC165MissingData__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b5060a28061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806301ffc9a714602d575b600080fd5b603b6038366004603d565b50565b005b600060208284031215604e57600080fd5b81356001600160e01b031981168114606557600080fd5b939250505056fea2646970667358221220df79d2e7edf7e893fb5f8fe950c78d182be6490d8ed91a66786095887bdf482e64736f6c634300080a0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ERC165MissingDataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC165MissingData;
}
//# sourceMappingURL=ERC165MissingData__factory.d.ts.map