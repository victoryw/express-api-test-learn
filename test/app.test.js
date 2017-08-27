"use strict";

const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const mockGoose = require('mockgoose').Mockgoose;
const mockGooseInstance = new mockGoose(mongoose);
const proxyQuire = require('proxyquire');
const proxiedMongoose = {
    connect: (db) => {
        before((done) => {
            mockGooseInstance.prepareStorage().then(function() {
                mongoose.connect(db, (err) => {
                    done(err);
                });
            });
        });
    }
};
const app = proxyQuire('../bin/www', { mongoose: proxiedMongoose });

const userModel = require('../module/user');

describe('test/app.test.js', ()=>{
    it('should test happy path', (done)=>{
        let user = new userModel({name: 'aa', email: 'bb'});
        user.save().then(
            request(app).get(`/users/${user.id}`)
                .expect(200)
                .then((res)=>
                {
                    res.body.email.should.eql(user.email);
                    res.body.name.should.eql(user.name);
                    done();
                })
                .catch((error) => {
                    done(error);
                }))
    })
});


