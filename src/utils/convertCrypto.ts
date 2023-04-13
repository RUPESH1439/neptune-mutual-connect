import formatNumber from "./formatNumber";

const convertCrypto = (from: ICrypto, to: ICrypto, value: number): string => {
  if (from === to) {
    return value.toString();
  }
  let result = 0;
  if (from === "NEP" && to === "BUSD") {
    result = 3 * value;
  }
  if (from === "BUSD" && to === "NEP") {
    result = value / 3;
  }
  return formatNumber(result);
};

export default convertCrypto;
