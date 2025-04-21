function numberOfArrays(differences: number[], lower: number, upper: number): number {
    let prefix = 0;
    let minPrefix = 0;
    let maxPrefix = 0;

    for (const diff of differences) {
        prefix += diff;
        minPrefix = Math.min(minPrefix, prefix);
        maxPrefix = Math.max(maxPrefix, prefix);
    }

    const minStart = lower - minPrefix;
    const maxStart = upper - maxPrefix;

    return Math.max(0, maxStart - minStart + 1);
};