const { processInput } = require('./common');

const dive = () => {
    const moves = processInput('inputs/day-2.txt')
        .map(e => {
            const arr = e.split(' ');
            return [arr[0], parseInt(arr[1])];
        });

    let x = 0, y = 0;

    for (const move of moves) {
        switch (move[0]) {
            case 'forward':
                x += move[1];
                break;
            case 'down':
                y += move[1];
                break;
            case 'up':
                y -= move[1];
                break;
            default:
                break;
        }
    }

    return x * y;
}

const diveAim = () => {
    const moves = processInput('inputs/day-2.txt')
        .map(e => {
            const arr = e.split(' ');
            return [arr[0], parseInt(arr[1])];
        });

    let x = 0, y = 0, aim = 0;

    for (const move of moves) {
        switch (move[0]) {
            case 'forward':
                x += move[1];
                y += (aim * move[1]);
                break;
            case 'down':
                aim += move[1];
                break;
            case 'up':
                aim -= move[1];
                break;
            default:
                break;
        }
    }

    return x * y;
}

console.log(dive());
console.log(diveAim());