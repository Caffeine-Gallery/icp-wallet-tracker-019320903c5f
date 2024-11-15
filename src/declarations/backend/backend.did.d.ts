import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface WalletData { 'count' : bigint, 'timestamp' : bigint }
export interface _SERVICE {
  'getWalletData' : ActorMethod<[], Array<WalletData>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
