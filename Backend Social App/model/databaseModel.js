
const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timeStamp: true
});

const databaseModel = mongoose.model("signUp", dataSchema);

module.exports = databaseModel;