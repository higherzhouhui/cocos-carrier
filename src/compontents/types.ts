import {
  ICallContractParams,
  TChainId,
  TSignatureParams,
  TWalletInfo,
} from "@aelf-web-login/wallet-adapter-base";

export interface PortkeyBridge {
  getAccountByChainId: (chainId: TChainId) => Promise<string>;
  getWalletSyncIsCompleted: (chainId: TChainId) => Promise<string | boolean>;
  callSendMethod: <T, R>(props: ICallContractParams<T>) => Promise<R>;
  callViewMethod: <T_1, R_1>(props: ICallContractParams<T_1>) => Promise<R_1>;
  connectWallet: () => Promise<TWalletInfo>;
  disConnectWallet: () => Promise<void>;
  lock: () => void;
  getSignature: (params: TSignatureParams) => Promise<{
    error: number;
    errorMessage: string;
    signature: string;
    from: string;
  } | null>;
}
