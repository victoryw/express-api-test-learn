"use strict";

const request = require('supertest');
const should = require('should');

var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
mockgoose(mongoose);

const app = require('../app');
const userModel = require('../module/user')

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


