function checkMagicSquare(n, matrix) {
    let target = (n * (n * n + 1)) / 2;
    let sumd1 = 0;
    let sumd2 = 0;
  
    for (let i = 0; i < n; i++) {
      let rowSum = 0;
      for (let j = 0; j < n; j++) {
        rowSum += matrix[i][j];
      }
      if (rowSum !== target) {
        return "No";
      }
    }
  
    for (let i = 0; i < n; i++) {
      let colSum = 0;
      for (let j = 0; j < n; j++) {
        colSum += matrix[j][i];
      }
      if (colSum !== target) {
        return "No";
      }
    }
  
    for (let i = 0; i < n; i++) {
      sumd1 += matrix[i][i];
    }
  
    if (sumd1 !== target) {
      return "No";
    }
  
    for (let i = 0; i < n; i++) {
      sumd2 += matrix[n - 1 - i][i];
    }
  
    if (sumd2 !== target) {
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