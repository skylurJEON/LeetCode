function numTilings(n: number): number {
    const MOD = 1_000_000_007;

    const dp = new Array(n + 1).fill(0);
    const prefix = new Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;
    if (n >= 2) dp[2] = 2;

    prefix[0] = dp[0];
    prefix[1] = (prefix[0] + dp[1]) % MOD;
    if (n >= 2) prefix[2] = (prefix[1] + dp[2]) % MOD;

    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2] + 2 * prefix[i - 3]) % MOD;
        prefix[i] = (prefix[i - 1] + dp[i]) % MOD;
    }

    return dp[n];
}
