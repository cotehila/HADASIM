import fs from 'fs';

const filePath = './file.txt';

fs.readFile(filePath, 'utf8', (err, data) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log("File Content:");
    console.log(data);

    fs.stat(filePath, (err, stats) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log(`\nSize: ${stats.size} bytes`);
        console.log(`Created At: ${stats.birthtime.toISOString()}`);

    });

});

//////////////////////////////////////

import fs from 'fs';
import path from 'path';

function listFiles(directoryPath) {

    fs.readdir(directoryPath, (err, items) => {

        if (err) {
            console.log(err);
            return;
        }

        items.forEach(item => {

            const fullPath = path.join(directoryPath, item);

            fs.lstat(fullPath, (err, stats) => {

                if (err) {
                    console.log(err);
                    return;
                }

                if (stats.isFile()) {
                    console.log(`File: ${item}`);
                }

            });

        });

    });
}

listFiles('./myFolder');

///////////////////////////////////////

function countdown(num) {

    console.log(num);

    if (num === 0) {
        console.log("Time's up!");
        return;
    }

    setTimeout(() => {
        countdown(num - 1);
    }, 1000);
}

countdown(5);

////////////////////////////////////////

import fs from 'fs';

function randomLine(filePath) {

    fs.readFile(filePath, 'utf8', (err, data) => {

        if (err) {
            console.log(err);
            return;
        }

        const lines = data.split('\n');

        const validLines = lines.filter(line => line.trim() !== '');

        const randomIndex = Math.floor(Math.random() * validLines.length);

        console.log(`Random Line: ${validLines[randomIndex]}`);

    });
}

randomLine('./quotes.txt');

////////////////////////////////////////

import os from 'os';

let count = 0;

const intervalId = setInterval(() => {

    const freeMemory = os.freemem();
    const totalMemory = os.totalmem();

    const percentage = (freeMemory / totalMemory) * 100;

    console.log(`Free Memory: ${percentage.toFixed(2)}%`);

    count++;

    if (count === 5) {
        clearInterval(intervalId);
        console.log("Memory logging complete.");
    }

}, 2000);
