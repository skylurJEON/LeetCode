function countGood(nums: number[], k: number): number {
    const freq: Record<number, number> = {};
    let left = 0, right = 0;
    let pairs = 0;
    let result = 0;

    while (right < nums.length) {
        const rVal = nums[right];
        if (!freq[rVal]) freq[rVal] = 0;
        pairs += freq[rVal];
        freq[rVal]++;
        right++;

        
        while (pairs >= k) {
            result += nums.length - right + 1;
            const lVal = nums[left];
            freq[lVal]--;
            pairs -= freq[lVal];
            left++;
        }
    }

    return result;
}