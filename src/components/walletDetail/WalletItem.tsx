import { FunctionComponent } from "react";

interface WalletItemProps {
  _key: string;
  value: string | number | undefined | null;
  header?: boolean;
}

const WalletItem: FunctionComponent<WalletItemProps> = ({
  _key,
  value,
  header = false,
}) => {
  return (
    <div
      className={`flex flex-row justify-between py-2 text-gray-dark border-b-[1px] border-gray-light border-opacity-50 ${
        !!header && "font-bold text-sm "
      }`}
    >
      <span>{_key}</span>
      <span>{value}</span>
    </div>
  );
};

export default WalletItem;
