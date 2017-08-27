"use strict";

const app = require('../bin/www');
const request = require('supertest');
const should = require('should');



describe('test/app.test.js', ()=>{
    it('should test happy path', (done)=>{
        request(app).get('/users')
            .expect(200)
            .then(()=>{done();});
    })
});


