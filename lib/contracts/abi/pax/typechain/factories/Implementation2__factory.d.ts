import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Implementation2, Implementation2Interface } from "../Implementation2";
export declare class Implementation2__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Implementation2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Implementation2;
    connect(signer: Signer): Implementation2__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610179806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632096525514610046578063552410771461005b5780638129fc1c14610070575b600080fd5b60015460405190815260200160405180910390f35b61006e61006936600461012a565b600155565b005b61006e600054610100900460ff168061008c575060005460ff16155b6100f35760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff16158015610115576000805461ffff19166101011790555b8015610127576000805461ff00191690555b50565b60006020828403121561013c57600080fd5b503591905056fea2646970667358221220b788f0ea6bd776b6bc91ddce28ff8acd84c6b4d394b6d37ba5303a63594b8e3f64736f6c634300080a0033";
    static readonly abi: ({
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): Implementation2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Implementation2;
}
//# sourceMappingURL=Implementation2__factory.d.ts.map