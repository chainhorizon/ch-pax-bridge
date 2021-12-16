import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC165Mock, ERC165MockInterface } from "../ERC165Mock";
export declare class ERC165Mock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC165Mock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC165Mock;
    connect(signer: Signer): ERC165Mock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060c78061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806301ffc9a714602d575b600080fd5b604e60383660046062565b6001600160e01b0319166301ffc9a760e01b1490565b604051901515815260200160405180910390f35b600060208284031215607357600080fd5b81356001600160e01b031981168114608a57600080fd5b939250505056fea26469706673582212204b1619ed801fcc1446e9ba04ea986bb08d65ae355b88d4358496ec59a37b962464736f6c634300080a0033";
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
    static createInterface(): ERC165MockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC165Mock;
}
//# sourceMappingURL=ERC165Mock__factory.d.ts.map