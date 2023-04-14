import { FunctionComponent, useState } from "react";
import { RxLoop } from "react-icons/rx";
import { Button, TextField } from "../UI";
import { convertCrypto } from "@/utils";

interface CryptoConverterProps {}

const container = `bg-white px-12 py-12 rounded-md w-96`;
const inputContainer = "flex flex-col my-5";

const title = `text-2xl font-bold tracking-wide`;

const toggleButton = `mt-4 items-center justify-center flex`;

const CryptoConverter: FunctionComponent<CryptoConverterProps> = () => {
  const [nep, setNep] = useState<string | number>(0);
  const [busd, setBusd] = useState<string | number>(0);
  const [toggleCrypto, setToggleCrypto] = useState(false);

  const convertBusd = (value: string) => {
    setBusd(value);
    setNep(convertCrypto("BUSD", "NEP", parseFloat(value)));
  };

  const convertNep = (value: string) => {
    setNep(value);
    setBusd(convertCrypto("NEP", "BUSD", parseFloat(value)));
  };

  return (
    <div className={container}>
      <span className={title}>Crypto converter</span>
      <div className={inputContainer}>
        <TextField
          label={toggleCrypto ? "BUSD" : "NEP"}
          value={toggleCrypto ? busd : nep}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (toggleCrypto) {
              convertBusd(target.value);
            } else {
              convertNep(target.value);
            }
          }}
        />
        <button
          className={toggleButton}
          onClick={() => setToggleCrypto((prev) => !prev)}
        >
          <RxLoop size={20} />
        </button>
        <TextField
          label={toggleCrypto ? "NEP" : "BUSD"}
          value={toggleCrypto ? nep : busd}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            if (toggleCrypto) {
              convertNep(target.value);
            } else {
              convertBusd(target.value);
            }
          }}
        />
        <Button variant="ghost" _className="mt-8" onClick={() => {}}>
          Check Wallet Balance
        </Button>
      </div>
    </div>
  );
};

export default CryptoConverter;
