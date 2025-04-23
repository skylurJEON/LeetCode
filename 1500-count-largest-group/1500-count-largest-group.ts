function countLargestGroup(n: number): number {
    const groups: Map<number, number> = new Map();
    let prevSum = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 10 === 0) {
            prevSum = 0;
            let num = i;
            while (num > 0) {
                prevSum += num % 10;
                num = Math.floor(num / 10);
            }
        } else {
            prevSum += 1;
        }

        groups.set(prevSum, (groups.get(prevSum) ?? 0) + 1);
    }

    const maxSize = Math.max(...groups.values());

    let res = 0;
    for (let count of groups.values()) {
        if (count === maxSize) res++;
    }

    return res;
}