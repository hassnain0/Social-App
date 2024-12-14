const mongoose = require("mongoose");

const connectDb = async (url) => {
    return await mongoose.connect(url).then(() => {
        console.log("Database is connected")
    }).catch((erro) => {
        console.log("Error Occurs", erro)
    })
}

module.exports={connectDb}