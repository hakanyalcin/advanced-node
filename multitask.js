//process.env.UV_THREADPOOL_SIZE = 2;

const http = require('https');
const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

function doRequest() {
    http.request('https://www.google.com', res => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(Date.now() - start);
        });
    })
    .end();
}


function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash:', Date.now() - start);
    });
}

doRequest();

fs.readFile('multitask.js', 'utf-8', ()=> {
    console.log('FS:', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();
