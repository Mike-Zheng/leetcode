package main

func missingNumber(nums []int) int {
	var sumIndex = 0
	var sumValue = 0
	for i, v := range nums {
		sumIndex += i
		sumValue += v

	}

	sumIndex += len(nums)

	return sumIndex - sumValue
}
