import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWhitehole, IWhiteholeInterface } from "../IWhitehole";
export declare class IWhitehole__factory {
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
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IWhiteholeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IWhitehole;
}
//# sourceMappingURL=IWhitehole__factory.d.ts.map