const MOD = 1e9 + 7;
const MAX = 10001;
const cnt: number[][] = Array.from({length: MAX}, () => Array(14).fill(0));
const dp: number[][] = Array.from({length: MAX}, () => Array(14).fill(0));

for (let i = 0; i < MAX; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= Math.min(i, 13); j++) {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % MOD;
    }
}

for (let cur = 1; cur < MAX; cur++) {
    cnt[cur][0]++;
    for (let i = cur * 2; i < MAX; i += cur) {
        for (let bars = 0; bars < 13; bars++) {
            if (cnt[cur][bars]) {
                cnt[i][bars + 1] += cnt[cur][bars];
            }
        }
    }
}

function idealArrays(n: number, maxValue: number): number {
    let res = 0;
    for (let i = 0; i <= maxValue; i++) {
        for (let bars = 0; bars < Math.min(14, n); bars++) {
            res = (res + cnt[i][bars] * dp[n - 1][bars]) % MOD;
        }
    }
    return res;
}