import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Implementation4, Implementation4Interface } from "../Implementation4";
export declare class Implementation4__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Implementation4>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Implementation4;
    connect(signer: Signer): Implementation4__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061017a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632096525514610047578063552410771461005c5780638129fc1c14610071575b60018055005b60015460405190815260200160405180910390f35b61006f61006a36600461012b565b600155565b005b61006f600054610100900460ff168061008d575060005460ff16155b6100f45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b600054610100900460ff16158015610116576000805461ffff19166101011790555b8015610128576000805461ff00191690555b50565b60006020828403121561013d57600080fd5b503591905056fea2646970667358221220a4b7142eb78d00d4ec00c9ecbf33e4f37e492cc503ad7b85327dba2f21a5055c64736f6c634300080a0033";
    static readonly abi: ({
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
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
    static createInterface(): Implementation4Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Implementation4;
}
//# sourceMappingURL=Implementation4__factory.d.ts.map