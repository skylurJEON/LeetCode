function maxTaskAssign(tasks: number[], workers: number[], pills: number, strength: number): number {
    tasks.sort((a, b) => a - b);
  workers.sort((a, b) => a - b);

  const canAssign = (k: number): boolean => {
    const taskSlice = tasks.slice(0, k);
    const workerSlice = workers.slice(workers.length - k);
    const deque: number[] = [];

    let i = k - 1; // task idx from hardest
    let j = k - 1; // worker idx from strongest
    let remainingPills = pills;

    while (i >= 0) {
      if (workerSlice[j] >= taskSlice[i]) {
        j--;
        i--;
      } else {
        if (remainingPills === 0) return false;

        // 찾을 수 있는 가장 약한 작업자 중 알약 먹이면 가능
        let found = false;
        let left = 0;
        while (left <= j) {
          if (workerSlice[left] + strength >= taskSlice[i]) {
            // 이 작업자에게 알약을 줘서 해결
            workerSlice.splice(left, 1);
            j--;
            i--;
            remainingPills--;
            found = true;
            break;
          }
          left++;
        }

        if (!found) return false;
      }
    }
    return true;
  };

  let low = 0;
  let high = Math.min(tasks.length, workers.length);
  let ans = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canAssign(mid)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
};