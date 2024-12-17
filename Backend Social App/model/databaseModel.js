const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    bio: {
        type: String,
    },
    phone: {
        type: Number,
    },
}, {
    timeStamp: true
});

const databaseModel = mongoose.model("signUp", dataSchema);

module.exports = databaseModel;