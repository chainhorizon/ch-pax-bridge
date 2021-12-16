import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EtherReceiverMock, EtherReceiverMockInterface } from "../EtherReceiverMock";
export declare class EtherReceiverMock__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<EtherReceiverMock>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): EtherReceiverMock;
    connect(signer: Signer): EtherReceiverMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060c08061001f6000396000f3fe60806040526004361060205760003560e01c80634fea120c14603957600080fd5b3660345760005460ff16603257600080fd5b005b600080fd5b348015604457600080fd5b50603260503660046063565b6000805460ff1916911515919091179055565b600060208284031215607457600080fd5b81358015158114608357600080fd5b939250505056fea264697066735822122036398124ff4b5e3bebcdf54c34e5ca98eca746d94ace0ca50b917799b63755f664736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): EtherReceiverMockInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EtherReceiverMock;
}
//# sourceMappingURL=EtherReceiverMock__factory.d.ts.map