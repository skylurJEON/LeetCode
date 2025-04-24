function countCompleteSubarrays(nums: number[]): number {
    const total = new Set(nums).size;
    let count = 0;

    for (let i=0; i<nums.length; i++){
        const seen = new Set<number>();
        for(let j = i; j<nums.length; j++){
            seen.add(nums[j]);
            if(seen.size === total){
                count++;
            }
        }
    }

    return count;
};