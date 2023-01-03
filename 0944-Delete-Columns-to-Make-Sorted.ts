function minDeletionSize(strs: string[]): number {
  let count: number = 0;
  let m = strs.length;
  let n = strs[0].length;

  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m - 1; i++) {
      if (strs[i][j].charAt(0) > strs[i + 1][j].charAt(0)) {
        count++;
        break;
      }
    }
  }

  return count;
}
