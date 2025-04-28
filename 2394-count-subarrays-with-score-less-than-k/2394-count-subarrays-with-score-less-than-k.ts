function countSubarrays(nums: number[], k: number): number {
    let n = nums.length;
    let left = 0;
    let sum = 0;
    let result = 0;

    for (let right = 0; right < n; right++) {
        sum += nums[right];

        // score가 k 이상이면 left를 이동시킴
        while (sum * (right - left + 1) >= k) {
            sum -= nums[left];
            left++;
        }

        // (right - left + 1)개의 부분 배열이 조건을 만족
        result += (right - left + 1);
    }

    return result;
}
