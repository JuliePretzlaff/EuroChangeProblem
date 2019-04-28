const makeChange = amount => {
  if (amount < 0) return 0;
  if (amount === 0) return 1;

  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  let count = 0;

  const reduceAmount = (amount, index) => {
    // base case for after we've gone through lowest coin
    if (index < 0) return;

    for (let a = amount; a >= 0; a = (a - coins[index]).toFixed(2)) {
      if (a === 0) {
        count++;
      } else reduceAmount(a, index - 1);
    }
  };

  // start with highest coin
  reduceAmount(amount, coins.length - 1);
  return count;
};

console.log(makeChange(500));
