function numRabbits(answers: number[]): number {
    const newArr: number[] = [];
    for (const num of answers){
        newArr[num+1] = (newArr[num+1] ?? 0) +1;
    }

    const n = newArr.length;
    let count = 0;

    
    for(let i =2; i<n; i++){
        if(newArr[i] !== undefined){
            if(i<newArr[i]){
                count += (Math.ceil(newArr[i]/i)*i)
            }
            else{count += i}
        }


    }

    return count+ (newArr[1]??0);

};