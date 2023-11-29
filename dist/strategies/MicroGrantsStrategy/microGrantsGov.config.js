"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bytecode = exports.abi = void 0;
exports.abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_allo",
                type: "address",
            },
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "ALLOCATION_ACTIVE",
        type: "error",
    },
    {
        inputs: [],
        name: "ALLOCATION_NOT_ACTIVE",
        type: "error",
    },
    {
        inputs: [],
        name: "ALLOCATION_NOT_ENDED",
        type: "error",
    },
    {
        inputs: [],
        name: "ALREADY_INITIALIZED",
        type: "error",
    },
    {
        inputs: [],
        name: "AMOUNT_MISMATCH",
        type: "error",
    },
    {
        inputs: [],
        name: "AMOUNT_TOO_LOW",
        type: "error",
    },
    {
        inputs: [],
        name: "ANCHOR_ERROR",
        type: "error",
    },
    {
        inputs: [],
        name: "ARRAY_MISMATCH",
        type: "error",
    },
    {
        inputs: [],
        name: "EXCEEDING_MAX_AMOUNT",
        type: "error",
    },
    {
        inputs: [],
        name: "INVALID",
        type: "error",
    },
    {
        inputs: [],
        name: "INVALID_ADDRESS",
        type: "error",
    },
    {
        inputs: [],
        name: "INVALID_FEE",
        type: "error",
    },
    {
        inputs: [],
        name: "INVALID_METADATA",
        type: "error",
    },
    {
        inputs: [],
        name: "INVALID_REGISTRATION",
        type: "error",
    },
    {
        inputs: [],
        name: "IS_APPROVED_STRATEGY",
        type: "error",
    },
    {
        inputs: [],
        name: "MISMATCH",
        type: "error",
    },
    {
        inputs: [],
        name: "NONCE_NOT_AVAILABLE",
        type: "error",
    },
    {
        inputs: [],
        name: "NOT_APPROVED_STRATEGY",
        type: "error",
    },
    {
        inputs: [],
        name: "NOT_ENOUGH_FUNDS",
        type: "error",
    },
    {
        inputs: [],
        name: "NOT_IMPLEMENTED",
        type: "error",
    },
    {
        inputs: [],
        name: "NOT_INITIALIZED",
        type: "error",
    },
    {
        inputs: [],
        name: "NOT_PENDING_OWNER",
        type: "error",
    },
    {
        inputs: [],
        name: "POOL_ACTIVE",
        type: "error",
    },
    {
        inputs: [],
        name: "POOL_INACTIVE",
        type: "error",
    },
    {
        inputs: [],
        name: "RECIPIENT_ALREADY_ACCEPTED",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
        ],
        name: "RECIPIENT_ERROR",
        type: "error",
    },
    {
        inputs: [],
        name: "RECIPIENT_NOT_ACCEPTED",
        type: "error",
    },
    {
        inputs: [],
        name: "REGISTRATION_NOT_ACTIVE",
        type: "error",
    },
    {
        inputs: [],
        name: "UNAUTHORIZED",
        type: "error",
    },
    {
        inputs: [],
        name: "ZERO_ADDRESS",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "enum IStrategy.Status",
                name: "status",
                type: "uint8",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "Allocated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "Allocated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "approvalThreshold",
                type: "uint256",
            },
        ],
        name: "ApprovalThresholdUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "recipientAddress",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "Distributed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "poolId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
        ],
        name: "Initialized",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "maxRequestedAmount",
                type: "uint256",
            },
        ],
        name: "MaxRequestedAmountIncreased",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bool",
                name: "active",
                type: "bool",
            },
        ],
        name: "PoolActive",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "Registered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "allocationStartTime",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "allocationEndTime",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "TimestampsUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "UpdatedRegistration",
        type: "event",
    },
    {
        inputs: [],
        name: "NATIVE",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "_sender",
                type: "address",
            },
        ],
        name: "allocate",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "allocated",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "allocationEndTime",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "allocationStartTime",
        outputs: [
            {
                internalType: "uint64",
                name: "",
                type: "uint64",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "approvalThreshold",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_recipientIds",
                type: "address[]",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "_sender",
                type: "address",
            },
        ],
        name: "distribute",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "getAllo",
        outputs: [
            {
                internalType: "contract IAllo",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_recipientIds",
                type: "address[]",
            },
            {
                internalType: "bytes[]",
                name: "_data",
                type: "bytes[]",
            },
        ],
        name: "getPayouts",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "recipientAddress",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                ],
                internalType: "struct IStrategy.PayoutSummary[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getPoolAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getPoolId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_recipientId",
                type: "address",
            },
        ],
        name: "getRecipient",
        outputs: [
            {
                components: [
                    {
                        internalType: "bool",
                        name: "useRegistryAnchor",
                        type: "bool",
                    },
                    {
                        internalType: "address",
                        name: "recipientAddress",
                        type: "address",
                    },
                    {
                        internalType: "uint256",
                        name: "requestedAmount",
                        type: "uint256",
                    },
                    {
                        internalType: "enum IStrategy.Status",
                        name: "recipientStatus",
                        type: "uint8",
                    },
                    {
                        components: [
                            {
                                internalType: "uint256",
                                name: "protocol",
                                type: "uint256",
                            },
                            {
                                internalType: "string",
                                name: "pointer",
                                type: "string",
                            },
                        ],
                        internalType: "struct Metadata",
                        name: "metadata",
                        type: "tuple",
                    },
                ],
                internalType: "struct MicroGrantsBaseStrategy.Recipient",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_recipientId",
                type: "address",
            },
        ],
        name: "getRecipientStatus",
        outputs: [
            {
                internalType: "enum IStrategy.Status",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getStrategyId",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "gov",
        outputs: [
            {
                internalType: "contract UniversalGov",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "govType",
        outputs: [
            {
                internalType: "enum MicroGrantsGovStrategy.GovType",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_maxRequestedAmount",
                type: "uint256",
            },
        ],
        name: "increaseMaxRequestedAmount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "increasePoolAmount",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_poolId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "isPoolActive",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_allocator",
                type: "address",
            },
        ],
        name: "isValidAllocator",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "maxRequestedAmount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "minVotePower",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
            {
                internalType: "enum IStrategy.Status",
                name: "",
                type: "uint8",
            },
        ],
        name: "recipientAllocations",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
            {
                internalType: "address",
                name: "_sender",
                type: "address",
            },
        ],
        name: "registerRecipient",
        outputs: [
            {
                internalType: "address",
                name: "recipientId",
                type: "address",
            },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_approvalThreshold",
                type: "uint256",
            },
        ],
        name: "setApprovalThreshold",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "snapshotReference",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "_allocationStartTime",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "_allocationEndTime",
                type: "uint64",
            },
        ],
        name: "updatePoolTimestamps",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "useRegistryAnchor",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
exports.bytecode = "0x60c06040523480156200001157600080fd5b50604051620028c1380380620028c18339810160408190526200003491620000c5565b6001600160a01b03821660805260405182908290829082906200005c908290602001620001a0565b60408051601f19818403018152919052805160209091012060a0525050600160035550620001d592505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000bc578181015183820152602001620000a2565b50506000910152565b60008060408385031215620000d957600080fd5b82516001600160a01b0381168114620000f157600080fd5b60208401519092506001600160401b03808211156200010f57600080fd5b818501915085601f8301126200012457600080fd5b81518181111562000139576200013962000089565b604051601f8201601f19908116603f0116810190838211818310171562000164576200016462000089565b816040528281528860208487010111156200017e57600080fd5b620001918360208301602088016200009f565b80955050505050509250929050565b6020815260008251806020840152620001c18160408501602087016200009f565b601f01601f19169190910160400192915050565b60805160a0516126aa62000217600039600061033801526000818161024b01528181610a6801528181610f24015281816113ec015261169f01526126aa6000f3fe6080604052600436106101d15760003560e01c80636f46ffb9116100f7578063ba539f8f11610095578063eb11af9311610064578063eb11af931461059b578063edd146cc146105c8578063ef2920fc146105e8578063f5b0dfb7146105fb57600080fd5b8063ba539f8f14610529578063bfa807311461053f578063d2e17f591461055f578063df868ed31461058657600080fd5b806399557126116100d1578063995571261461049e578063a0016b8c146104b4578063a0cf0aea146104d4578063b2b878d0146104fc57600080fd5b80636f46ffb91461043057806375777aaa146104685780637d0eef611461048857600080fd5b806341065f7a1161016f5780634d31d0871161013e5780634d31d087146103a957806351cff8d9146103c957806357089739146103e957806362812a391461040357600080fd5b806341065f7a1461031357806342fda9c7146103295780634533d6781461035c5780634ab4ba421461039457600080fd5b80632b302cbd116101ab5780632b302cbd1461026f5780632bbe0cae146102ba57806336f2e56b146102cd57806338fff2d0146102f457600080fd5b80630a6f0ee9146101dd57806312d43a51146101ff57806315cc481e1461023c57600080fd5b366101d857005b600080fd5b3480156101e957600080fd5b506101fd6101f8366004611c17565b61061b565b005b34801561020b57600080fd5b50600b5461021f906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561024857600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061021f565b34801561027b57600080fd5b506102aa61028a366004611c8e565b600960209081526000928352604080842090915290825290205460ff1681565b6040519015158152602001610233565b61021f6102c8366004611cc7565b61063b565b3480156102d957600080fd5b50600e546102e79060ff1681565b6040516102339190611d23565b34801561030057600080fd5b506001545b604051908152602001610233565b34801561031f57600080fd5b50610305600c5481565b34801561033557600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610305565b34801561036857600080fd5b5060055461037c906001600160401b031681565b6040516001600160401b039091168152602001610233565b3480156103a057600080fd5b50600254610305565b3480156103b557600080fd5b506102aa6103c4366004611d3d565b610660565b3480156103d557600080fd5b506101fd6103e4366004611d3d565b61066b565b3480156103f557600080fd5b506004546102aa9060ff1681565b34801561040f57600080fd5b5061042361041e366004611d3d565b610696565b6040516102339190611dc5565b34801561043c57600080fd5b5061030561044b366004611e3c565b600a60209081526000928352604080842090915290825290205481565b34801561047457600080fd5b506101fd610483366004611e7f565b6106a7565b34801561049457600080fd5b5061030560075481565b3480156104aa57600080fd5b50610305600d5481565b3480156104c057600080fd5b506101fd6104cf366004611ead565b6106bb565b3480156104e057600080fd5b5061021f73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561050857600080fd5b5061051c610517366004611ec6565b6106d2565b6040516102339190611f9a565b34801561053557600080fd5b5061030560065481565b34801561054b57600080fd5b506101fd61055a366004611ead565b6107d0565b34801561056b57600080fd5b5060045461037c90600160a81b90046001600160401b031681565b34801561059257600080fd5b506102aa6107e3565b3480156105a757600080fd5b506105bb6105b6366004611d3d565b6107f2565b6040516102339190611ff2565b3480156105d457600080fd5b506101fd6105e3366004612000565b6107fd565b6101fd6105f6366004611cc7565b610a0f565b34801561060757600080fd5b506101fd610616366004611ead565b610a33565b610623610a5d565b61062b610aa8565b610636838383610acb565b505050565b6000610645610a5d565b61064d610aa8565b6106578383610ad3565b90505b92915050565b600061065a82610da8565b3361067581610efa565b61067d610fac565b60006106898330610fd0565b9050610636833383611019565b61069e611a3c565b61065a82611053565b336106b181610efa565b61063683836111cf565b336106c581610efa565b6106ce82611268565b5050565b815181516060919081146106f957604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b0381111561071357610713611a85565b60405190808252806020026020018201604052801561075857816020015b60408051808201909152600080825260208201528152602001906001900390816107315790505b50905060005b828110156107c7576107a286828151811061077b5761077b612046565b602002602001015186838151811061079557610795612046565b60200260200101516112a4565b8282815181106107b4576107b4612046565b602090810291909101015260010161075e565b50949350505050565b336107da81610efa565b6106ce82611312565b60006107ed61136a565b905090565b600061065a826113a9565b600080600080848060200190518101906108179190612077565b935093509350935061082986856113be565b6001600160a01b03831663782d6fe16104d2610846600a43612142565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381865afa9250505080156108ab575060408051601f3d908101601f191682019092526108a891810190612155565b60015b610963576001600160a01b038316633a46b1a86104d26108ce6201518042612142565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381865afa925050508015610933575060408051601f3d908101601f1916820190925261093091810190612183565b60015b61095057604051635963709b60e01b815260040160405180910390fd5b50600e805460ff19166002179055610972565b50600e805460ff191660011790555b600b805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0385161790558115806109a5575080155b156109c357604051637fcce2a960e01b815260040160405180910390fd5b600c829055600d8190556040517f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a906109ff908890889061219c565b60405180910390a1505050505050565b610a17610a5d565b610a1f610aa8565b610a2982826114b3565b6106ce82826114d9565b610a3b610a5d565b8060026000828254610a4d91906121b5565b90915550610a5a90508181565b50565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610aa65760405163075fd2b160e01b815260040160405180910390fd5b565b600154600003610aa657604051630f68fe6360e21b815260040160405180910390fd5b6106366121c8565b6000806000806000610af8604051806040016040528060008152602001606081525090565b87806020019051810190610b0c9190612291565b600454929750929550935090915060ff1680610b3057506001600160a01b03831615155b945084610b3d5786610b3f565b825b9550848015610b555750610b5386886117bd565b155b15610b735760405163075fd2b160e01b815260040160405180910390fd5b6020810151511580610b8457508051155b15610ba25760405163c19e07c560e01b815260040160405180910390fd5b600654821115610bc5576040516351c7ab5160e01b815260040160405180910390fd5b81600003610bd35760065491505b6001600160a01b038416610c0a5760405163f4a513b960e01b81526001600160a01b03871660048201526024015b60405180910390fd5b6001600160a01b0386166000908152600860209081526040808320600a83528184206002855290925290912054151580610c6757506001600160a01b0387166000908152600a602090815260408083206003845290915290205415155b15610c855760405163075fd2b160e01b815260040160405180910390fd5b6000600282015460ff166006811115610ca057610ca0611d0d565b03610ced57866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc628a8a604051610ce09291906122fe565b60405180910390a2610d31565b866001600160a01b03167faf5977db3aa7e6fc7d05e21c791ebd214afa76da27c8d8ddc8e4a9f742d7b2368a8a604051610d289291906122fe565b60405180910390a25b805474ffffffffffffffffffffffffffffffffffffffffff19166101006001600160a01b0387160260ff1916178615151781556001810183905581516003820190815560208301518391906004840190610d8b90826123b1565b505050600201805460ff1916600117905550939695505050505050565b6000806001600e5460ff166002811115610dc457610dc4611d0d565b03610e5657600b54600c5460405163782d6fe160e01b81526001600160a01b038681166004830152602482019290925291169063782d6fe190604401602060405180830381865afa158015610e1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e419190612155565b6bffffffffffffffffffffffff169050610eef565b6002600e5460ff166002811115610e6f57610e6f611d0d565b03610eef57600b54600c54604051630748d63560e31b81526001600160a01b0386811660048301526024820192909252911690633a46b1a890604401602060405180830381865afa158015610ec8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eec9190612183565b90505b600d54111592915050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015610f6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8f9190612470565b610a5a5760405163075fd2b160e01b815260040160405180910390fd5b60005460ff1615610aa657604051630b18626760e41b815260040160405180910390fd5b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b0384160161100857506001600160a01b0381163161065a565b61101283836118bf565b905061065a565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b038416016110485761063682826118f4565b610636838383611910565b61105b611a3c565b6001600160a01b03808316600090815260086020908152604091829020825160a081018452815460ff80821615158352610100909104909516928101929092526001810154928201929092526002820154909260608401911660068111156110c5576110c5611d0d565b60068111156110d6576110d6611d0d565b8152602001600382016040518060400160405290816000820154815260200160018201805461110490612329565b80601f016020809104026020016040519081016040528092919081815260200182805461113090612329565b801561117d5780601f106111525761010080835404028352916020019161117d565b820191906000526020600020905b81548152906001019060200180831161116057829003601f168201915b505050919092525050509052506005549091506001600160401b0316421180156111bd57506002816060015160068111156111ba576111ba611d0d565b14155b156111ca57600360608201525b919050565b6111d9828261195f565b600480546001600160401b03848116600160a81b90810267ffffffffffffffff60a81b1990931692909217928390556005805485831667ffffffffffffffff199091168117909155604080519390940490911682526020820152338183015290517f70d34c8836b996cffd8970ba5edf940d83ca7c8f30f738ea4fd8566a37d933599181900360600190a15050565b60078190556040518181527f3105a3dc553e12034caac9827a83c245fe17eef4ee1eedb45238ac7449a5bbec906020015b60405180910390a150565b604080518082019091526000808252602082015260006112c384611053565b60408101519091506002826060015160068111156112e3576112e3611d0d565b036112ec575060005b604080518082019091526020928301516001600160a01b03168152918201529392505050565b60065481101561133557604051631f2d84f160e31b815260040160405180910390fd5b60068190556040518181527fbcd4e1b1c11d47ad4c6c51ad73d8e77d29313bc1a491330186316a74a1f995f490602001611299565b60045460009042600160a81b9091046001600160401b0316118061139857506005546001600160401b031642115b156113a35750600090565b50600190565b60006113b482611053565b6060015192915050565b6113c7826119a5565b80516004805460ff191691151591909117815560408051635ab1bd5360e01b815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd53928082019260209290918290030181865afa15801561143d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611461919061248b565b600460016101000a8154816001600160a01b0302191690836001600160a01b03160217905550611499816020015182604001516111cf565b6114a68160800151611312565b6106ce8160600151611268565b6114bc81610da8565b6106ce5760405163075fd2b160e01b815260040160405180910390fd5b6114e16119f4565b600080838060200190518101906114f891906124a8565b6001600160a01b038083166000818152600860209081526040808320948a1683526009825280832093835292905220549294509092509060ff1680611554575060028082015460ff16600681111561155257611552611d0d565b145b1561157d5760405163f4a513b960e01b81526001600160a01b0384166004820152602401610c01565b6001600160a01b0380851660009081526009602090815260408083209387168352928152828220805460ff19166001908117909155600a909152918120908460068111156115cd576115cd611d0d565b60068111156115de576115de611d0d565b815260200190815260200160002060008282546115fb91906121b5565b92505081905550826001600160a01b03167fb735720d94de3d169791e2f713cbac8da02eb4d5a344d5a6d5ef542fdf3b2438838660405161163d9291906124d7565b60405180910390a26007546001600160a01b0384166000908152600a6020908152604080832060028452909152902054036117b6576002818101805460ff1916909117905560015460405163068bcd8d60e01b815260048101919091526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063068bcd8d90602401600060405180830381865afa1580156116ee573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261171691908101906124fb565b905060008260010154905080600260008282546117339190612142565b909155505060408201518354611758919061010090046001600160a01b031683611019565b82546001840154604080516001600160a01b036101009094048416815260208101929092528883168282015251918716917fb5b51454adfa840bd593658325a60a50b0216f12eb5d2937efe6cea935675b7d9181900360600190a250505b5050505050565b6004805460405163dd93da4360e01b81526001600160a01b038581169382019390935260009283926101009004169063dd93da4390602401600060405180830381865afa158015611812573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261183a91908101906125ae565b600480548251604051635e8a791560e01b8152928301526001600160a01b038681166024840152929350610100900490911690635e8a791590604401602060405180830381865afa158015611893573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118b79190612470565b949350505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af16106ce5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611955576390b8ec186000526004601cfd5b6000603452505050565b816001600160401b03164211806119875750806001600160401b0316826001600160401b0316115b156106ce57604051637fcce2a960e01b815260040160405180910390fd5b6119ad610a5d565b600154156119ce5760405163439a74c960e01b815260040160405180910390fd5b806000036119ef57604051637fcce2a960e01b815260040160405180910390fd5b600155565b60045442600160a81b9091046001600160401b03161180611a1f57506005546001600160401b031642115b15610aa65760405162b828c960e81b815260040160405180910390fd5b6040805160a0810182526000808252602082018190529181018290529060608201908152602001611a80604051806040016040528060008152602001606081525090565b905290565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b0381118282101715611abd57611abd611a85565b60405290565b604051601f8201601f191681016001600160401b0381118282101715611aeb57611aeb611a85565b604052919050565b60006001600160401b03821115611b0c57611b0c611a85565b5060051b60200190565b6001600160a01b0381168114610a5a57600080fd5b600082601f830112611b3c57600080fd5b81356020611b51611b4c83611af3565b611ac3565b82815260059290921b84018101918181019086841115611b7057600080fd5b8286015b84811015611b94578035611b8781611b16565b8352918301918301611b74565b509695505050505050565b60006001600160401b03821115611bb857611bb8611a85565b50601f01601f191660200190565b600082601f830112611bd757600080fd5b8135611be5611b4c82611b9f565b818152846020838601011115611bfa57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215611c2c57600080fd5b83356001600160401b0380821115611c4357600080fd5b611c4f87838801611b2b565b94506020860135915080821115611c6557600080fd5b50611c7286828701611bc6565b9250506040840135611c8381611b16565b809150509250925092565b60008060408385031215611ca157600080fd5b8235611cac81611b16565b91506020830135611cbc81611b16565b809150509250929050565b60008060408385031215611cda57600080fd5b82356001600160401b03811115611cf057600080fd5b611cfc85828601611bc6565b9250506020830135611cbc81611b16565b634e487b7160e01b600052602160045260246000fd5b6020810160038310611d3757611d37611d0d565b91905290565b600060208284031215611d4f57600080fd5b8135611d5a81611b16565b9392505050565b60078110611d7157611d71611d0d565b9052565b60005b83811015611d90578181015183820152602001611d78565b50506000910152565b60008151808452611db1816020860160208601611d75565b601f01601f19169290920160200192915050565b602081528151151560208201526001600160a01b0360208301511660408201526040820151606082015260006060830151611e036080840182611d61565b50608083015160a083810152805160c084015260200151604060e08401526118b7610100840182611d99565b60078110610a5a57600080fd5b60008060408385031215611e4f57600080fd5b8235611e5a81611b16565b91506020830135611cbc81611e2f565b6001600160401b0381168114610a5a57600080fd5b60008060408385031215611e9257600080fd5b8235611e9d81611e6a565b91506020830135611cbc81611e6a565b600060208284031215611ebf57600080fd5b5035919050565b60008060408385031215611ed957600080fd5b82356001600160401b0380821115611ef057600080fd5b611efc86838701611b2b565b9350602091508185013581811115611f1357600080fd5b8501601f81018713611f2457600080fd5b8035611f32611b4c82611af3565b81815260059190911b82018401908481019089831115611f5157600080fd5b8584015b83811015611f8957803586811115611f6d5760008081fd5b611f7b8c8983890101611bc6565b845250918601918601611f55565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b82811015611fe557815180516001600160a01b03168552860151868501529284019290850190600101611fb7565b5091979650505050505050565b6020810161065a8284611d61565b6000806040838503121561201357600080fd5b8235915060208301356001600160401b0381111561203057600080fd5b61203c85828601611bc6565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b805180151581146111ca57600080fd5b80516111ca81611b16565b60008060008084860361010081121561208f57600080fd5b60a081121561209d57600080fd5b5060405160a081018181106001600160401b03821117156120c0576120c0611a85565b6040526120cc8661205c565b815260208601516120dc81611e6a565b602082015260408601516120ef81611e6a565b60408201526060868101519082015260808087015190820152935061211660a0860161206c565b60c086015160e090960151949790965092505050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561065a5761065a61212c565b60006020828403121561216757600080fd5b81516bffffffffffffffffffffffff81168114611d5a57600080fd5b60006020828403121561219557600080fd5b5051919050565b8281526040602082015260006118b76040830184611d99565b8082018082111561065a5761065a61212c565b634e487b7160e01b600052600160045260246000fd5b600082601f8301126121ef57600080fd5b81516121fd611b4c82611b9f565b81815284602083860101111561221257600080fd5b6118b7826020830160208701611d75565b60006040828403121561223557600080fd5b604051604081016001600160401b03828210818311171561225857612258611a85565b8160405282935084518352602085015191508082111561227757600080fd5b50612284858286016121de565b6020830152505092915050565b600080600080608085870312156122a757600080fd5b84516122b281611b16565b60208601519094506122c381611b16565b6040860151606087015191945092506001600160401b038111156122e657600080fd5b6122f287828801612223565b91505092959194509250565b6040815260006123116040830185611d99565b90506001600160a01b03831660208301529392505050565b600181811c9082168061233d57607f821691505b60208210810361235d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561063657600081815260208120601f850160051c8101602086101561238a5750805b601f850160051c820191505b818110156123a957828155600101612396565b505050505050565b81516001600160401b038111156123ca576123ca611a85565b6123de816123d88454612329565b84612363565b602080601f83116001811461241357600084156123fb5750858301515b600019600386901b1c1916600185901b1785556123a9565b600085815260208120601f198616915b8281101561244257888601518255948401946001909101908401612423565b50858210156124605787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020828403121561248257600080fd5b611d5a8261205c565b60006020828403121561249d57600080fd5b8151611d5a81611b16565b600080604083850312156124bb57600080fd5b82516124c681611b16565b6020840151909250611cbc81611e2f565b604081016124e58285611d61565b6001600160a01b03831660208301529392505050565b60006020828403121561250d57600080fd5b81516001600160401b038082111561252457600080fd5b9083019060c0828603121561253857600080fd5b612540611a9b565b82518152602083015161255281611b16565b6020820152604083015161256581611b16565b604082015260608301518281111561257c57600080fd5b61258887828601612223565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b6000602082840312156125c057600080fd5b81516001600160401b03808211156125d757600080fd5b9083019060c082860312156125eb57600080fd5b6125f3611a9b565b825181526020830151602082015260408301518281111561261357600080fd5b61261f878286016121de565b60408301525060608301518281111561263757600080fd5b61264387828601612223565b6060830152506126556080840161206c565b608082015261266660a0840161206c565b60a08201529594505050505056fea2646970667358221220e495be9c077b40822dc9fd44f182df7057fd2a1a2a9e2efe9aa9851f45b5d37e64736f6c63430008130033";
