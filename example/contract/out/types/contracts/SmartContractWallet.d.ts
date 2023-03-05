import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export type CallStruct = {
    callee: PromiseOrValue<string>;
    functionSelector: PromiseOrValue<BytesLike>;
    data: PromiseOrValue<BytesLike>;
};
export type CallStructOutput = [string, string, string] & {
    callee: string;
    functionSelector: string;
    data: string;
};
export interface SmartContractWalletInterface extends utils.Interface {
    functions: {
        "execute((address,bytes4,bytes)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "execute"): FunctionFragment;
    encodeFunctionData(functionFragment: "execute", values: [CallStruct[]]): string;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    events: {};
}
export interface SmartContractWallet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SmartContractWalletInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        execute(calls: CallStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    execute(calls: CallStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        execute(calls: CallStruct[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        execute(calls: CallStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        execute(calls: CallStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
