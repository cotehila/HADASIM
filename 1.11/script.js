////////////////////////////////1-7
function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("hello") }, 3000);
    });
}

f1().then((result) => {
    console.log(result);
});

////////////////////////////////////

import fs from 'fs';

function readFileContent(path) {
    return new Promise((resolve, reject) => {

        fs.readFile(path, 'utf8', (err, data) => {

            if (err) {
                reject(err);
            } else {
                resolve(data);
            }

        });

    });
}

readFileContent('example.txt').then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});

////////////////////////////////////


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let r = Math.random();
        if (r > 0.5) {
            resolve(true);
        } else {
            reject(true);
        }
    }, 5000);
})

p.then((mess) => console.log("success")).catch((error) => { console.log("failure") });

/////////////////////////////////////

function raceTimers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Timer A finished");
        }, 2000);
        setTimeout(() => {
            reject("Timer B finished");
        }, 3000);
    })
}

raceTimers().then((mess) => console.log(mess));

//////////////////////////////////////

import https from 'https';

function fetchData(url) {
    return new Promise((resolve, reject) => {

        https.get(url, (response) => {

            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                resolve(data);
            });

        }).on('error', (err) => {
            reject(err);
        });

    });
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

fetchData(url)
    .then(response => {
        console.log(`Received data from ${url}:`);
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });

//////////////////////////////////////

function waitAll() {

    const p1 = new Promise((resolve) => {
        setTimeout(() => resolve("First"), 1000);
    });

    const p2 = new Promise((resolve) => {
        setTimeout(() => resolve("Second"), 2000);
    });

    const p3 = new Promise((resolve) => {
        setTimeout(() => resolve("Third"), 3000);
    });

    return Promise.all([p1, p2, p3]);
}

waitAll()
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.log(error);
    });

///////////////////////////////////////

import fs from 'fs';

function checkFileExists(path) {
    return new Promise((resolve, reject) => {

        fs.access(path, fs.constants.F_OK, (err) => {
            if (err) {
                reject(false);
            } else {
                resolve(true);
            }
        });

    });
}
               
checkFileExists('example.txt')
    .then(exists => {
        console.log(`File exists: ${exists}`);
    })
    .catch(error => {
        console.log(error);
    });

//////////////////////////////////8-10

/*
function chainedGreetings() {
    return new Promise((resolve) => {
    setTimeout(() => resolve("Hi!"), 1000);
    setTimeout(() => resolve("FirstHow are you?"), 2000);
    setTimeout(() => resolve("Goodbye!"), 1000);
    })
}

chainedGreetings().then((result) => {
    console.log(result);
}).then((result) => {
    console.log(result);
}).then((result) => {
    console.log(result);
});
*/

function waitAndSay(message, seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, seconds * 1000);
    });
}

function chainedGreetings() {
    waitAndSay("Hi!", 1)
        .then(() => waitAndSay("How are you?", 2))
        .then(() => waitAndSay("Goodbye!", 1));
}

chainedGreetings();

///////////////////////////////
import fs from 'fs';

function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

function writeFile(path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

function processFile(inputPath, outputPath) {

    readFile(inputPath)

        .then(content => {
            const words = content.trim().split(/\s+/);
            return words.length;
        })

        .then(count => {
            return writeFile(outputPath, `Word count: ${count}`);
        })

        .then(() => {
            console.log(`Word count written to ${outputPath}:`);
            return readFile(outputPath);
        })

        .then(result => {
            console.log(result);
        })

        .catch(error => {
            console.log(error);
        });
}

processFile('./input.txt', './result.txt');

////////////////////////////////

import https from 'https';

function fetchData(url) {
    return new Promise((resolve, reject) => {

        https.get(url, response => {
            let data = '';

            response.on('data', chunk => {
                data += chunk;
            });

            response.on('end', () => {
                resolve(data);
            });

        }).on('error', err => {
            reject(err);
        });

    });
}

function getUserTitle(userId) {

    const url = `https://jsonplaceholder.typicode.com/todos/${userId}`;

    fetchData(url)

        .then(response => {
            return JSON.parse(response);
        })

        .then(user => {
            console.log(`User ${userId}'s title: ${user.title}`);
        })

        .catch(error => {
            console.log(error);
        });
}

getUserTitle(4);

