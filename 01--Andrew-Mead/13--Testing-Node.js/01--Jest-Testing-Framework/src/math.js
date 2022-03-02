const calculateTip = (total, tip) => {
  const tip = total * tip;
  return total + tip;
};

module.exports = {
  calculateTip,
};
