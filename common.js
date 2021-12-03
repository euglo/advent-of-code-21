const fs = require('fs');

const processInput = (name) => {
    const data = fs.readFileSync(name);
    return data.toString().split('\n');
}

module.exports = {
    processInput
}