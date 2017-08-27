'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, default: '' },
    email: { type: String, default: '' }
});

const UserModel = Mongoose.model('User', UserSchema);
module.exports = UserModel;