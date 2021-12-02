const fs = require('fs');

const sonarSweep = () => {
    const data = fs.readFileSync('file/day-1.txt');
    const depths = data.toString().split('\n').map(e => parseInt(e));
    
    let prev = depths[0], count = 0;
    for (let i = 1; i < depths.length; i++) {
        if (depths[i] > prev) 
            count++;
        prev = depths[i];
    }

    return count;
};

const sonarSweepSliding = () => {
    const data = fs.readFileSync('file/day-1.txt');
    const depths = data.toString().split('\n').map(e => parseInt(e));

    let prev = depths[0] + depths[1] + depths[2], cur;
    let count = 0;

    for (let i = 3; i < depths.length; i++) {
        cur = prev + depths[i] - depths[i - 3];
        if (cur > prev) count++;
        prev = cur;
    }

    return count;
}

console.log(sonarSweep());
console.log(sonarSweepSliding());
