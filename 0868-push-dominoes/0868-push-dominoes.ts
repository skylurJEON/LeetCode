function pushDominoes(dominoes: string): string {
  const n = dominoes.length;
  const forces = new Array(n).fill(0);

  // 1. 오른쪽으로 힘 계산
  let force = 0;
  for (let i = 0; i < n; i++) {
    if (dominoes[i] === 'R') force = n;
    else if (dominoes[i] === 'L') force = 0;
    else force = Math.max(force - 1, 0);
    forces[i] += force;
  }

  // 2. 왼쪽으로 힘 계산 (반대 방향)
  force = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (dominoes[i] === 'L') force = n;
    else if (dominoes[i] === 'R') force = 0;
    else force = Math.max(force - 1, 0);
    forces[i] -= force;
  }

  // 3. 결과 조합
  return forces.map(f =>
    f > 0 ? 'R' :
    f < 0 ? 'L' :
    '.'
  ).join('');
}
