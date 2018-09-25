'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
    let lettersA = 0;
    const aInS = s.split('').reduce((agg, item) => {
        if ( item === 'a' ) {
            agg += 1;
        }
        return agg;
    }, 0)
    
    const sTimes = (Math.floor(n / s.length));
    lettersA += (sTimes * aInS);
    
    const remainingLetters = n - (sTimes * s.length);
    
    for (let i = 0; i < remainingLetters; i++) {
        if(s[i] === 'a') lettersA += 1;
    }
    
    return lettersA;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}

