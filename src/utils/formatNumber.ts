const formatNumber = (value: number) => {
  return value % 1 === 0 ? value.toString() : value.toFixed(2);
};

export default formatNumber;
