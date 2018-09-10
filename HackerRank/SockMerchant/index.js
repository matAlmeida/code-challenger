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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    const testN = ((n > 0) && (n < 101));
    
    const testArValues = ar.filter(val => ((val >= 1) || (val <= 100)) ).includes(false)
    const testAr = ((ar.length >= 0) && (ar.length <= n)) && !testArValues
    
    if (testN && testAr) {
        const colorsQuantity = ar.reduce((agg, color) => {
            const colorIndex = agg.findIndex((val) => {
                return val.color === color;
            })
            
            if (colorIndex > -1) {
                agg[colorIndex].quantity += 1;
                
                return agg;
            };
            
            agg.push({color, quantity: 1});
            
            return agg;
        }, [])
        
        const socksPair = colorsQuantity.reduce((total, socks) => {
            const pairs = Math.floor(socks.quantity / 2);
            
            return total + pairs;
        }, 0)
        
        return socksPair;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
