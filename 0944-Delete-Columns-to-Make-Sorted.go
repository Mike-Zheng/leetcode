func minDeletionSize(strs []string) int {
	if len(strs) <= 1 {
		return 0
	}
	count := 0
	m := len(strs)
	n := len(strs[0])
	for j := 0; j < n; j++ {
		for i := 0; i < m-1; i++ {
			if strs[i][j] > strs[i+1][j] {
				count++
				break
			}
		}
	}
	return count
}

