const express = require('express');
const {
    signUp,
    updateUserData,
} = require('../controller/controller');

const router = express.Router();

router.post('/', signUp);


module.exports = router;