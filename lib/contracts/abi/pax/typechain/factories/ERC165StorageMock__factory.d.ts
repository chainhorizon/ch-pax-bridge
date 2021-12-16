import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC165StorageMock, ERC165StorageMockInterface } from "../ERC165StorageMock";
export declare class ERC165StorageMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC165StorageMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC165StorageMock;
    connect(signer: Signer): ERC165StorageMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101ad806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806301ffc9a71461003b578063214cdb8014610062575b600080fd5b61004e610049366004610146565b610077565b604051901515815260200160405180910390f35b610075610070366004610146565b6100b7565b005b60006301ffc9a760e01b6001600160e01b0319831614806100b157506001600160e01b0319821660009081526020819052604090205460ff165b92915050565b6100c0816100c3565b50565b6001600160e01b031980821614156101215760405162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015260640160405180910390fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b60006020828403121561015857600080fd5b81356001600160e01b03198116811461017057600080fd5b939250505056fea2646970667358221220ea4cf5f791606bd8ffb46e1dcfed9524aceb8c4c1bc741e184979987103b6e4564736f6c634300080a0033";
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
    static createInterface(): ERC165StorageMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC165StorageMock;
}
//# sourceMappingURL=ERC165StorageMock__factory.d.ts.map