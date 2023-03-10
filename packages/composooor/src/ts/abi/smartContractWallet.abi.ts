export const abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'callee',
            type: 'address',
          },
          {
            internalType: 'bytes4',
            name: 'functionSelector',
            type: 'bytes4',
          },
          {
            internalType: 'bytes',
            name: 'data',
            type: 'bytes',
          },
        ],
        internalType: 'struct SmartContractWallet.Call[]',
        name: 'calls',
        type: 'tuple[]',
      },
    ],
    name: 'execute',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
