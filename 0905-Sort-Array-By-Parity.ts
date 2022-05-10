function sortArrayByParity(nums: number[]): number[] {
    return nums.reduce((acc: number[], item: number) => {
        if (item % 2 == 0) acc.unshift(item);
        else acc.push(item);
        return acc;
    }, []);
}
