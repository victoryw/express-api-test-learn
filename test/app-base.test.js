"use strict";


const mongoose = require('mongoose');
const mockGoose = require('mockgoose').Mockgoose;
const mockGooseInstance = new mockGoose(mongoose);

before((done) => {
    mockGooseInstance.prepareStorage().then(function() {
        mongoose.connect('mongodb://example.com/TestingDB', (err) => {
            done(err);
        });
    });
});