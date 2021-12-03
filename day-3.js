const { processInput } = require('./common');

const gammaRate = () => {
    const bitstrings = processInput('./inputs/day-3.txt');
    let gamma = '', beta = '';

    for (let i = 0; i < bitstrings[0].length; i++) {
        // Find bits at the ith position
        const bits = bitstrings.map(b => parseInt(b[i]));
        // Count the number of 1's that appear
        const numOnes = bits.reduce((prev, cur) => prev + cur, 0);

        gamma += numOnes >= (bitstrings.length - numOnes) ? '1' : '0';
        beta += gamma[gamma.length - 1] === '1' ? '0' : '1'; 
    }

    return parseInt(gamma, 2) * parseInt(beta, 2);
}

const getOxygenCO2Rating = (isOxygen = true) => {
    let bitstrings = processInput('./inputs/day-3.txt');
    
    let i = 0;
    while (bitstrings.length !== 1) {
        // Find bits at the ith position
        const bits = bitstrings.map(b => parseInt(b[i]));
        // Count the number of 1's that appear
        const numOnes = bits.reduce((prev, cur) => prev + cur, 0);

        let filter_bit;
        if (isOxygen) {
            filter_bit = numOnes >= (bitstrings.length - numOnes) ? '1' : '0';
        } else {
            filter_bit = numOnes >= (bitstrings.length - numOnes) ? '0' : '1';
        }

        bitstrings = bitstrings.filter(b => b[i] === filter_bit);
        i++;
    }

    return parseInt(bitstrings[0], 2);
}

const lifeSupportRate = () => {
    return getOxygenCO2Rating() * getOxygenCO2Rating(false);
}

console.log(gammaRate());
console.log(lifeSupportRate());