const express = require('express');
const userModel = require('../module/user');

const router = express.Router();

router.get('/',  (req, res, next) => {
    userModel.find().then( (user)=> {
      "use strict";
        res.json(user).send('respond with a resource');
    });
});

router.get('/:user_id',  (req, res, next) => {
    userModel.findById(req.params.user_id).then( (user)=> {
        "use strict";
        res.json(user).send('respond with a resource');
    });
});

module.exports = router;
