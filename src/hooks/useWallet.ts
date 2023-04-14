import { injected } from "@/components/Connectors";
import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useState } from "react";

export default function useWallet() {
  const { active, account, library, activate, deactivate, chainId } =
    useWeb3React();
  const [balance, setBalance] = useState<string | number>("--");

  const getBalance = useCallback(async () => {
    try {
      const _balance = await library?.eth?.getBalance(account);
      const balance = _balance / 1e18;
      setBalance(balance);
    } catch (err) {}
  }, [account, library?.eth]);

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    getBalance();
  }, [account, getBalance]);

  return { account, balance, connect, disconnect, chainId, active };
}
