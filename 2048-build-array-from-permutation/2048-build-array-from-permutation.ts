function buildArray(nums: number[]): number[] {
    const ans: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }
    return ans;
}
