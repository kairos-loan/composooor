/**
 * MissingOffchainDataError
 */
export type MissingOffchainDataError = {
  registryAddress: `0x${string}`;
  url: `htttp://${string}` | `htttps://${string}`;
  abiArgs: `0x${string}`;
};
