import { FunctionComponent } from "react";
import truncateEthAddress from "truncate-eth-address";
import { Button, Modal } from "../UI";
import { RxCross1 } from "react-icons/rx";
import useWallet from "@/hooks/useWallet";
import WalletItem from "./WalletItem";

interface WalletDetailProps {
  openWalletDetail: boolean;
  closeWalletDetail: () => void;
}

const WalletDetail: FunctionComponent<WalletDetailProps> = ({
  openWalletDetail,
  closeWalletDetail,
}) => {
  const { account, chainId, balance, active, connect, disconnect } =
    useWallet();

  if (!openWalletDetail) return null;

  const walletDetail = [
    { key: "KEY", value: "VALUE" },
    {
      key: "Account",
      value: truncateEthAddress(account ?? ""),
    },
    {
      key: "Chain ID",
      value: chainId,
    },
    {
      key: "Balance",
      value: balance,
    },
  ];

  const renderWalletDetails = () => {
    return (
      <div className="flex flex-col">
        {walletDetail.map(({ key, value }, index) => (
          <WalletItem key={key} _key={key} value={value} header={index === 0} />
        ))}
      </div>
    );
  };

  const renderConnectButtons = () => (
    <div className="flex flex-1 w-full mt-5 flex-row gap-2">
      <Button variant="primary" onClick={connect}>
        Connect
      </Button>
      <Button variant="outlined">Cancel</Button>
    </div>
  );

  const renderDisconnectButton = () => (
    <div className="flex flex-1 w-full mt-5">
      <Button variant="error" onClick={disconnect}>
        Disconnect
      </Button>
    </div>
  );

  return (
    <Modal>
      <div className="absolute w-96 bg-white rounded-lg px-5 py-5">
        <button
          className="absolute right-5 bg-white"
          onClick={closeWalletDetail}
        >
          <RxCross1 size={20} />
        </button>
        <span className="text-lg font-semibold">Wallet Details</span>
        <div className="mt-8">
          {active ? (
            renderWalletDetails()
          ) : (
            <span className="text-error">
              {`Wallet not connected. Please click the 'Connect' button
                below`}
            </span>
          )}
        </div>
        {active ? renderDisconnectButton() : renderConnectButtons()}
      </div>
    </Modal>
  );
};

export default WalletDetail;
