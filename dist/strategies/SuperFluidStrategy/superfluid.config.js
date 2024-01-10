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
        name: "REGISTRATION_ACTIVE",
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
                name: "recipientId",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "Canceled",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "int96",
                name: "flowRate",
                type: "int96",
            },
        ],
        name: "Distributed",
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
                name: "minPassportScore",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "address",
                name: "sender",
                type: "address",
            },
        ],
        name: "MinPassportScoreUpdated",
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
        name: "Reviewed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint64",
                name: "registrationStartTime",
                type: "uint64",
            },
            {
                indexed: false,
                internalType: "uint64",
                name: "registrationEndTime",
                type: "uint64",
            },
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
                internalType: "uint256",
                name: "totalUnits",
                type: "uint256",
            },
        ],
        name: "TotalUnitsUpdated",
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
                internalType: "uint256",
                name: "_previousFlowrate",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_newFlowRate",
                type: "uint256",
            },
        ],
        name: "adjustWeightings",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "allocationSuperToken",
        outputs: [
            {
                internalType: "contract ISuperToken",
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
        ],
        name: "cancelRecipients",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "closeStream",
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
        name: "gdaPool",
        outputs: [
            {
                internalType: "contract ISuperfluidPool",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
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
                    {
                        internalType: "contract RecipientSuperApp",
                        name: "superApp",
                        type: "address",
                    },
                ],
                internalType: "struct SQFSuperFluidStrategy.Recipient",
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
                name: "_superApp",
                type: "address",
            },
        ],
        name: "getRecipientId",
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
                internalType: "address",
                name: "_recipientId",
                type: "address",
            },
        ],
        name: "getSuperApp",
        outputs: [
            {
                internalType: "contract RecipientSuperApp",
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
        inputs: [],
        name: "initialSuperAppBalance",
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
        name: "metadataRequired",
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
        name: "minPassportScore",
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
        name: "passportDecoder",
        outputs: [
            {
                internalType: "contract IGitcoinPassportDecoder",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "poolSuperToken",
        outputs: [
            {
                internalType: "contract ISuperToken",
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
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "recipientFlowRate",
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
        ],
        name: "recipients",
        outputs: [
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
            {
                internalType: "contract RecipientSuperApp",
                name: "superApp",
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
        inputs: [],
        name: "registrationEndTime",
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
        name: "registrationStartTime",
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
                internalType: "address[]",
                name: "_recipientIds",
                type: "address[]",
            },
            {
                internalType: "enum IStrategy.Status[]",
                name: "_recipientStatuses",
                type: "uint8[]",
            },
        ],
        name: "reviewRecipients",
        outputs: [],
        stateMutability: "nonpayable",
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
        name: "superApps",
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
        inputs: [],
        name: "superfluidHost",
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
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "totalUnitsByRecipient",
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
                internalType: "uint256",
                name: "_minPassportScore",
                type: "uint256",
            },
        ],
        name: "updateMinPassportScore",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint64",
                name: "_registrationStartTime",
                type: "uint64",
            },
            {
                internalType: "uint64",
                name: "_registrationEndTime",
                type: "uint64",
            },
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
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
exports.bytecode = "0x60c06040523480156200001157600080fd5b5060405162006075380380620060758339810160408190526200003491620000bf565b6001600160a01b03821660805260405182908290620000589082906020016200019a565b60408051601f19818403018152919052805160209091012060a0525050600160035550620001cf9050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000b65781810151838201526020016200009c565b50506000910152565b60008060408385031215620000d357600080fd5b82516001600160a01b0381168114620000eb57600080fd5b60208401519092506001600160401b03808211156200010957600080fd5b818501915085601f8301126200011e57600080fd5b81518181111562000133576200013362000083565b604051601f8201601f19908116603f011681019083821181831017156200015e576200015e62000083565b816040528281528860208487010111156200017857600080fd5b6200018b83602083016020880162000099565b80955050505050509250929050565b6020815260008251806020840152620001bb81604085016020870162000099565b601f01601f19169190910160400192915050565b60805160a051615e64620002116000396000610480015260008181610303015281816114d4015281816116400152818161187501526119a00152615e646000f3fe608060405260043610620002885760003560e01c80636ceed0ef1162000164578063d237884e11620000d6578063eb8203121162000095578063ef2920fc116200006c578063ef2920fc14620008b7578063f3fef3a314620008ce578063f5b0dfb714620008f357600080fd5b8063eb8203121462000835578063ed42489a146200086d578063edd146cc146200089257600080fd5b8063d237884e1462000775578063d2e17f591462000797578063df868ed314620007c0578063dff7d2c714620007d8578063eb11af93146200080157600080fd5b8063a0cf0aea1162000123578063a0cf0aea14620006a4578063b2b878d014620006ce578063b63b6fe41462000702578063c40c455d146200071a578063cb0e85a6146200075457600080fd5b80636ceed0ef14620006015780637f83598314620006235780639af5c09d14620006485780639c0b5f99146200066a5780639dad9382146200068c57600080fd5b80633c73567d11620001fe5780634d31d08711620001bd5780634d31d08714620004fe57806357089739146200053457806362812a39146200055057806363bbd79814620005845780636acd5bef14620005c157600080fd5b80633c73567d146200042657806340e270f3146200044b57806342fda9c714620004705780634533d67814620004a55780634ab4ba4214620004e757600080fd5b80632143e92f116200024b5780632143e92f146200038a5780632bbe0cae14620003af5780632c64ef3414620003c657806338fff2d014620003f75780633a1bce35146200040e57600080fd5b806302aed72e146200028d5780630a6f0ee914620002cc57806315cc481e14620002f35780631724c4ac146200032857806319ba46601462000368575b600080fd5b3480156200029a57600080fd5b50600754620002af906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b348015620002d957600080fd5b50620002f1620002eb36600462003209565b62000918565b005b3480156200030057600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000620002af565b3480156200033557600080fd5b50620003596200034736600462003289565b600f6020526000908152604090205481565b604051908152602001620002c3565b3480156200037557600080fd5b50600854620002af906001600160a01b031681565b3480156200039757600080fd5b50620002f1620003a9366004620032c6565b6200093e565b620002af620003c03660046200332b565b6200095f565b348015620003d357600080fd5b5062000359620003e536600462003289565b60106020526000908152604090205481565b3480156200040457600080fd5b5060015462000359565b3480156200041b57600080fd5b5062000359600a5481565b3480156200043357600080fd5b50620002f162000445366004620033d0565b6200098a565b3480156200045857600080fd5b50620002f16200046a36600462003415565b62000b2f565b3480156200047d57600080fd5b507f000000000000000000000000000000000000000000000000000000000000000062000359565b348015620004b257600080fd5b50600b54620004ce90600160c01b90046001600160401b031681565b6040516001600160401b039091168152602001620002c3565b348015620004f457600080fd5b5060025462000359565b3480156200050b57600080fd5b50620005236200051d36600462003289565b62000d28565b6040519015158152602001620002c3565b3480156200054157600080fd5b50600c54620005239060ff1681565b3480156200055d57600080fd5b50620005756200056f36600462003289565b62000d35565b604051620002c39190620034e6565b3480156200059157600080fd5b50620002af620005a336600462003289565b6001600160a01b039081166000908152600e60205260409020541690565b348015620005ce57600080fd5b50620002af620005e036600462003289565b6001600160a01b039081166000908152600d60205260409020600301541690565b3480156200060e57600080fd5b50600654620002af906001600160a01b031681565b3480156200063057600080fd5b50620002f16200064236600462003556565b62000d4a565b3480156200065557600080fd5b50600b54620004ce906001600160401b031681565b3480156200067757600080fd5b50600554620002af906001600160a01b031681565b3480156200069957600080fd5b50620002f1620010c3565b348015620006b157600080fd5b50620002af73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b348015620006db57600080fd5b50620006f3620006ed366004620035c8565b6200118e565b604051620002c39190620036ab565b3480156200070f57600080fd5b506200035960045481565b3480156200072757600080fd5b50620002af6200073936600462003289565b600e602052600090815260409020546001600160a01b031681565b3480156200076157600080fd5b50600c546200052390610100900460ff1681565b3480156200078257600080fd5b50600954620002af906001600160a01b031681565b348015620007a457600080fd5b50600b54620004ce90600160801b90046001600160401b031681565b348015620007cd57600080fd5b5062000523620012e3565b348015620007e557600080fd5b50600b54620004ce90600160401b90046001600160401b031681565b3480156200080e57600080fd5b50620008266200082036600462003289565b620012f4565b604051620002c3919062003705565b3480156200084257600080fd5b506200085a6200085436600462003289565b62001301565b604051620002c395949392919062003715565b3480156200087a57600080fd5b50620002f16200088c36600462003766565b620013fa565b3480156200089f57600080fd5b50620002f1620008b136600462003780565b62001447565b620002f1620008c83660046200332b565b620017d1565b348015620008db57600080fd5b50620002f1620008ed366004620037ca565b620017f5565b3480156200090057600080fd5b50620002f16200091236600462003766565b6200183e565b620009226200186a565b6200092c620018b6565b62000939838383620018da565b505050565b336200094a8162001976565b620009588585858562001a2c565b5050505050565b60006200096b6200186a565b62000975620018b6565b62000981838362001ba4565b90505b92915050565b33620009968162001976565b620009a062001ea8565b8160005b8181101562000958576000858583818110620009c457620009c4620037f9565b9050602002016020810190620009db919062003289565b6001600160a01b0381166000908152600d602052604081209192508154600160a81b900460ff16600681111562000a165762000a1662003438565b148062000a42575060068154600160a81b900460ff16600681111562000a405762000a4062003438565b145b1562000a715760405163f4a513b960e01b81526001600160a01b03831660048201526024015b60405180910390fd5b805460ff60a81b1916600360a91b1781556003810180546001600160a01b03198082169092556001600160a01b039081166000818152600e6020908152604080832080549096169095558684168252601090529283208390558354909262000ae29286926101009004169062001edb565b6040513381526001600160a01b038416907fd08928d04a8f87ca2e3a2a6d3367f3272b6ceae11f45c1aa86bed323469263019060200160405180910390a2836001019350505050620009a4565b336000908152600e60205260409020546001600160a01b03168062000b675760405163075fd2b160e01b815260040160405180910390fd5b6001600160a01b0381166000908152600f602052604081205462000b8e906103e862003825565b90508360000362000bd157600262000ba68462001fbd565b62000bb18362001fbd565b62000bbd91906200383f565b62000bc9919062003952565b905062000c48565b8260000362000bfe57600262000be78562001fbd565b62000bf28362001fbd565b62000bbd919062003963565b600262000c0b8562001fbd565b62000c168562001fbd565b62000c218462001fbd565b62000c2d91906200383f565b62000c39919062003963565b62000c45919062003952565b90505b62000c566103e88262003979565b6001600160a01b038084166000908152600d6020526040902080549293509162000c899185916101009004168462001edb565b6001600160a01b0383166000908152600f6020908152604080832085905560109091529020548562000cbc86836200383f565b62000cc8919062003963565b6001600160a01b038516600081815260106020526040908190209290925590517f35822de50167c622cbe7675e33a2f5cd6f10d628dec698b6401d2792486cec299062000d189086815260200190565b60405180910390a2505050505050565b6000620009848262002049565b62000d3f62002fdc565b6200098482620020dc565b3362000d568162001976565b62000d6062001ea8565b8382811462000d8257604051637fcce2a960e01b815260040160405180910390fd5b60005b81811015620010ba57600085858381811062000da55762000da5620037f9565b905060200201602081019062000dbc91906200399c565b9050600088888481811062000dd55762000dd5620037f9565b905060200201602081019062000dec919062003289565b6001600160a01b0381166000908152600d6020526040902090915060018154600160a81b900460ff16600681111562000e295762000e2962003438565b14158062000e6d5750600283600681111562000e495762000e4962003438565b1415801562000e6d5750600383600681111562000e6a5762000e6a62003438565b14155b1562000e985760405163f4a513b960e01b81526001600160a01b038316600482015260240162000a68565b80548390829060ff60a81b1916600160a81b83600681111562000ebf5762000ebf62003438565b0217905550816001600160a01b03167f094d003df6c0153ac428d1a45e5827aa8e2aa00c6dbbc96a2dbb9a682115d837843360405162000f01929190620039bf565b60405180910390a2600283600681111562000f205762000f2062003438565b03620010ab5780546005546006546040516000936001600160a01b036101009091048116933093908216929116906001908190819062000f609062003027565b6001600160a01b039788168152958716602087015293861660408601529490911660608401521515608083015291151560a082015290151560c082015261010060e0820181905260009082015261012001604051809103906000f08015801562000fce573d6000803e3d6000fd5b506006546004805460405163a9059cbb60e01b81526001600160a01b03808616938201939093526024810191909152929350169063a9059cbb906044016020604051808303816000875af11580156200102b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620010519190620039fb565b5081546200107190849061010090046001600160a01b0316600162001edb565b6001600160a01b039081166000818152600e6020526040902080549285166001600160a01b03199384161790556003830180549092161790555b83600101935050505062000d85565b50505050505050565b33620010cf8162001976565b600854604080518082019091526002815261060f60f31b60208201526007546200110e926001600160a01b039182169230929091169060009062002232565b506007546040516370a0823160e01b81523060048201526200118b916001600160a01b031690339082906370a0823190602401602060405180830381865afa1580156200115f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001185919062003a19565b6200239a565b50565b81518151606091908114620011b657604051633da4c02b60e11b815260040160405180910390fd5b6000816001600160401b03811115620011d357620011d362003035565b6040519080825280602002602001820160405280156200121a57816020015b6040805180820190915260008082526020820152815260200190600190039081620011f25790505b50905060005b82811015620012da57620012b1868281518110620012425762001242620037f9565b60200260200101518683815181106200125f576200125f620037f9565b505060408051808201825260008082526020918201819052825180840184526001600160a01b03948516808352600d845284832054610100900490951681529381526010825291909120549082015290565b828281518110620012c657620012c6620037f9565b602090810291909101015260010162001220565b50949350505050565b6000620012ef620023d9565b905090565b600062000984826200241e565b600d6020908152600091825260409182902080548351808501909452600182018054855260028301805460ff808516976001600160a01b0361010087041697600160a81b9096049091169594909392908401916200135f9062003a33565b80601f01602080910402602001604051908101604052809291908181526020018280546200138d9062003a33565b8015620013de5780601f10620013b257610100808354040283529160200191620013de565b820191906000526020600020905b815481529060010190602001808311620013c057829003601f168201915b505050919092525050506003909101546001600160a01b031685565b33620014068162001976565b600a829055604080518381523360208201527fdd18fbc43ebc7f26926b0335e04b16bf1a38cbd6eda46bf0e3cf4ef89b061628910160405180910390a15050565b6000818060200190518101906200145f919062003a89565b90506200146c8362002435565b8051600c805460208085015161ffff1990921693151561ff00191693909317610100911515919091021790556060820151600580546001600160a01b0319166001600160a01b03928316179055610120830151600a5560408051635ab1bd5360e01b815290517f000000000000000000000000000000000000000000000000000000000000000090921692635ab1bd53926004808401938290030181865afa1580156200151d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001543919062003b6c565b600c805475ffffffffffffffffffffffffffffffffffffffff00001916620100006001600160a01b0393841602179055606082015116158062001591575060808101516001600160a01b0316155b80620015a8575060608101516001600160a01b0316155b80620015bf575060408101516001600160a01b0316155b15620015de5760405163538ba4f960e01b815260040160405180910390fd5b8061014001516000036200160557604051637fcce2a960e01b815260040160405180910390fd5b6080810151600680546001600160a01b0319166001600160a01b0392831617905560015460405163068bcd8d60e01b815260048101919091527f00000000000000000000000000000000000000000000000000000000000000009091169063068bcd8d90602401600060405180830381865afa1580156200168a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620016b4919081019062003c5a565b604090810151600780546001600160a01b0319166001600160a01b039283161790556006548251631dce337960e31b8152925191169163ee719bc89160048083019260209291908290030181865afa15801562001715573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200173b919062003b6c565b50610140810151600455604080820151600980546001600160a01b0319166001600160a01b039283161790556007548251808401909352600080845260208401526200178c92911690309062002488565b600860006101000a8154816001600160a01b0302191690836001600160a01b03160217905550620009398160a001518260c001518360e0015184610100015162001a2c565b620017db6200186a565b620017e5620018b6565b620017f1828262002530565b5050565b33620018018162001976565b6007546001600160a01b03908116908416036200183157604051637fcce2a960e01b815260040160405180910390fd5b620009398333846200239a565b620018486200186a565b80600260008282546200185c91906200383f565b909155506200118b90508181565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620018b45760405163075fd2b160e01b815260040160405180910390fd5b565b600154600003620018b457604051630f68fe6360e21b815260040160405180910390fd5b80620018e68162001976565b620018f0620026df565b60008380602001905181019062001908919062003d2c565b6008546007549192506200192c916001600160a01b03908116913091168462002713565b50604051600b82900b81526001600160a01b038416907f9772934ae0adf1472a2378a77824461cb25bc02429d3b2403f4c492a4d1187eb9060200160405180910390a25050505050565b6001546040516329e40d4b60e01b815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015620019e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001a0e9190620039fb565b6200118b5760405163075fd2b160e01b815260040160405180910390fd5b836001600160401b031642118062001a555750826001600160401b0316846001600160401b0316115b8062001a725750816001600160401b0316846001600160401b0316115b8062001a8f5750806001600160401b0316826001600160401b0316115b8062001aac5750806001600160401b0316836001600160401b0316115b1562001acb57604051637fcce2a960e01b815260040160405180910390fd5b600b80546001600160401b03838116600160c01b90810277ffffffffffffffffffffffffffffffffffffffffffffffff878416600160801b908102919091166001600160801b038a8616600160401b9081026fffffffffffffffffffffffffffffffff199098168d88161797909717161791909117948590556040805186851681529486048416602086015290850483169084015290920490911660608201523360808201527fcb0fb7a7b87db2f472ee8977444cfdbc51993ce660aca27a5969a724fae6dcf39060a00160405180910390a150505050565b600062001bb062002736565b600080600062001bd3604051806040016040528060008152602001606081525090565b600c5460ff161562001c2c578680602001905181019062001bf5919062003d4a565b9196509450905062001c08858762002782565b62001c265760405163075fd2b160e01b815260040160405180910390fd5b62001c9f565b8680602001905181019062001c42919062003d4a565b9095509093506001600160a01b0384161515925090508162001c65578562001c67565b825b945081801562001c80575062001c7e858762002782565b155b1562001c9f5760405163075fd2b160e01b815260040160405180910390fd5b600c54610100900460ff16801562001cc45750602081015151158062001cc457508051155b1562001ce35760405163c19e07c560e01b815260040160405180910390fd5b6001600160a01b03841662001d175760405163f4a513b960e01b81526001600160a01b038616600482015260240162000a68565b6001600160a01b038086166000908152600d6020908152604090912080549287166101000274ffffffffffffffffffffffffffffffffffffffff001990931692909217825582516001830190815590830151839190600284019062001d7d908262003e07565b5050600c5460ff16905062001d93578262001d96565b60015b815460ff19169015151780825560ff600160a81b90910416600081600681111562001dc55762001dc562003438565b0362001e2957815460ff60a81b1916600160a81b1782556040516001600160a01b038816907fa197306e3dd5494a61a695381aa809a53b8e377a685e84e404a85d5a8da6cc629062001e1b908c908c9062003ed3565b60405180910390a262001e9c565b600181600681111562001e405762001e4062003438565b0362001e8357866001600160a01b03167faf5977db3aa7e6fc7d05e21c791ebd214afa76da27c8d8ddc8e4a9f742d7b2368a8a60405162001e1b92919062003ed3565b604051637fcce2a960e01b815260040160405180910390fd5b50505050505092915050565b600b54600160c01b90046001600160401b0316421115620018b45760405162b828c960e81b815260040160405180910390fd5b600854604051631b16777760e01b81526001600160a01b0384811660048301526001600160801b038416602483015290911690631b167777906044016020604051808303816000875af115801562001f37573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001f5d9190620039fb565b506001600160a01b0383166000818152600f60209081526040918290206001600160801b0385169081905591519182527f35822de50167c622cbe7675e33a2f5cd6f10d628dec698b6401d2792486cec29910160405180910390a2505050565b70ffffffffffffffffffffffffffffffffff811160071b81811c68ffffffffffffffffff1060061b1781811c64ffffffffff1060051b1781811c62ffffff1060041b1781811c620100000160b5600192831c1b0260121c80830401811c80830401811c80830401811c80830401811c80830401811c80830401811c80830401901c908190048111900390565b600954604051630d47875d60e41b81526001600160a01b038381166004830152600092839291169063d47875d090602401602060405180830381865afa15801562002098573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620020be919062003a19565b9050600a548110620020d35750600192915050565b50600092915050565b620020e662002fdc565b6001600160a01b038083166000908152600d6020908152604091829020825160a081018452815460ff80821615158352610100820490961693820193909352939092840191600160a81b900416600681111562002147576200214762003438565b60068111156200215b576200215b62003438565b815260200160018201604051806040016040529081600082015481526020016001820180546200218b9062003a33565b80601f0160208091040260200160405190810160405280929190818152602001828054620021b99062003a33565b80156200220a5780601f10620021de576101008083540402835291602001916200220a565b820191906000526020600020905b815481529060010190602001808311620021ec57829003601f168201915b505050919092525050508152600391909101546001600160a01b031660209091015292915050565b6000806000620022428862002890565b91509150816001600160a01b03166339255d5b82836001600160a01b0316635a6c6dbc8c8c8c8c60006001600160401b0381111562002285576200228562003035565b6040519080825280601f01601f191660200182016040528015620022b0576020820181803683370190505b50604051602401620022c795949392919062003f00565b60408051808303601f1901815291815260208201805160e094851b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff909116179052519185901b7fffffffff000000000000000000000000000000000000000000000000000000001682526200234193925090899060040162003f4a565b6000604051808303816000875af115801562002361573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200238b919081019062003f8c565b50600198975050505050505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed196001600160a01b03841601620023cc5762000939828262002a65565b6200093983838362002a82565b600b54600090426001600160401b03909116118015906200240c5750600b54600160401b90046001600160401b03164211155b15620024185750600190565b50600090565b60006200242b82620020dc565b6040015192915050565b6200243f6200186a565b60015415620024615760405163439a74c960e01b815260040160405180910390fd5b806000036200248357604051637fcce2a960e01b815260040160405180910390fd5b600155565b600080620024968562002890565b604051630779d36560e01b81526001600160a01b03888116600483015287811660248301528651151560448301526020870151151560648301529193509083169150630779d365906084016020604051808303816000875af115801562002501573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002527919062003b6c565b95945050505050565b6200253a62002ad2565b620025458162002049565b620025635760405163075fd2b160e01b815260040160405180910390fd5b600080838060200190518101906200257c919062003fd9565b6001600160a01b0382166000908152600d60205260409020919350915060028154600160a81b900460ff166006811115620025bb57620025bb62003438565b141580620025d4575060038101546001600160a01b0316155b15620025ff5760405163f4a513b960e01b81526001600160a01b038416600482015260240162000a68565b60038101546006546001600160a01b03918216916000918291620026269116888562002b23565b50509150915080600b0b600014806200263d575081155b1562002664576006546200265d906001600160a01b031688858862002bca565b5062002680565b6006546200267e906001600160a01b031688858862002bed565b505b60065460408051600b88900b81526001600160a01b039283166020820152898316818301529051918816917f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b9181900360600190a25050505050505050565b600b54600160401b90046001600160401b0316421015620018b4576040516317338e1560e31b815260040160405180910390fd5b604080516000808252602082019092526200252790869086908690869062002232565b600b54426001600160401b039091161180620027635750600b54600160401b90046001600160401b031642115b15620018b457604051635b04f6ad60e11b815260040160405180910390fd5b600c5460405163dd93da4360e01b81526001600160a01b0384811660048301526000928392620100009091049091169063dd93da4390602401600060405180830381865afa158015620027d9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405262002803919081019062004013565b600c548151604051635e8a791560e01b815260048101919091526001600160a01b0386811660248301529293506201000090910490911690635e8a791590604401602060405180830381865afa15801562002862573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620028889190620039fb565b949350505050565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fc36f6c05164a669ecb6da53e218d77ae44d51cfc99f91e5a125a18de0949bee4546001600160a01b03811662002a2e576001600160a01b0382166200295a57826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa15801562002931573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002957919062003b6c565b91505b604051635b69006f60e11b81527fdfd8ece9bfbcb8c5c540edb935641f63d67686490a1ab97f000288759f30a94660048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa158015620029bf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620029e5919062003b6c565b9050817f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea83755807fc36f6c05164a669ecb6da53e218d77ae44d51cfc99f91e5a125a18de0949bee4555b6001600160a01b03821662002a475762002a47620040e8565b6001600160a01b03811662002a605762002a60620040e8565b915091565b60008060008084865af1620017f15763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d15600160005114171662002ac8576390b8ec186000526004601cfd5b6000603452505050565b600b5442600160801b9091046001600160401b0316118062002b055750600b54600160c01b90046001600160401b031642115b15620018b45760405162b828c960e81b815260040160405180910390fd5b600080600080600062002b368862002c10565b604051631cd43d1160e31b81526001600160a01b038b811660048301528a811660248301528981166044830152919350908316915063e6a1e88890606401608060405180830381865afa15801562002b92573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002bb89190620040fe565b929b919a509850909650945050505050565b604080516000808252602082019092526200252790869086908690869062002d80565b604080516000808252602082019092526200252790869086908690869062002dd3565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b03811662002a2e576001600160a01b03821662002cda57826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa15801562002cb1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002cd7919062003b6c565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa15801562002d3f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002d65919062003b6c565b90506001600160a01b03821662002a475762002a47620040e8565b600080600062002d908862002e26565b91509150816001600160a01b03166339255d5b82836001600160a01b03166394229ecb8c8c8c8c60006001600160401b0381111562002285576200228562003035565b600080600062002de38862002e26565b91509150816001600160a01b03166339255d5b82836001600160a01b031663354b95908c8c8c8c60006001600160401b0381111562002285576200228562003035565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b03811662002a2e576001600160a01b03821662002ef057826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa15801562002ec7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002eed919062003b6c565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa15801562002f55573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002f7b919062003b6c565b9050817f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea83755807fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a556001600160a01b03821662002a475762002a47620040e8565b6040805160a081018252600080825260208201819052909182019081526020016200301a604051806040016040528060008152602001606081525090565b8152600060209091015290565b611cf1806200413e83390190565b634e487b7160e01b600052604160045260246000fd5b60405161016081016001600160401b038111828210171562003071576200307162003035565b60405290565b60405160c081016001600160401b038111828210171562003071576200307162003035565b604051601f8201601f191681016001600160401b0381118282101715620030c757620030c762003035565b604052919050565b60006001600160401b03821115620030eb57620030eb62003035565b5060051b60200190565b6001600160a01b03811681146200118b57600080fd5b600082601f8301126200311d57600080fd5b81356020620031366200313083620030cf565b6200309c565b82815260059290921b840181019181810190868411156200315657600080fd5b8286015b848110156200317e5780356200317081620030f5565b83529183019183016200315a565b509695505050505050565b60006001600160401b03821115620031a557620031a562003035565b50601f01601f191660200190565b600082601f830112620031c557600080fd5b8135620031d6620031308262003189565b818152846020838601011115620031ec57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000606084860312156200321f57600080fd5b83356001600160401b03808211156200323757600080fd5b62003245878388016200310b565b945060208601359150808211156200325c57600080fd5b506200326b86828701620031b3565b92505060408401356200327e81620030f5565b809150509250925092565b6000602082840312156200329c57600080fd5b8135620032a981620030f5565b9392505050565b6001600160401b03811681146200118b57600080fd5b60008060008060808587031215620032dd57600080fd5b8435620032ea81620032b0565b93506020850135620032fc81620032b0565b925060408501356200330e81620032b0565b915060608501356200332081620032b0565b939692955090935050565b600080604083850312156200333f57600080fd5b82356001600160401b038111156200335657600080fd5b6200336485828601620031b3565b92505060208301356200337781620030f5565b809150509250929050565b60008083601f8401126200339557600080fd5b5081356001600160401b03811115620033ad57600080fd5b6020830191508360208260051b8501011115620033c957600080fd5b9250929050565b60008060208385031215620033e457600080fd5b82356001600160401b03811115620033fb57600080fd5b620034098582860162003382565b90969095509350505050565b600080604083850312156200342957600080fd5b50508035926020909101359150565b634e487b7160e01b600052602160045260246000fd5b600781106200346d57634e487b7160e01b600052602160045260246000fd5b9052565b60005b838110156200348e57818101518382015260200162003474565b50506000910152565b60008151808452620034b181602086016020860162003471565b601f01601f19169290920160200192915050565b80518252600060208201516040602085015262002888604085018262003497565b60208152815115156020820152600060208301516001600160a01b038082166040850152604085015191506200352060608501836200344e565b6060850151915060a060808501526200353d60c0850183620034c5565b91508060808601511660a0850152508091505092915050565b600080600080604085870312156200356d57600080fd5b84356001600160401b03808211156200358557600080fd5b620035938883890162003382565b90965094506020870135915080821115620035ad57600080fd5b50620035bc8782880162003382565b95989497509550505050565b60008060408385031215620035dc57600080fd5b82356001600160401b0380821115620035f457600080fd5b62003602868387016200310b565b93506020915081850135818111156200361a57600080fd5b8501601f810187136200362c57600080fd5b80356200363d6200313082620030cf565b81815260059190911b820184019084810190898311156200365d57600080fd5b8584015b838110156200369a578035868111156200367b5760008081fd5b6200368b8c8983890101620031b3565b84525091860191860162003661565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b82811015620036f857815180516001600160a01b03168552860151868501529284019290850190600101620036c8565b5091979650505050505050565b602081016200098482846200344e565b851515815260006001600160a01b0380871660208401526200373b60408401876200344e565b60a060608401526200375160a0840186620034c5565b91508084166080840152509695505050505050565b6000602082840312156200377957600080fd5b5035919050565b600080604083850312156200379457600080fd5b8235915060208301356001600160401b03811115620037b257600080fd5b620037c085828601620031b3565b9150509250929050565b60008060408385031215620037de57600080fd5b8235620037eb81620030f5565b946020939093013593505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176200098457620009846200380f565b808201808211156200098457620009846200380f565b600181815b80851115620038965781600019048211156200387a576200387a6200380f565b808516156200388857918102915b93841c93908002906200385a565b509250929050565b600082620038af5750600162000984565b81620038be5750600062000984565b8160018114620038d75760028114620038e25762003902565b600191505062000984565b60ff841115620038f657620038f66200380f565b50506001821b62000984565b5060208310610133831016604e8410600b841016171562003927575081810a62000984565b62003933838362003855565b80600019048211156200394a576200394a6200380f565b029392505050565b6000620032a960ff8416836200389e565b818103818111156200098457620009846200380f565b6000826200399757634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215620039af57600080fd5b813560078110620032a957600080fd5b60408101620039cf82856200344e565b6001600160a01b03831660208301529392505050565b80518015158114620039f657600080fd5b919050565b60006020828403121562003a0e57600080fd5b620032a982620039e5565b60006020828403121562003a2c57600080fd5b5051919050565b600181811c9082168062003a4857607f821691505b60208210810362003a6957634e487b7160e01b600052602260045260246000fd5b50919050565b8051620039f681620030f5565b8051620039f681620032b0565b6000610160828403121562003a9d57600080fd5b62003aa76200304b565b62003ab283620039e5565b815262003ac260208401620039e5565b602082015262003ad56040840162003a6f565b604082015262003ae86060840162003a6f565b606082015262003afb6080840162003a6f565b608082015262003b0e60a0840162003a7c565b60a082015262003b2160c0840162003a7c565b60c082015262003b3460e0840162003a7c565b60e082015261010062003b4981850162003a7c565b908201526101208381015190820152610140928301519281019290925250919050565b60006020828403121562003b7f57600080fd5b8151620032a981620030f5565b600062003b9d620031308462003189565b905082815283838301111562003bb257600080fd5b620032a983602083018462003471565b600082601f83011262003bd457600080fd5b620032a98383516020850162003b8c565b60006040828403121562003bf857600080fd5b604051604081016001600160401b03828210818311171562003c1e5762003c1e62003035565b8160405282935084518352602085015191508082111562003c3e57600080fd5b5062003c4d8582860162003bc2565b6020830152505092915050565b60006020828403121562003c6d57600080fd5b81516001600160401b038082111562003c8557600080fd5b9083019060c0828603121562003c9a57600080fd5b62003ca462003077565b82518152602083015162003cb881620030f5565b6020820152604083015162003ccd81620030f5565b604082015260608301518281111562003ce557600080fd5b62003cf38782860162003be5565b6060830152506080830151608082015260a083015160a082015280935050505092915050565b8051600b81900b8114620039f657600080fd5b60006020828403121562003d3f57600080fd5b620032a98262003d19565b60008060006060848603121562003d6057600080fd5b835162003d6d81620030f5565b602085015190935062003d8081620030f5565b60408501519092506001600160401b0381111562003d9d57600080fd5b62003dab8682870162003be5565b9150509250925092565b601f8211156200093957600081815260208120601f850160051c8101602086101562003dde5750805b601f850160051c820191505b8181101562003dff5782815560010162003dea565b505050505050565b81516001600160401b0381111562003e235762003e2362003035565b62003e3b8162003e34845462003a33565b8462003db5565b602080601f83116001811462003e73576000841562003e5a5750858301515b600019600386901b1c1916600185901b17855562003dff565b600085815260208120601f198616915b8281101562003ea45788860151825594840194600190910190840162003e83565b508582101562003ec35787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60408152600062003ee8604083018562003497565b90506001600160a01b03831660208301529392505050565b60006001600160a01b038088168352808716602084015280861660408401525083600b0b606083015260a0608083015262003f3f60a083018462003497565b979650505050505050565b6001600160a01b038416815260606020820152600062003f6e606083018562003497565b828103604084015262003f82818562003497565b9695505050505050565b60006020828403121562003f9f57600080fd5b81516001600160401b0381111562003fb657600080fd5b8201601f8101841362003fc857600080fd5b620028888482516020840162003b8c565b6000806040838503121562003fed57600080fd5b825162003ffa81620030f5565b91506200400a6020840162003d19565b90509250929050565b6000602082840312156200402657600080fd5b81516001600160401b03808211156200403e57600080fd5b9083019060c082860312156200405357600080fd5b6200405d62003077565b82518152602083015160208201526040830151828111156200407e57600080fd5b6200408c8782860162003bc2565b604083015250606083015182811115620040a557600080fd5b620040b38782860162003be5565b606083015250620040c76080840162003a6f565b6080820152620040da60a0840162003a6f565b60a082015295945050505050565b634e487b7160e01b600052600160045260246000fd5b600080600080608085870312156200411557600080fd5b84519350620041276020860162003d19565b604086015160609096015194979096509250505056fe60e06040523480156200001157600080fd5b5060405162001cf138038062001cf18339810160408190526200003491620001a2565b6001600160a01b038616608052640100000001846200005557640200000000175b836200006357640c00000000175b826200007157643000000000175b6080516001600160a01b031663bd1c448b82846040518363ffffffff1660e01b8152600401620000a3929190620002eb565b600060405180830381600087803b158015620000be57600080fd5b505af1158015620000d3573d6000803e3d6000fd5b5050506001600160a01b0389169050620001005760405163538ba4f960e01b815260040160405180910390fd5b505050506001600160a01b0393841660a05250821660c05250600080546001600160a01b0319169290911691909117905562000327565b6001600160a01b03811681146200014d57600080fd5b50565b805180151581146200016157600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620001995781810151838201526020016200017f565b50506000910152565b600080600080600080600080610100898b031215620001c057600080fd5b8851620001cd8162000137565b60208a0151909850620001e08162000137565b60408a0151909750620001f38162000137565b60608a0151909650620002068162000137565b94506200021660808a0162000150565b93506200022660a08a0162000150565b92506200023660c08a0162000150565b60e08a01519092506001600160401b03808211156200025457600080fd5b818b0191508b601f8301126200026957600080fd5b8151818111156200027e576200027e62000166565b604051601f8201601f19908116603f01168101908382118183101715620002a957620002a962000166565b816040528281528e6020848701011115620002c357600080fd5b620002d68360208301602088016200017c565b80955050505050509295985092959890939650565b8281526040602082015260008251806040840152620003128160608501602087016200017c565b601f01601f1916919091016060019392505050565b60805160a05160c05161192a620003c760003960008181610125015281816101cf015281816103ce015281816104b701528181610644015281816108ed01528181610b9d01528181610bd901528181610c2f01528181610c7d0152610cb801526000818161024401528181610826015261096b015260008181610164015281816103930152818161047c0152818161060401526106ca015261192a6000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c806366d003ac1161008c5780638c7f0959116100665780638c7f095914610222578063a8c62e761461023f578063bcb4546f14610266578063d86ed3e51461029b57600080fd5b806366d003ac146101ac57806372ca8a3e146101bf578063884d1f401461020f57600080fd5b806349f289dc116100bd57806349f289dc1461015f57806353c11f99146101865780635f9e7d771461019957600080fd5b8063230dbd29146100e457806330d9c9151461010d578063451c3d8014610120575b600080fd5b6100f76100f23660046113e8565b6102ae565b6040516101049190611503565b60405180910390f35b6100f761011b36600461151d565b610361565b6101477f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610104565b6101477f000000000000000000000000000000000000000000000000000000000000000081565b6100f76101943660046113e8565b610386565b6100f76101a736600461151d565b61046f565b600054610147906001600160a01b031681565b6101ff6101cd3660046115bc565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b6040519015158152602001610104565b6100f761021d36600461151d565b610521565b61022a600081565b60405163ffffffff9091168152602001610104565b6101477f000000000000000000000000000000000000000000000000000000000000000081565b61028d7fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd381565b604051908152602001610104565b6100f76102a93660046113e8565b610558565b60606102b98a6105f9565b6102c289610692565b6103055782828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061035492505050565b6000610313878901896115d9565b509050600061032486880188611621565b509050600061033d6001600160a01b038e168430610758565b505091505061034e828288886107fa565b93505050505b9998505050505050505050565b604080518082019091526002815261060f60f31b60208201525b979650505050505050565b6060336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415806103c657506103c489610692565b155b806103fe57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03908116908b1614155b156104425782828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061035492505050565b600061045085870187611621565b50905061046081600086866107fa565b9b9a5050505050505050505050565b6060336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415806104af57506104ad87610692565b155b806104e757507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811690891614155b1561050b5750604080518082019091526002815261060f60f31b602082015261037b565b61051585856108ca565b98975050505050505050565b606061052c886105f9565b61053587610692565b61050b5750604080518082019091526002815261060f60f31b602082015261037b565b60606105638a6105f9565b61056c89610692565b6105af5782828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061035492505050565b60006105bd878901896115d9565b50905060006105d66001600160a01b038d168330610758565b50509150506105e9600082848888610949565b9c9b505050505050505050505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461064257604051632f2d36a760e01b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b039081169082161461068f57604051631ea25bab60e31b815260040160405180910390fd5b50565b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063b6d200de90602401602060405180830381865afa158015610719573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073d919061164d565b6001600160a01b0316826001600160a01b0316149050919050565b600080600080600061076988610a0b565b604051631cd43d1160e31b81526001600160a01b038b811660048301528a811660248301528981166044830152919350908316915063e6a1e88890606401608060405180830381865afa1580156107c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107e8919061166a565b929b919a509850909650945050505050565b6040516340e270f360e01b8152600b85810b600483015284900b60248201526060906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906340e270f390604401600060405180830381600087803b15801561086a57600080fd5b505af115801561087e573d6000803e3d6000fd5b505050506108c183838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b8d92505050565b95945050505050565b606060006108da838501856115d9565b5090506000806109146001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168430610758565b505060408051600b9290920b602083015281810192909252815180820383018152606090910190915293505050505b92915050565b604051634d31d08760e01b81526001600160a01b0384811660048301526060917f000000000000000000000000000000000000000000000000000000000000000090911690634d31d08790602401602060405180830381865afa1580156109b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d891906116a8565b6109f55760405163075fd2b160e01b815260040160405180910390fd5b610a01868685856107fa565b9695505050505050565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b038116610b5c576001600160a01b038216610ad057826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa158015610aa9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acd919061164d565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de906024015b602060405180830381865afa158015610b35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b59919061164d565b90505b6001600160a01b038216610b7257610b726116ca565b6001600160a01b038116610b8857610b886116ca565b915091565b806000610bc36001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630610ced565b6000805491925090610c03906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691309116610e05565b90506000610c1182846116e0565b905080600b0b600003610c6157600054610c5a906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169130911688610e9d565b9350610ce5565b81600b0b600014610ca757600054610c5a906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691168388610ff4565b600054610ce2906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811691168388611080565b93505b505050919050565b600080610cf984610a0b565b9150506000610d07856110ce565b60405163e8e7e2d160e01b81526001600160a01b0388811660048301528781166024830152919350600092509084169063e8e7e2d190604401602060405180830381865afa158015610d5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d819190611725565b60405163e8e7e2d160e01b81526001600160a01b038881166004830152878116602483015291925060009184169063e8e7e2d190604401602060405180830381865afa158015610dd5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df99190611725565b905061037b81836116e0565b600080610e1185610a0b565b604051631cd43d1160e31b81526001600160a01b03888116600483015287811660248301528681166044830152919350908316915063e6a1e88890606401608060405180830381865afa158015610e6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e90919061166a565b5090979650505050505050565b6060600080610eab876111df565b91509150816001600160a01b0316634329d29382836001600160a01b031663b4b333c68b8b8b600067ffffffffffffffff811115610eeb57610eeb611742565b6040519080825280601f01601f191660200182016040528015610f15576020820181803683370190505b50604051602401610f299493929190611758565b60408051808303601f1901815291815260208201805160e094851b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff909116179052519185901b7fffffffff00000000000000000000000000000000000000000000000000000000168252610fa193925090899060040161178c565b6000604051808303816000875af1158015610fc0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610fe8919081019061185b565b50979650505050505050565b6060600080611002876111df565b91509150816001600160a01b0316634329d29382836001600160a01b03166350209a628b8b8b600067ffffffffffffffff81111561104257611042611742565b6040519080825280601f01601f19166020018201604052801561106c576020820181803683370190505b50604051602401610f2994939291906118bf565b606060008061108e876111df565b91509150816001600160a01b0316634329d29382836001600160a01b03166362fc305e8b8b8b600067ffffffffffffffff81111561104257611042611742565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fc36f6c05164a669ecb6da53e218d77ae44d51cfc99f91e5a125a18de0949bee4546001600160a01b038116610b5c576001600160a01b03821661119357826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa15801561116c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611190919061164d565b91505b604051635b69006f60e11b81527fdfd8ece9bfbcb8c5c540edb935641f63d67686490a1ab97f000288759f30a94660048201526001600160a01b0383169063b6d200de90602401610b18565b7f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea837547fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a546001600160a01b038116610b5c576001600160a01b0382166112a457826001600160a01b03166320bc44256040518163ffffffff1660e01b8152600401602060405180830381865afa15801561127d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a1919061164d565b91505b604051635b69006f60e11b81527fa9214cc96615e0085d3bb077758db69497dc2dce3b2b1e97bc93c3d18d83efd360048201526001600160a01b0383169063b6d200de90602401602060405180830381865afa158015611308573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061132c919061164d565b9050817f65599bf746e17a00ea62e3610586992d88101b78eec3cf380706621fb97ea83755807fb969d79d88acd02d04ed7ee7d43b949e7daf093d363abcfbbc43dfdfd1ce969a556001600160a01b038216610b7257610b726116ca565b6001600160a01b038116811461068f57600080fd5b60008083601f8401126113b157600080fd5b50813567ffffffffffffffff8111156113c957600080fd5b6020830191508360208285010111156113e157600080fd5b9250929050565b600080600080600080600080600060c08a8c03121561140657600080fd5b89356114118161138a565b985060208a01356114218161138a565b975060408a0135965060608a013567ffffffffffffffff8082111561144557600080fd5b6114518d838e0161139f565b909850965060808c013591508082111561146a57600080fd5b6114768d838e0161139f565b909650945060a08c013591508082111561148f57600080fd5b5061149c8c828d0161139f565b915080935050809150509295985092959850929598565b60005b838110156114ce5781810151838201526020016114b6565b50506000910152565b600081518084526114ef8160208601602086016114b3565b601f01601f19169290920160200192915050565b60208152600061151660208301846114d7565b9392505050565b600080600080600080600060a0888a03121561153857600080fd5b87356115438161138a565b965060208801356115538161138a565b955060408801359450606088013567ffffffffffffffff8082111561157757600080fd5b6115838b838c0161139f565b909650945060808a013591508082111561159c57600080fd5b506115a98a828b0161139f565b989b979a50959850939692959293505050565b6000602082840312156115ce57600080fd5b81356115168161138a565b600080604083850312156115ec57600080fd5b82356115f78161138a565b915060208301356116078161138a565b809150509250929050565b80600b0b811461068f57600080fd5b6000806040838503121561163457600080fd5b823561163f81611612565b946020939093013593505050565b60006020828403121561165f57600080fd5b81516115168161138a565b6000806000806080858703121561168057600080fd5b84519350602085015161169281611612565b6040860151606090960151949790965092505050565b6000602082840312156116ba57600080fd5b8151801515811461151657600080fd5b634e487b7160e01b600052600160045260246000fd5b600b81810b9083900b016b7fffffffffffffffffffffff81136b7fffffffffffffffffffffff198212171561094357634e487b7160e01b600052601160045260246000fd5b60006020828403121561173757600080fd5b815161151681611612565b634e487b7160e01b600052604160045260246000fd5b60006001600160a01b038087168352808616602084015280851660408401525060806060830152610a0160808301846114d7565b6001600160a01b03841681526080602082015260006117ae60808301856114d7565b8281038060408501526002825261060f60f31b602083015260408101606085015250610a0160408201856114d7565b600082601f8301126117ee57600080fd5b815167ffffffffffffffff8082111561180957611809611742565b604051601f8301601f19908116603f0116810190828211818310171561183157611831611742565b8160405283815286602085880101111561184a57600080fd5b610a018460208301602089016114b3565b6000806040838503121561186e57600080fd5b825167ffffffffffffffff8082111561188657600080fd5b611892868387016117dd565b935060208501519150808211156118a857600080fd5b506118b5858286016117dd565b9150509250929050565b60006001600160a01b03808716835280861660208401525083600b0b604083015260806060830152610a0160808301846114d756fea264697066735822122057707bb48a5efdefe85ad0bcf07902a78d1a6b9214bcc04eeac9ce708507fe5064736f6c63430008130033a2646970667358221220cf77c5e2ac393d1112a71fd0ff6e68ce45e858fbe8118a910a234515c3f26b3b64736f6c63430008130033";
