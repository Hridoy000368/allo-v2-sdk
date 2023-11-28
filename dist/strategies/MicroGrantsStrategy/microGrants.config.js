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
                indexed: true,
                internalType: "address",
                name: "allocator",
                type: "address",
            },
            {
                indexed: true,
                internalType: "bool",
                name: "_flag",
                type: "bool",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "AllocatorSet",
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
                name: "maxRequestedAmountAllowed",
                type: "uint256",
            },
        ],
        name: "maxRequestedAmountAllowedIncreased",
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
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "allocators",
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
                name: "_allocators",
                type: "address[]",
            },
            {
                internalType: "bool[]",
                name: "_flags",
                type: "bool[]",
            },
        ],
        name: "batchSetAllocator",
        outputs: [],
        stateMutability: "nonpayable",
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
                internalType: "struct MicroGrantsStrategy.Recipient",
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
        inputs: [
            {
                internalType: "uint256",
                name: "_maxRequestedAmountAllowed",
                type: "uint256",
            },
        ],
        name: "increasemaxRequestedAmountAllowed",
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
        name: "maxRequestedAmountAllowed",
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
                internalType: "address",
                name: "_allocator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "_flag",
                type: "bool",
            },
        ],
        name: "setAllocator",
        outputs: [],
        stateMutability: "nonpayable",
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
exports.bytecode = "0x60c06040523480156200001157600080fd5b506040516200270b3803806200270b8339810160408190526200003491620000bf565b6001600160a01b03821660805260405182908290620000589082906020016200019a565b60408051601f19818403018152919052805160209091012060a0525050600160035550620001cf9050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000b65781810151838201526020016200009c565b50506000910152565b60008060408385031215620000d357600080fd5b82516001600160a01b0381168114620000eb57600080fd5b60208401519092506001600160401b03808211156200010957600080fd5b818501915085601f8301126200011e57600080fd5b81518181111562000133576200013362000083565b604051601f8201601f19908116603f011681019083821181831017156200015e576200015e62000083565b816040528281528860208487010111156200017857600080fd5b6200018b83602083016020880162000099565b80955050505050509250929050565b6020815260008251806020840152620001bb81604085016020870162000099565b601f01601f19169190910160400192915050565b60805160a0516124fa6200021160003960006102fc0152600081816102480152818161092601528181610c90015281816111ba015261148001526124fa6000f3fe6080604052600436106101c65760003560e01c806375777aaa116100f7578063ba539f8f11610095578063eb11af9311610064578063eb11af9314610589578063edd146cc146105b6578063ef2920fc146105d6578063f5b0dfb7146105e957600080fd5b8063ba539f8f14610517578063bfa807311461052d578063d2e17f591461054d578063df868ed31461057457600080fd5b8063a0016b8c116100d1578063a0016b8c14610482578063a0cf0aea146104a2578063a15acfd5146104ca578063b2b878d0146104ea57600080fd5b806375777aaa1461042c5780637d0eef611461044c57806380faddeb1461046257600080fd5b80634533d6781161016457806351cff8d91161013e57806351cff8d91461038d57806357089739146103ad57806362812a39146103c75780636f46ffb9146103f457600080fd5b80634533d678146103205780634ab4ba42146103585780634d31d0871461036d57600080fd5b80632b302cbd116101a05780632b302cbd146102805780632bbe0cae146102bb57806338fff2d0146102ce57806342fda9c7146102ed57600080fd5b8063084ea36e146101d25780630a6f0ee91461021757806315cc481e1461023957600080fd5b366101cd57005b600080fd5b3480156101de57600080fd5b506102026101ed36600461187a565b60096020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b34801561022357600080fd5b50610237610232366004611a1b565b610609565b005b34801561024557600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b03909116815260200161020e565b34801561028c57600080fd5b5061020261029b366004611a92565b600a60209081526000928352604080842090915290825290205460ff1681565b6102686102c9366004611acb565b610629565b3480156102da57600080fd5b506001545b60405190815260200161020e565b3480156102f957600080fd5b507f00000000000000000000000000000000000000000000000000000000000000006102df565b34801561032c57600080fd5b50600554610340906001600160401b031681565b6040516001600160401b03909116815260200161020e565b34801561036457600080fd5b506002546102df565b34801561037957600080fd5b5061020261038836600461187a565b61064e565b34801561039957600080fd5b506102376103a836600461187a565b61066f565b3480156103b957600080fd5b506004546102029060ff1681565b3480156103d357600080fd5b506103e76103e236600461187a565b61069a565b60405161020e9190611b99565b34801561040057600080fd5b506102df61040f366004611c10565b600b60209081526000928352604080842090915290825290205481565b34801561043857600080fd5b50610237610447366004611c53565b6106ab565b34801561045857600080fd5b506102df60075481565b34801561046e57600080fd5b5061023761047d366004611c8f565b6106bf565b34801561048e57600080fd5b5061023761049d366004611cbd565b6106d3565b3480156104ae57600080fd5b5061026873eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b3480156104d657600080fd5b506102376104e5366004611cd6565b6106ea565b3480156104f657600080fd5b5061050a610505366004611d99565b61074c565b60405161020e9190611e6d565b34801561052357600080fd5b506102df60065481565b34801561053957600080fd5b50610237610548366004611cbd565b61084a565b34801561055957600080fd5b5060045461034090600160a81b90046001600160401b031681565b34801561058057600080fd5b5061020261085d565b34801561059557600080fd5b506105a96105a436600461187a565b61086c565b60405161020e9190611ec5565b3480156105c257600080fd5b506102376105d1366004611ed3565b610877565b6102376105e4366004611acb565b6108d7565b3480156105f557600080fd5b50610237610604366004611cbd565b6108f1565b61061161091b565b610619610966565b610624838383610989565b505050565b600061063361091b565b61063b610966565b6106458383610991565b90505b92915050565b6001600160a01b03811660009081526009602052604081205460ff16610648565b3361067981610c66565b610681610d18565b600061068d8330610d3c565b9050610624833383610d85565b6106a261181c565b61064882610dbf565b336106b581610c66565b6106248383610f3b565b336106c981610c66565b6106248383610fd4565b336106dd81610c66565b6106e682611036565b5050565b336106f481610c66565b825160005b818110156107455761073d85828151811061071657610716611f19565b602002602001015185838151811061073057610730611f19565b6020026020010151610fd4565b6001016106f9565b5050505050565b8151815160609190811461077357604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b0381111561078d5761078d61189e565b6040519080825280602002602001820160405280156107d257816020015b60408051808201909152600080825260208201528152602001906001900390816107ab5790505b50905060005b828110156108415761081c8682815181106107f5576107f5611f19565b602002602001015186838151811061080f5761080f611f19565b6020026020010151611072565b82828151811061082e5761082e611f19565b60209081029190910101526001016107d8565b50949350505050565b3361085481610c66565b6106e6826110e0565b6000610867611138565b905090565b600061064882611177565b60008180602001905181019061088d9190611f2f565b9050610899838261118c565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a83836040516108ca929190611fb6565b60405180910390a1505050565b6108df61091b565b6108e7610966565b6106e68282611281565b6108f961091b565b806002600082825461090b9190611fe5565b9091555061091890508181565b50565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109645760405163075fd2b160e01b815260040160405180910390fd5b565b60015460000361096457604051630f68fe6360e21b815260040160405180910390fd5b610624611ff8565b60008060008060006109b6604051806040016040528060008152602001606081525090565b878060200190518101906109ca91906120c1565b600454929750929550935090915060ff16806109ee57506001600160a01b03831615155b9450846109fb57866109fd565b825b9550848015610a135750610a11868861159d565b155b15610a315760405163075fd2b160e01b815260040160405180910390fd5b6020810151511580610a4257508051155b15610a605760405163c19e07c560e01b815260040160405180910390fd5b600654821115610a83576040516351c7ab5160e01b815260040160405180910390fd5b81600003610a915760065491505b6001600160a01b038416610ac85760405163f4a513b960e01b81526001600160a01b03871660048201526024015b60405180910390fd5b6001600160a01b0386166000908152600860209081526040808320600b83528184206002855290925290912054151580610b2557506001600160a01b0387166000908152600b602090815260408083206003845290915290205415155b15610b435760405163075fd2b160e01b815260040160405180910390fd5b6000600282015460ff166006811115610b5e57610b5e611b11565b03610bab57866001600160a01b03167fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc628a8a604051610b9e92919061212e565b60405180910390a2610bef565b866001600160a01b03167faf5977db3aa7e6fc7d05e21c791ebd214afa76da27c8d8ddc8e4a9f742d7b2368a8a604051610be692919061212e565b60405180910390a25b805474ffffffffffffffffffffffffffffffffffffffffff19166101006001600160a01b0387160260ff1916178615151781556001810183905581516003820190815560208301518391906004840190610c4990826121e1565b505050600201805460ff1916600117905550939695505050505050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015610cd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfb91906122a0565b6109185760405163075fd2b160e01b815260040160405180910390fd5b60005460ff161561096457604051630b18626760e41b815260040160405180910390fd5b600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601610d7457506001600160a01b03811631610648565b610d7e838361169f565b9050610648565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601610db45761062482826116d4565b6106248383836116f0565b610dc761181c565b6001600160a01b03808316600090815260086020908152604091829020825160a081018452815460ff8082161515835261010090910490951692810192909252600181015492820192909252600282015490926060840191166006811115610e3157610e31611b11565b6006811115610e4257610e42611b11565b81526020016003820160405180604001604052908160008201548152602001600182018054610e7090612159565b80601f0160208091040260200160405190810160405280929190818152602001828054610e9c90612159565b8015610ee95780601f10610ebe57610100808354040283529160200191610ee9565b820191906000526020600020905b815481529060010190602001808311610ecc57829003601f168201915b505050919092525050509052506005549091506001600160401b031642118015610f295750600281606001516006811115610f2657610f26611b11565b14155b15610f3657600360608201525b919050565b610f45828261173f565b600480546001600160401b03848116600160a81b90810267ffffffffffffffff60a81b1990931692909217928390556005805485831667ffffffffffffffff199091168117909155604080519390940490911682526020820152338183015290517f70d34c8836b996cffd8970ba5edf940d83ca7c8f30f738ea4fd8566a37d933599181900360600190a15050565b6001600160a01b038216600081815260096020908152604091829020805460ff191685151590811790915591513381529192917fb50515ac68c6752ce8d118ee9c125360859a03dcb13a0cfb6b3faad68217f4bd910160405180910390a35050565b60078190556040518181527f3105a3dc553e12034caac9827a83c245fe17eef4ee1eedb45238ac7449a5bbec906020015b60405180910390a150565b6040805180820190915260008082526020820152600061109184610dbf565b60408101519091506002826060015160068111156110b1576110b1611b11565b036110ba575060005b604080518082019091526020928301516001600160a01b03168152918201529392505050565b60065481101561110357604051631f2d84f160e31b815260040160405180910390fd5b60068190556040518181527fbcd4e1b1c11d47ad4c6c51ad73d8e77d29313bc1a491330186316a74a1f995f490602001611067565b60045460009042600160a81b9091046001600160401b0316118061116657506005546001600160401b031642115b156111715750600090565b50600190565b600061118282610dbf565b6060015192915050565b61119582611785565b80516004805460ff191691151591909117815560408051635ab1bd5360e01b815290517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031692635ab1bd53928082019260209290918290030181865afa15801561120b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122f91906122bd565b600460016101000a8154816001600160a01b0302191690836001600160a01b0316021790555061126781602001518260400151610f3b565b61127481608001516110e0565b6106e68160600151611036565b6112896117d4565b6001600160a01b03811660009081526009602052604090205460ff166112c25760405163075fd2b160e01b815260040160405180910390fd5b600080838060200190518101906112d991906122da565b6001600160a01b038083166000818152600860209081526040808320948a168352600a825280832093835292905220549294509092509060ff1680611335575060028082015460ff16600681111561133357611333611b11565b145b1561135e5760405163f4a513b960e01b81526001600160a01b0384166004820152602401610abf565b6001600160a01b038085166000908152600a602090815260408083209387168352928152828220805460ff19166001908117909155600b909152918120908460068111156113ae576113ae611b11565b60068111156113bf576113bf611b11565b815260200190815260200160002060008282546113dc9190611fe5565b92505081905550826001600160a01b03167fb735720d94de3d169791e2f713cbac8da02eb4d5a344d5a6d5ef542fdf3b2438838660405161141e929190612309565b60405180910390a26007546001600160a01b0384166000908152600b602090815260408083206002845290915290205403610745576002818101805460ff1916909117905560015460405163068bcd8d60e01b815260048101919091526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063068bcd8d90602401600060405180830381865afa1580156114cf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114f79190810190612338565b9050600082600101549050806002600082825461151491906123eb565b909155505060408201518354611539919061010090046001600160a01b031683610d85565b82546001840154604080516001600160a01b036101009094048416815260208101929092528883168282015251918716917fb5b51454adfa840bd593658325a60a50b0216f12eb5d2937efe6cea935675b7d9181900360600190a250505050505050565b6004805460405163dd93da4360e01b81526001600160a01b038581169382019390935260009283926101009004169063dd93da4390602401600060405180830381865afa1580156115f2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261161a91908101906123fe565b600480548251604051635e8a791560e01b8152928301526001600160a01b038681166024840152929350610100900490911690635e8a791590604401602060405180830381865afa158015611673573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061169791906122a0565b949350505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b60008060008084865af16106e65763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611735576390b8ec186000526004601cfd5b6000603452505050565b816001600160401b03164211806117675750806001600160401b0316826001600160401b0316115b156106e657604051637fcce2a960e01b815260040160405180910390fd5b61178d61091b565b600154156117ae5760405163439a74c960e01b815260040160405180910390fd5b806000036117cf57604051637fcce2a960e01b815260040160405180910390fd5b600155565b60045442600160a81b9091046001600160401b031611806117ff57506005546001600160401b031642115b156109645760405162b828c960e81b815260040160405180910390fd5b6040805160a0810182526000808252602082018190529181018290529060608201908152602001611860604051806040016040528060008152602001606081525090565b905290565b6001600160a01b038116811461091857600080fd5b60006020828403121561188c57600080fd5b813561189781611865565b9392505050565b634e487b7160e01b600052604160045260246000fd5b60405160c081016001600160401b03811182821017156118d6576118d661189e565b60405290565b604051601f8201601f191681016001600160401b03811182821017156119045761190461189e565b604052919050565b60006001600160401b038211156119255761192561189e565b5060051b60200190565b600082601f83011261194057600080fd5b813560206119556119508361190c565b6118dc565b82815260059290921b8401810191818101908684111561197457600080fd5b8286015b8481101561199857803561198b81611865565b8352918301918301611978565b509695505050505050565b60006001600160401b038211156119bc576119bc61189e565b50601f01601f191660200190565b600082601f8301126119db57600080fd5b81356119e9611950826119a3565b8181528460208386010111156119fe57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215611a3057600080fd5b83356001600160401b0380821115611a4757600080fd5b611a538783880161192f565b94506020860135915080821115611a6957600080fd5b50611a76868287016119ca565b9250506040840135611a8781611865565b809150509250925092565b60008060408385031215611aa557600080fd5b8235611ab081611865565b91506020830135611ac081611865565b809150509250929050565b60008060408385031215611ade57600080fd5b82356001600160401b03811115611af457600080fd5b611b00858286016119ca565b9250506020830135611ac081611865565b634e487b7160e01b600052602160045260246000fd5b60078110611b4557634e487b7160e01b600052602160045260246000fd5b9052565b60005b83811015611b64578181015183820152602001611b4c565b50506000910152565b60008151808452611b85816020860160208601611b49565b601f01601f19169290920160200192915050565b602081528151151560208201526001600160a01b0360208301511660408201526040820151606082015260006060830151611bd76080840182611b27565b50608083015160a083810152805160c084015260200151604060e0840152611697610100840182611b6d565b6007811061091857600080fd5b60008060408385031215611c2357600080fd5b8235611c2e81611865565b91506020830135611ac081611c03565b6001600160401b038116811461091857600080fd5b60008060408385031215611c6657600080fd5b8235611c7181611c3e565b91506020830135611ac081611c3e565b801515811461091857600080fd5b60008060408385031215611ca257600080fd5b8235611cad81611865565b91506020830135611ac081611c81565b600060208284031215611ccf57600080fd5b5035919050565b60008060408385031215611ce957600080fd5b82356001600160401b0380821115611d0057600080fd5b611d0c8683870161192f565b9350602091508185013581811115611d2357600080fd5b85019050601f81018613611d3657600080fd5b8035611d446119508261190c565b81815260059190911b82018301908381019088831115611d6357600080fd5b928401925b82841015611d8a578335611d7b81611c81565b82529284019290840190611d68565b80955050505050509250929050565b60008060408385031215611dac57600080fd5b82356001600160401b0380821115611dc357600080fd5b611dcf8683870161192f565b9350602091508185013581811115611de657600080fd5b8501601f81018713611df757600080fd5b8035611e056119508261190c565b81815260059190911b82018401908481019089831115611e2457600080fd5b8584015b83811015611e5c57803586811115611e405760008081fd5b611e4e8c89838901016119ca565b845250918601918601611e28565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b82811015611eb857815180516001600160a01b03168552860151868501529284019290850190600101611e8a565b5091979650505050505050565b602081016106488284611b27565b60008060408385031215611ee657600080fd5b8235915060208301356001600160401b03811115611f0357600080fd5b611f0f858286016119ca565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b600060a08284031215611f4157600080fd5b60405160a081018181106001600160401b0382111715611f6357611f6361189e565b6040528251611f7181611c81565b81526020830151611f8181611c3e565b60208201526040830151611f9481611c3e565b6040820152606083810151908201526080928301519281019290925250919050565b8281526040602082015260006116976040830184611b6d565b634e487b7160e01b600052601160045260246000fd5b8082018082111561064857610648611fcf565b634e487b7160e01b600052600160045260246000fd5b600082601f83011261201f57600080fd5b815161202d611950826119a3565b81815284602083860101111561204257600080fd5b611697826020830160208701611b49565b60006040828403121561206557600080fd5b604051604081016001600160401b0382821081831117156120885761208861189e565b816040528293508451835260208501519150808211156120a757600080fd5b506120b48582860161200e565b6020830152505092915050565b600080600080608085870312156120d757600080fd5b84516120e281611865565b60208601519094506120f381611865565b6040860151606087015191945092506001600160401b0381111561211657600080fd5b61212287828801612053565b91505092959194509250565b6040815260006121416040830185611b6d565b90506001600160a01b03831660208301529392505050565b600181811c9082168061216d57607f821691505b60208210810361218d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561062457600081815260208120601f850160051c810160208610156121ba5750805b601f850160051c820191505b818110156121d9578281556001016121c6565b505050505050565b81516001600160401b038111156121fa576121fa61189e565b61220e816122088454612159565b84612193565b602080601f831160018114612243576000841561222b5750858301515b600019600386901b1c1916600185901b1785556121d9565b600085815260208120601f198616915b8281101561227257888601518255948401946001909101908401612253565b50858210156122905787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000602082840312156122b257600080fd5b815161189781611c81565b6000602082840312156122cf57600080fd5b815161189781611865565b600080604083850312156122ed57600080fd5b82516122f881611865565b6020840151909250611ac081611c03565b604081016123178285611b27565b6001600160a01b03831660208301529392505050565b8051610f3681611865565b60006020828403121561234a57600080fd5b81516001600160401b038082111561236157600080fd5b9083019060c0828603121561237557600080fd5b61237d6118b4565b82518152602083015161238f81611865565b602082015260408301516123a281611865565b60408201526060830151828111156123b957600080fd5b6123c587828601612053565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b8181038181111561064857610648611fcf565b60006020828403121561241057600080fd5b81516001600160401b038082111561242757600080fd5b9083019060c0828603121561243b57600080fd5b6124436118b4565b825181526020830151602082015260408301518281111561246357600080fd5b61246f8782860161200e565b60408301525060608301518281111561248757600080fd5b61249387828601612053565b6060830152506124a56080840161232d565b60808201526124b660a0840161232d565b60a08201529594505050505056fea26469706673582212208335d657ce708d37783ddc87b659869baf26aa36fc965e043ab73594b7155d1264736f6c63430008130033";
