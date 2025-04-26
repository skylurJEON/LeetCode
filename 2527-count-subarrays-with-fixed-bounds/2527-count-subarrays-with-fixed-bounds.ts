function countSubarrays(nums: number[], minK: number, maxK: number): number {
    let res = 0;
    let lastMinK = -1;
    let lastMaxK = -1;
    let lastInvalid = -1;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        // 범위 벗어난 숫자면 lastInvalid 갱신
        if (num < minK || num > maxK) {
            lastInvalid = i;
        }
        if (num === minK) {
            lastMinK = i;
        }
        if (num === maxK) {
            lastMaxK = i;
        }

        const validStart = Math.min(lastMinK, lastMaxK);
        if (validStart > lastInvalid) {
            res += validStart - lastInvalid;
        }
    }

    return res;
};