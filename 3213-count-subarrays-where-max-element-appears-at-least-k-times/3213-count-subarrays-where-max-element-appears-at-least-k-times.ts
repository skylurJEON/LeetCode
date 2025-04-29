function countSubarrays(nums: number[], k: number): number {
    const maxVal = Math.max(...nums); // 최대값 구하기
    let count = 0; // 결과 저장
    let left = 0; // 윈도우 왼쪽
    let maxCount = 0; // 현재 윈도우 내 maxVal 등장 횟수

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === maxVal) maxCount++;

        while (maxCount >= k) {
            // maxVal이 k번 이상 등장했을 때
            // 이 구간의 끝에서부터 끝까지 확장 가능한 개수는 (nums.length - right)
            count += nums.length - right;

            if (nums[left] === maxVal) maxCount--;
            left++; // 왼쪽 포인터 이동
        }
    }

    return count;
}
