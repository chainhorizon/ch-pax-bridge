import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IERC20StakingPool, IERC20StakingPoolInterface } from "../IERC20StakingPool";
export declare class IERC20StakingPool__factory {
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
    static createInterface(): IERC20StakingPoolInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20StakingPool;
}
//# sourceMappingURL=IERC20StakingPool__factory.d.ts.map