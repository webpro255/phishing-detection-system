const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hello World, this is the phishing detection system!');
});

describe('GET /', () => {
    it('responds with hello world message', (done) => {
        request(app)
            .get('/')
            .expect('Hello World, this is the phishing detection system!', done);
    });
});
