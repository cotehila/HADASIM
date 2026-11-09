///--------------------------1-------------------------
import fs from 'fs';

function readFilePromise(path) {
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

readFilePromise('./test.txt')
    .then(console.log)
    .catch(console.log);

//--------------------------2-------------------------

import fs from 'fs';

async function readFileAsync(path) {
    const content = await fs.promises.readFile(path, 'utf8');
    return content;
}

readFileAsync('./test.txt')
    .then(console.log)
    .catch(console.log);

//--------------------------3-------------------------

async function getFileSize(path){
    try {
        const stats = await fs.promises.stat(path);
        return stats.size;
    } catch (error) {
        console.error("Error occurred while fetching file size:", error);
        throw error;
    }
}

getFileSize('./test.txt')
    .then(console.log)
    .catch(console.log);

//--------------------------4-------------------------

async function listFiles(dir){
    try {
        const files = await fs.promises.readdir(dir);
        return files;
    }catch (error) {
        console.error("Error occurred while listing files:", error);
        throw error;
    }
}

listFiles('./')
    .then(console.log)
    .catch(console.log);

//--------------------------5-------------------------

async function readFilesInOrder(files){
    try {
        for (const file of files) {
            const content = await fs.promises.readFile(file, 'utf8');
            console.log(`Content of ${file}:`, content);
        }
    } catch (error) {
        console.error("Error occurred while reading files:", error);
        throw error;
    }
}

//--------------------------6-------------------------

import fs from 'fs';

async function readFilesParallel(files) {
    const promises = files.map(file =>
        fs.promises.readFile(file, 'utf8')
    );

    const contents = await Promise.all(promises);

    console.log(contents);
}

readFilesParallel(['a.txt', 'b.txt'])
    .catch(console.log);

//--------------------------7-------------------------

function fileExists(path){
    return new Promise((resolve) => {
        fs.access(path, fs.constants.F_OK, (err) => {
            resolve(!err);
        });
    })
}

fileExists('./test.txt')
    .then(exists => {
        if (exists) {
            console.log("File exists!");
        } else {
            console.log("File does not exist.");
        }
    })
    .catch(console.error);

//--------------------------8-------------------------

async function copyFile(src, dest){
    try {
        const result = await fs.promises.readFile(src, 'utf8');
        await fs.promises.writeFile(dest, result);
    } catch (error) {
        console.error("Error occurred while copying file:", error);
        throw error;
    }
}

//--------------------------9-------------------------

import fs from 'fs';

async function mergeFiles(files, output) {
    const contents = await Promise.all(
        files.map(file => fs.promises.readFile(file, 'utf8'))
    );

    const mergedContent = contents.join('\n');

    await fs.promises.writeFile(output, mergedContent);

    console.log("Files merged successfully!");
}

mergeFiles(['a.txt', 'b.txt'], 'merged.txt')
    .catch(error => console.log(error));