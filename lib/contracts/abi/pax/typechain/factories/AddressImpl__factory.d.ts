import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AddressImpl, AddressImplInterface } from "../AddressImpl";
export declare class AddressImpl__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AddressImpl>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AddressImpl;
    connect(signer: Signer): AddressImpl__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610c05806100206000396000f3fe6080604052600436106100745760003560e01c8063a0b5ffb01161004e578063a0b5ffb0146100eb578063c21d36f31461010b578063ee33b7e21461012b578063fc40cf731461014b57600080fd5b8063162790551461008057806324a084df146100b65780632a011594146100d857600080fd5b3661007b57005b600080fd5b34801561008c57600080fd5b506100a161009b3660046108a5565b3b151590565b60405190151581526020015b60405180910390f35b3480156100c257600080fd5b506100d66100d13660046108c2565b61016d565b005b6100d66100e6366004610937565b61017b565b3480156100f757600080fd5b506100d6610106366004610993565b610212565b34801561011757600080fd5b506100d6610126366004610993565b6102a6565b34801561013757600080fd5b506100d6610146366004610993565b6102e8565b34801561015757600080fd5b5061016061032a565b6040516100ad9190610a18565b61017782826103b8565b5050565b60006101bf8585858080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508792506104db915050565b90507fe518073da644d0626295bee74d5d5c51447a33857c62913bb30f35e2fba3db7c818060200190518101906101f69190610a61565b6040516102039190610a18565b60405180910390a15050505050565b60006102548484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061050b92505050565b90507fe518073da644d0626295bee74d5d5c51447a33857c62913bb30f35e2fba3db7c8180602001905181019061028b9190610a61565b6040516102989190610a18565b60405180910390a150505050565b60006102548484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061054d92505050565b60006102548484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061057292505050565b6000805461033790610b03565b80601f016020809104026020016040519081016040528092919081815260200182805461036390610b03565b80156103b05780601f10610385576101008083540402835291602001916103b0565b820191906000526020600020905b81548152906001019060200180831161039357829003601f168201915b505050505081565b8047101561040d5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064015b60405180910390fd5b6000826001600160a01b03168260405160006040518083038185875af1925050503d806000811461045a576040519150601f19603f3d011682016040523d82523d6000602084013e61045f565b606091505b50509050806104d65760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610404565b505050565b6060610501848484604051806060016040528060298152602001610b5b60299139610597565b90505b9392505050565b606061050483836040518060400160405280601e81526020017f416464726573733a206c6f772d6c6576656c2063616c6c206661696c656400008152506106bf565b60606105048383604051806060016040528060258152602001610b84602591396106ce565b60606105048383604051806060016040528060278152602001610ba96027913961079f565b6060824710156105f85760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610404565b843b6106465760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610404565b600080866001600160a01b031685876040516106629190610b3e565b60006040518083038185875af1925050503d806000811461069f576040519150601f19603f3d011682016040523d82523d6000602084013e6106a4565b606091505b50915091506106b4828286610854565b979650505050505050565b60606105018484600085610597565b6060833b61072a5760405162461bcd60e51b8152602060048201526024808201527f416464726573733a207374617469632063616c6c20746f206e6f6e2d636f6e746044820152631c9858dd60e21b6064820152608401610404565b600080856001600160a01b0316856040516107459190610b3e565b600060405180830381855afa9150503d8060008114610780576040519150601f19603f3d011682016040523d82523d6000602084013e610785565b606091505b5091509150610795828286610854565b9695505050505050565b6060833b6107fe5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610404565b600080856001600160a01b0316856040516108199190610b3e565b600060405180830381855af49150503d8060008114610780576040519150601f19603f3d011682016040523d82523d6000602084013e610785565b60608315610863575081610504565b8251156108735782518084602001fd5b8160405162461bcd60e51b81526004016104049190610a18565b6001600160a01b03811681146108a257600080fd5b50565b6000602082840312156108b757600080fd5b81356105048161088d565b600080604083850312156108d557600080fd5b82356108e08161088d565b946020939093013593505050565b60008083601f84011261090057600080fd5b50813567ffffffffffffffff81111561091857600080fd5b60208301915083602082850101111561093057600080fd5b9250929050565b6000806000806060858703121561094d57600080fd5b84356109588161088d565b9350602085013567ffffffffffffffff81111561097457600080fd5b610980878288016108ee565b9598909750949560400135949350505050565b6000806000604084860312156109a857600080fd5b83356109b38161088d565b9250602084013567ffffffffffffffff8111156109cf57600080fd5b6109db868287016108ee565b9497909650939450505050565b60005b83811015610a035781810151838201526020016109eb565b83811115610a12576000848401525b50505050565b6020815260008251806020840152610a378160408501602087016109e8565b601f01601f19169190910160400192915050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610a7357600080fd5b815167ffffffffffffffff80821115610a8b57600080fd5b818401915084601f830112610a9f57600080fd5b815181811115610ab157610ab1610a4b565b604051601f8201601f19908116603f01168101908382118183101715610ad957610ad9610a4b565b81604052828152876020848701011115610af257600080fd5b6106b48360208301602088016109e8565b600181811c90821680610b1757607f821691505b60208210811415610b3857634e487b7160e01b600052602260045260246000fd5b50919050565b60008251610b508184602087016109e8565b919091019291505056fe416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564416464726573733a206c6f772d6c6576656c207374617469632063616c6c206661696c6564416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212202f756bb10e0886be8d4a36e03e4194db4b463368222b89004d9ad9e62926270064736f6c634300080a0033";
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
    } | {
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): AddressImplInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AddressImpl;
}
//# sourceMappingURL=AddressImpl__factory.d.ts.map