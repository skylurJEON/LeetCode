function minDominoRotations(tops: number[], bottoms: number[]): number {
    const n = tops.length;

    function check(x: number): number {
        let topRot = 0;
        let bottomRot = 0;

        for (let i = 0; i < n; i++) {
            if (tops[i] !== x && bottoms[i] !== x) {
                // 이 도미노에선 x를 위든 아래든 만들 수 없음
                return -1;
            } else if (tops[i] !== x) {
                // 위가 x가 아니면 회전 필요
                topRot++;
            } else if (bottoms[i] !== x) {
                // 아래가 x가 아니면 회전 필요
                bottomRot++;
            }
        }

        // top이든 bottom이든 더 적은 쪽을 선택
        return Math.min(topRot, bottomRot);
    }

    const ans1 = check(tops[0]);
    const ans2 = tops[0] === bottoms[0] ? ans1 : check(bottoms[0]);

    if (ans1 === -1 && ans2 === -1) return -1;
    if (ans1 === -1) return ans2;
    if (ans2 === -1) return ans1;
    return Math.min(ans1, ans2);
}
