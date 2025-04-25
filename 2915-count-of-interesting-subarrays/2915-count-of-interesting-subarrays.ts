function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
    const countMap = new Map<number, number>();
    countMap.set(0, 1); // 누적합 0이 처음에 1개 있다고 가정
    let prefix = 0;  // nums[i] % modulo == k인 숫자들의 누적 개수
    let result = 0;

    for (const num of nums) {
        if (num % modulo === k) {
            prefix++;
        }
        // 현재까지의 prefix % modulo
        const currentMod = prefix % modulo;

        // (prefix - target) % modulo == 0이 되는 지점
        // (prefix - k) % modulo를 찾기
        const need = (currentMod - k + modulo) % modulo;

        result += countMap.get(need) ?? 0;

        // 현재 prefix를 기록
        countMap.set(currentMod, (countMap.get(currentMod) ?? 0) + 1);
    }

    return result;
}
