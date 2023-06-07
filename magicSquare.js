function checkMagicSquare(n, matrix) {
    let target = (n * (n * n + 1)) / 2;
    
    // Calculate the sum of the first row
    let rowSum = matrix[0].reduce((sum, num) => sum + num, 0);
    
    // Check row sums
    for (let i = 1; i < n; i++) {
      let sum = matrix[i].reduce((sum, num) => sum + num, 0);
      if (sum !== rowSum) {
        return "No";
      }
    }
  
    // Check column sums
    for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = 0; j < n; j++) {
        sum += matrix[j][i];
      }
      if (sum !== rowSum) {
        return "No";
      }
    }
  
    // Check diagonal sums
    let sumd1 = 0;
    let sumd2 = 0;
    for (let i = 0; i < n; i++) {
      sumd1 += matrix[i][i];
      sumd2 += matrix[i][n - 1 - i];
    }
    
    if (sumd1 !== rowSum || sumd2 !== rowSum) {
      return "No";
    }
  
    return "Yes";
  }
  
  
  const n = 3;
  const matrix = [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6]
  ];
  
  const result = checkMagicSquare(n, matrix);
  console.log(result);  