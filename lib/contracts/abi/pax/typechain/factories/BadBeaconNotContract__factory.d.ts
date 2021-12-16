import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BadBeaconNotContract, BadBeaconNotContractInterface } from "../BadBeaconNotContract";
export declare class BadBeaconNotContract__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BadBeaconNotContract>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BadBeaconNotContract;
    connect(signer: Signer): BadBeaconNotContract__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50607780601d6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80635c60da1b14602d575b600080fd5b604080516001815290519081900360200190f3fea2646970667358221220305f1a2c12d4d105bcdc1db0de3a4052a71a1f765aaaae2818f9a8730bb3b29764736f6c634300080a0033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): BadBeaconNotContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BadBeaconNotContract;
}
//# sourceMappingURL=BadBeaconNotContract__factory.d.ts.map