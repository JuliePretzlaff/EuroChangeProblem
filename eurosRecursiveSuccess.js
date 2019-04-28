const makeChange = amount => {
  if (amount < 0) return 0;
  if (amount === 0) return 1;

  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  let count = 0;

  const reduceAmount = (remainingAmount, index) => {
    if (index === 0) {
      if (remainingAmount % coins[index] === 0) count++;
      return;
    }

    while (remainingAmount >= 0) {
      reduceAmount(remainingAmount, index - 1);
      remainingAmount -= coins[index];
    }
  };

  // start with full amount and highest coin
  reduceAmount(amount, coins.length - 1);
  return count;
};

console.log(makeChange(500));
