func sortArrayByParity(nums []int) []int {
	ans := make([]int, 0)
	for _, e := range nums {
		if e%2 == 0 {
			ans = append([]int{e}, ans...)
		} else {
			ans = append(ans, e)
		}
	}
	return ans
}