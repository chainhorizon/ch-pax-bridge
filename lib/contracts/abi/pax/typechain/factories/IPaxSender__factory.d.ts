import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IPaxSender, IPaxSenderInterface } from "../IPaxSender";
export declare class IPaxSender__factory {
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
    static createInterface(): IPaxSenderInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPaxSender;
}
//# sourceMappingURL=IPaxSender__factory.d.ts.map