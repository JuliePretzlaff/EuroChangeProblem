const makeChange = amount => {
  if (amount < 0) return 0;
  if (amount === 0) return 1;

  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  let count = 0;

  for (let a = amount; a >= 0; a = a - coins[7]) {
    // 200
    for (let b = a; b >= 0; b = b - coins[6]) {
      // 100
      for (let c = b; c >= 0; c = c - coins[5]) {
        // 50
        for (let d = c; d >= 0; d = d - coins[4]) {
          // 20
          for (let e = d; e >= 0; e = e - coins[3]) {
            // 10
            for (let f = e; f >= 0; f = f - coins[2]) {
              // 5
              for (let g = f; g >= 0; g = g - coins[1]) {
                // 2
                for (let h = g; h >= 0; h = h - coins[0]) {
                  // 1
                  if (h === 0) count++;
                }
              }
            }
          }
        }
      }
    }
  }
  return count;
};

console.log(makeChange(500));
