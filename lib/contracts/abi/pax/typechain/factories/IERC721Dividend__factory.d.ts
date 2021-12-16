import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC721Dividend, IERC721DividendInterface } from "../IERC721Dividend";
export declare class IERC721Dividend__factory {
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
    static createInterface(): IERC721DividendInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC721Dividend;
}
//# sourceMappingURL=IERC721Dividend__factory.d.ts.map