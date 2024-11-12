export const idlFactory = ({ IDL }) => {
  const WalletData = IDL.Record({ 'count' : IDL.Nat, 'timestamp' : IDL.Int });
  return IDL.Service({
    'getWalletData' : IDL.Func([], [IDL.Vec(WalletData)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
