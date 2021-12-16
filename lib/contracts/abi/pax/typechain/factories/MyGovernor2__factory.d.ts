import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MyGovernor2, MyGovernor2Interface } from "../MyGovernor2";
export declare class MyGovernor2__factory extends ContractFactory {
    constructor(...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>);
    deploy(_token: string, _timelock: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MyGovernor2>;
    getDeployTransaction(_token: string, _timelock: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MyGovernor2;
    connect(signer: Signer): MyGovernor2__factory;
    static readonly bytecode = "0x6101606040523480156200001257600080fd5b5060405162002ebf38038062002ebf833981016040819052620000359162000353565b600482826040518060400160405280600a81526020016926bca3b7bb32b93737b960b11b815250806200006d6200014360201b60201c565b815160208084019190912082518383012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c00190528051940193909320919290916080523060c052610120525050825162000113925060009150602084019062000294565b50620001219050816200015e565b506001600160a01b0316610140526200013a81620001c7565b505050620003cf565b6040805180820190915260018152603160f81b602082015290565b600254604080516001600160a01b03928316815291831660208301527f08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401910160405180910390a1600280546001600160a01b0319166001600160a01b0392909216919091179055565b60648111156200024f5760405162461bcd60e51b815260206004820152604360248201527f476f7665726e6f72566f74657351756f72756d4672616374696f6e3a2071756f60448201527f72756d4e756d657261746f72206f7665722071756f72756d44656e6f6d696e616064820152623a37b960e91b608482015260a40160405180910390fd5b600480549082905560408051828152602081018490527f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997910160405180910390a15050565b828054620002a29062000392565b90600052602060002090601f016020900481019282620002c6576000855562000311565b82601f10620002e157805160ff191683800117855562000311565b8280016001018555821562000311579182015b8281111562000311578251825591602001919060010190620002f4565b506200031f92915062000323565b5090565b5b808211156200031f576000815560010162000324565b6001600160a01b03811681146200035057600080fd5b50565b600080604083850312156200036757600080fd5b825162000374816200033a565b602084015190925062000387816200033a565b809150509250929050565b600181811c90821680620003a757607f821691505b60208210811415620003c957634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e051610100516101205161014051612a87620004386000396000818161064f01528181611213015261129d01526000611457015260006114a601526000611481015260006113da015260006114040152600061142e0152612a876000f3fe6080604052600436106101d15760003560e01c80637d5e81e2116100f7578063c28bc2fa11610095578063deaaa7cc11610064578063deaaa7cc146105c9578063eb9019d4146105fd578063f8ce560a1461061d578063fc0c546a1461063d57600080fd5b8063c28bc2fa14610511578063c59057e414610531578063d33219b414610551578063dd4e2ba51461058357600080fd5b8063a890c910116100d1578063a890c91014610495578063ab58fb8e146104b5578063b58131b0146104d5578063c01f9e37146104f157600080fd5b80637d5e81e21461044c57806397c3d3341461046c578063a7713a701461048057600080fd5b80633932abb11161016f578063544ffc9c1161013e578063544ffc9c1461038d57806354fd4d50146103e2578063567813881461040c5780637b3c71d31461042c57600080fd5b80633932abb1146102e25780633bccf4fd146102f65780633e4f49e614610316578063438596321461034357600080fd5b806306fdde03116101ab57806306fdde031461026d578063160cbed71461028f5780632656227d146102af5780632d63f693146102c257600080fd5b806301ffc9a7146101f957806302a251a31461022e57806306f3f9e61461024d57600080fd5b366101f457306101df610671565b6001600160a01b0316146101f257600080fd5b005b600080fd5b34801561020557600080fd5b50610219610214366004611ef7565b61068a565b60405190151581526020015b60405180910390f35b34801561023a57600080fd5b5061b2fa5b604051908152602001610225565b34801561025957600080fd5b506101f2610268366004611f21565b61069b565b34801561027957600080fd5b506102826106e8565b6040516102259190611f96565b34801561029b57600080fd5b5061023f6102aa3660046121e1565b61077a565b61023f6102bd3660046121e1565b61097a565b3480156102ce57600080fd5b5061023f6102dd366004611f21565b610a4d565b3480156102ee57600080fd5b50600161023f565b34801561030257600080fd5b5061023f610311366004612286565b610a84565b34801561032257600080fd5b50610336610331366004611f21565b610b18565b60405161022591906122ea565b34801561034f57600080fd5b5061021961035e366004612312565b60008281526005602090815260408083206001600160a01b038516845260030190915290205460ff1692915050565b34801561039957600080fd5b506103c76103a8366004611f21565b6000908152600560205260409020805460018201546002909201549092565b60408051938452602084019290925290820152606001610225565b3480156103ee57600080fd5b506040805180820190915260018152603160f81b6020820152610282565b34801561041857600080fd5b5061023f610427366004612342565b610b23565b34801561043857600080fd5b5061023f6104473660046123b6565b610b4c565b34801561045857600080fd5b5061023f61046736600461240f565b610b9e565b34801561047857600080fd5b50606461023f565b34801561048c57600080fd5b5060045461023f565b3480156104a157600080fd5b506101f26104b03660046124cf565b610bb5565b3480156104c157600080fd5b5061023f6104d0366004611f21565b610bf6565b3480156104e157600080fd5b50683635c9adc5dea0000061023f565b3480156104fd57600080fd5b5061023f61050c366004611f21565b610c91565b34801561051d57600080fd5b506101f261052c3660046124ec565b610cc0565b34801561053d57600080fd5b5061023f61054c3660046121e1565b610d41565b34801561055d57600080fd5b506002546001600160a01b03165b6040516001600160a01b039091168152602001610225565b34801561058f57600080fd5b506040805180820190915260208082527f737570706f72743d627261766f2671756f72756d3d666f722c6162737461696e90820152610282565b3480156105d557600080fd5b5061023f7f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f81565b34801561060957600080fd5b5061023f61061836600461252f565b610d7b565b34801561062957600080fd5b5061023f610638366004611f21565b610d87565b34801561064957600080fd5b5061056b7f000000000000000000000000000000000000000000000000000000000000000081565b60006106856002546001600160a01b031690565b905090565b600061069582610d92565b92915050565b6106a3610671565b6001600160a01b0316336001600160a01b0316146106dc5760405162461bcd60e51b81526004016106d39061255b565b60405180910390fd5b6106e581610db7565b50565b6060600080546106f790612592565b80601f016020809104026020016040519081016040528092919081815260200182805461072390612592565b80156107705780601f1061074557610100808354040283529160200191610770565b820191906000526020600020905b81548152906001019060200180831161075357829003601f168201915b5050505050905090565b60008061078986868686610d41565b9050600461079682610b18565b60078111156107a7576107a76122d4565b146107c45760405162461bcd60e51b81526004016106d3906125cd565b6002546040805163793d064960e11b815290516000926001600160a01b03169163f27a0c929160048083019260209291908290030181865afa15801561080e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610832919061260e565b60025460405163b1c5f42760e01b81529192506001600160a01b03169063b1c5f4279061086c908a908a908a906000908b906004016126f0565b602060405180830381865afa158015610889573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ad919061260e565b6000838152600360205260408082209290925560025491516308f2a0bb60e41b81526001600160a01b0390921691638f2a0bb0916108f8918b918b918b91908b90899060040161273e565b600060405180830381600087803b15801561091257600080fd5b505af1158015610926573d6000803e3d6000fd5b505050507f9a2e42fd6722813d69113e7d0079d3d940171428df7373df9c7f7617cfda289282824261095891906127ac565b6040805192835260208301919091520160405180910390a15095945050505050565b60008061098986868686610d41565b9050600061099682610b18565b905060048160078111156109ac576109ac6122d4565b14806109c9575060058160078111156109c7576109c76122d4565b145b6109e55760405162461bcd60e51b81526004016106d3906125cd565b600082815260016020818152604092839020600201805460ff191690921790915590518381527f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f910160405180910390a1610a438288888888610e7f565b5095945050505050565b60008181526001602090815260408083208151928301909152546001600160401b0316908190525b6001600160401b031692915050565b604080517f150214d74d59b7d1e90c73fc22ef3d991dd0a76b046543d4d80ab92d2a50328f602082015290810186905260ff851660608201526000908190610af090610ae89060800160405160208183030381529060405280519060200120610e8c565b868686610eda565b9050610b0d87828860405180602001604052806000815250610ef8565b979650505050505050565b600061069582611003565b600080339050610b4484828560405180602001604052806000815250610ef8565b949350505050565b600080339050610b9486828787878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610ef892505050565b9695505050505050565b6000610bac8585858561114d565b95945050505050565b610bbd610671565b6001600160a01b0316336001600160a01b031614610bed5760405162461bcd60e51b81526004016106d39061255b565b6106e58161115b565b60025460008281526003602052604080822054905163d45c443560e01b81526004810191909152909182916001600160a01b039091169063d45c443590602401602060405180830381865afa158015610c53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c77919061260e565b905080600114610c875780610c8a565b60005b9392505050565b60008181526001602081815260408084208151928301909152909101546001600160401b031690819052610a75565b610cc8610671565b6001600160a01b0316336001600160a01b031614610cf85760405162461bcd60e51b81526004016106d39061255b565b610d3a8483838080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508892506111c4915050565b5050505050565b600084848484604051602001610d5a94939291906127c4565b60408051601f19818403018152919052805160209091012095945050505050565b6000610c8a83836111ea565b600061069582611280565b60006001600160e01b03198216636e665ced60e01b1480610695575061069582611324565b6064811115610e3a5760405162461bcd60e51b815260206004820152604360248201527f476f7665726e6f72566f74657351756f72756d4672616374696f6e3a2071756f60448201527f72756d4e756d657261746f72206f7665722071756f72756d44656e6f6d696e616064820152623a37b960e91b608482015260a4016106d3565b600480549082905560408051828152602081018490527f0553476bf02ef2726e8ce5ced78d63e26e602e4a2257b1f559418e24b4633997910160405180910390a15050565b610d3a8585858585611359565b6000610695610e996113cd565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610eeb878787876114f4565b91509150610a43816115e1565b6000848152600160208190526040822090610f1287610b18565b6007811115610f2357610f236122d4565b14610f7c5760405162461bcd60e51b815260206004820152602360248201527f476f7665726e6f723a20766f7465206e6f742063757272656e746c792061637460448201526269766560e81b60648201526084016106d3565b604080516020810190915281546001600160401b031690819052600090610fa4908790610d7b565b9050610fb28787878461179c565b856001600160a01b03167fb8e138887d0aa13bab447e82de9d5c1777041ecd21ca36ba824ff1e6c07ddda488878488604051610ff1949392919061280f565b60405180910390a29695505050505050565b60008061100f8361191b565b90506004816007811115611025576110256122d4565b146110305792915050565b6000838152600360205260409020548061104b575092915050565b600254604051632ab0f52960e01b8152600481018390526001600160a01b0390911690632ab0f52990602401602060405180830381865afa158015611094573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b89190612837565b156110c7575060079392505050565b600254604051632c258a9f60e11b8152600481018390526001600160a01b039091169063584b153e90602401602060405180830381865afa158015611110573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111349190612837565b15611143575060059392505050565b5060029392505050565b6000610bac85858585611a27565b600254604080516001600160a01b03928316815291831660208301527f08f74ea46ef7894f65eabfb5e6e695de773a000b47c529ab559178069b226401910160405180910390a1600280546001600160a01b0319166001600160a01b0392909216919091179055565b6060610b44848484604051806060016040528060298152602001612a2960299139611cfe565b604051630748d63560e31b81526001600160a01b038381166004830152602482018390526000917f000000000000000000000000000000000000000000000000000000000000000090911690633a46b1a890604401602060405180830381865afa15801561125c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8a919061260e565b60006064600454604051632394e7a360e21b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638e539e8c90602401602060405180830381865afa1580156112ec573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611310919061260e565b61131a9190612859565b6106959190612878565b60006001600160e01b0319821663bf26d89760e01b148061069557506301ffc9a760e01b6001600160e01b0319831614610695565b60025460405163e38335e560e01b81526001600160a01b039091169063e38335e59034906113949088908890889060009089906004016126f0565b6000604051808303818588803b1580156113ad57600080fd5b505af11580156113c1573d6000803e3d6000fd5b50505050505050505050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561142657507f000000000000000000000000000000000000000000000000000000000000000046145b1561145057507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561152b57506000905060036115d8565b8460ff16601b1415801561154357508460ff16601c14155b1561155457506000905060046115d8565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156115a8573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166115d1576000600192509250506115d8565b9150600090505b94509492505050565b60008160048111156115f5576115f56122d4565b14156115fe5750565b6001816004811115611612576116126122d4565b14156116605760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016106d3565b6002816004811115611674576116746122d4565b14156116c25760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016106d3565b60038160048111156116d6576116d66122d4565b141561172f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016106d3565b6004816004811115611743576117436122d4565b14156106e55760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016106d3565b60008481526005602090815260408083206001600160a01b0387168452600381019092529091205460ff16156118245760405162461bcd60e51b815260206004820152602760248201527f476f7665726e6f72566f74696e6753696d706c653a20766f746520616c726561604482015266191e4818d85cdd60ca1b60648201526084016106d3565b6001600160a01b03841660009081526003820160205260408120805460ff1916600117905560ff168360ff161415611875578181600001600082825461186a91906127ac565b90915550610d3a9050565b60ff831660011415611895578181600101600082825461186a91906127ac565b60ff8316600214156118b5578181600201600082825461186a91906127ac565b60405162461bcd60e51b815260206004820152603560248201527f476f7665726e6f72566f74696e6753696d706c653a20696e76616c69642076616044820152746c756520666f7220656e756d20566f74655479706560581b60648201526084016106d3565b6000818152600160205260408120600281015460ff161561193f5750600792915050565b6002810154610100900460ff161561195a5750600292915050565b600061196584610a4d565b9050806119b45760405162461bcd60e51b815260206004820152601d60248201527f476f7665726e6f723a20756e6b6e6f776e2070726f706f73616c20696400000060448201526064016106d3565b4381106119c5575060009392505050565b60006119d085610c91565b90504381106119e457506001949350505050565b6119ed85611e1b565b8015611a0c575060008581526005602052604090208054600190910154115b15611a1c57506004949350505050565b506003949350505050565b6000683635c9adc5dea00000611a423361061860014361289a565b1015611ac25760405162461bcd60e51b815260206004820152604360248201527f476f7665726e6f72436f6d7061746962696c697479427261766f3a2070726f7060448201527f6f73657220766f7465732062656c6f772070726f706f73616c207468726573686064820152621bdb1960ea1b608482015260a4016106d3565b6000611ad78686868680519060200120610d41565b90508451865114611afa5760405162461bcd60e51b81526004016106d3906128b1565b8351865114611b1b5760405162461bcd60e51b81526004016106d3906128b1565b6000865111611b6c5760405162461bcd60e51b815260206004820152601860248201527f476f7665726e6f723a20656d7074792070726f706f73616c000000000000000060448201526064016106d3565b600081815260016020908152604091829020825191820190925281546001600160401b03169081905215611bec5760405162461bcd60e51b815260206004820152602160248201527f476f7665726e6f723a2070726f706f73616c20616c72656164792065786973746044820152607360f81b60648201526084016106d3565b6000611bf86001611e52565b611c0143611e52565b611c0b91906128f2565b90506000611c1a61b2fa611e52565b611c2490836128f2565b835467ffffffffffffffff19166001600160401b038416178455905060018301805467ffffffffffffffff19166001600160401b0383161790557f7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e084338b8b8d516001600160401b03811115611c9c57611c9c611fa9565b604051908082528060200260200182016040528015611ccf57816020015b6060815260200190600190039081611cba5790505b508c88888e604051611ce99998979695949392919061291d565b60405180910390a15091979650505050505050565b606082471015611d5f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016106d3565b843b611dad5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106d3565b600080866001600160a01b03168587604051611dc99190612a0c565b60006040518083038185875af1925050503d8060008114611e06576040519150601f19603f3d011682016040523d82523d6000602084013e611e0b565b606091505b5091509150610b0d828286611ebe565b600081815260056020526040812060028101546001820154611e3d91906127ac565b611e4961063885610a4d565b11159392505050565b60006001600160401b03821115611eba5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660448201526534206269747360d01b60648201526084016106d3565b5090565b60608315611ecd575081610c8a565b825115611edd5782518084602001fd5b8160405162461bcd60e51b81526004016106d39190611f96565b600060208284031215611f0957600080fd5b81356001600160e01b031981168114610c8a57600080fd5b600060208284031215611f3357600080fd5b5035919050565b60005b83811015611f55578181015183820152602001611f3d565b83811115611f64576000848401525b50505050565b60008151808452611f82816020860160208601611f3a565b601f01601f19169290920160200192915050565b602081526000610c8a6020830184611f6a565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611fe757611fe7611fa9565b604052919050565b60006001600160401b0382111561200857612008611fa9565b5060051b60200190565b6001600160a01b03811681146106e557600080fd5b600082601f83011261203857600080fd5b8135602061204d61204883611fef565b611fbf565b82815260059290921b8401810191818101908684111561206c57600080fd5b8286015b8481101561209057803561208381612012565b8352918301918301612070565b509695505050505050565b600082601f8301126120ac57600080fd5b813560206120bc61204883611fef565b82815260059290921b840181019181810190868411156120db57600080fd5b8286015b8481101561209057803583529183019183016120df565b60006001600160401b0383111561210f5761210f611fa9565b612122601f8401601f1916602001611fbf565b905082815283838301111561213657600080fd5b828260208301376000602084830101529392505050565b600082601f83011261215e57600080fd5b8135602061216e61204883611fef565b82815260059290921b8401810191818101908684111561218d57600080fd5b8286015b848110156120905780356001600160401b038111156121b05760008081fd5b8701603f810189136121c25760008081fd5b6121d38986830135604084016120f6565b845250918301918301612191565b600080600080608085870312156121f757600080fd5b84356001600160401b038082111561220e57600080fd5b61221a88838901612027565b9550602087013591508082111561223057600080fd5b61223c8883890161209b565b9450604087013591508082111561225257600080fd5b5061225f8782880161214d565b949793965093946060013593505050565b803560ff8116811461228157600080fd5b919050565b600080600080600060a0868803121561229e57600080fd5b853594506122ae60208701612270565b93506122bc60408701612270565b94979396509394606081013594506080013592915050565b634e487b7160e01b600052602160045260246000fd5b602081016008831061230c57634e487b7160e01b600052602160045260246000fd5b91905290565b6000806040838503121561232557600080fd5b82359150602083013561233781612012565b809150509250929050565b6000806040838503121561235557600080fd5b8235915061236560208401612270565b90509250929050565b60008083601f84011261238057600080fd5b5081356001600160401b0381111561239757600080fd5b6020830191508360208285010111156123af57600080fd5b9250929050565b600080600080606085870312156123cc57600080fd5b843593506123dc60208601612270565b925060408501356001600160401b038111156123f757600080fd5b6124038782880161236e565b95989497509550505050565b6000806000806080858703121561242557600080fd5b84356001600160401b038082111561243c57600080fd5b61244888838901612027565b9550602087013591508082111561245e57600080fd5b61246a8883890161209b565b9450604087013591508082111561248057600080fd5b61248c8883890161214d565b935060608701359150808211156124a257600080fd5b508501601f810187136124b457600080fd5b6124c3878235602084016120f6565b91505092959194509250565b6000602082840312156124e157600080fd5b8135610c8a81612012565b6000806000806060858703121561250257600080fd5b843561250d81612012565b93506020850135925060408501356001600160401b038111156123f757600080fd5b6000806040838503121561254257600080fd5b823561254d81612012565b946020939093013593505050565b60208082526018908201527f476f7665726e6f723a206f6e6c79476f7665726e616e63650000000000000000604082015260600190565b600181811c908216806125a657607f821691505b602082108114156125c757634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526021908201527f476f7665726e6f723a2070726f706f73616c206e6f74207375636365737366756040820152601b60fa1b606082015260800190565b60006020828403121561262057600080fd5b5051919050565b600081518084526020808501945080840160005b838110156126605781516001600160a01b03168752958201959082019060010161263b565b509495945050505050565b600081518084526020808501945080840160005b838110156126605781518752958201959082019060010161267f565b600081518084526020808501808196508360051b8101915082860160005b858110156126e35782840389526126d1848351611f6a565b988501989350908401906001016126b9565b5091979650505050505050565b60a08152600061270360a0830188612627565b8281036020840152612715818861266b565b90508281036040840152612729818761269b565b60608401959095525050608001529392505050565b60c08152600061275160c0830189612627565b8281036020840152612763818961266b565b90508281036040840152612777818861269b565b60608401969096525050608081019290925260a0909101529392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156127bf576127bf612796565b500190565b6080815260006127d76080830187612627565b82810360208401526127e9818761266b565b905082810360408401526127fd818661269b565b91505082606083015295945050505050565b84815260ff84166020820152826040820152608060608201526000610b946080830184611f6a565b60006020828403121561284957600080fd5b81518015158114610c8a57600080fd5b600081600019048311821515161561287357612873612796565b500290565b60008261289557634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156128ac576128ac612796565b500390565b60208082526021908201527f476f7665726e6f723a20696e76616c69642070726f706f73616c206c656e67746040820152600d60fb1b606082015260800190565b60006001600160401b0380831681851680830382111561291457612914612796565b01949350505050565b60006101208b8352602060018060a01b038c16818501528160408501526129468285018c612627565b9150838203606085015261295a828b61266b565b915083820360808501528189518084528284019150828160051b850101838c0160005b838110156129ab57601f19878403018552612999838351611f6a565b9486019492509085019060010161297d565b505086810360a08801526129bf818c61269b565b9450505050506129da60c08401876001600160401b03169052565b6001600160401b03851660e08401528281036101008401526129fc8185611f6a565b9c9b505050505050505050505050565b60008251612a1e818460208701611f3a565b919091019291505056fe416464726573733a206c6f772d6c6576656c2063616c6c20776974682076616c7565206661696c6564a26469706673582212202d1de5f05e33f1d2cf936a8d65ae27a261b5d544ca5eb1024221235ca15ce71b64736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
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
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): MyGovernor2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MyGovernor2;
}
//# sourceMappingURL=MyGovernor2__factory.d.ts.map