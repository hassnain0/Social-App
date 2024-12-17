const express = require('express');
const {
    updateUserData,
} = require('../controller/controller');

const router = express.Router();

router.route('/:id').patch(updateUserData);

module.exports = router;