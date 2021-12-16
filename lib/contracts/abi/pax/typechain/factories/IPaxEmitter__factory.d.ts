import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPaxEmitter, IPaxEmitterInterface } from "../IPaxEmitter";
export declare class IPaxEmitter__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): IPaxEmitterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPaxEmitter;
}
//# sourceMappingURL=IPaxEmitter__factory.d.ts.map