const fs = require('fs');
const { processInput } = require('./common');

const sonarSweep = () => {
    const depths = processInput('inputs/day-1.txt').map(e => parseInt(e));
    
    let count = 0;
    for (let i = 1; i < depths.length; i++) {
        if (depths[i] > depths[i - 1]) 
            count++;
    }

    return count;
};

const sonarSweepSliding = () => {
    const depths = processInput('inputs/day-1.txt').map(e => parseInt(e));

    let count = 0;

    for (let i = 3; i < depths.length; i++) {
        if (depths[i] > depths[i - 3])
            count++;
    }

    return count;
}

console.log(sonarSweep());
console.log(sonarSweepSliding());
