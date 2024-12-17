const express = require('express');
const app = express();
const cors = require("cors");
const path = require('path');
const {
    connectDb
} = require('./connection');

// <========>
const SignUproute = require('./route/signup');
const SignInroute = require('./route/signIn');
const route=require('./route/user')
const {
    getUserData
} = require('./controller/controller');

const PORT = 3000;
// <========>

connectDb("mongodb://127.0.0.1:27017/socialApp").then(() => {
    console.log("Database is connected")
})
// <========>   
app.use(cors());
app.use(express.json());

app.use("/signUp", SignUproute);
app.use("/signIn", SignInroute);
app.use("/api/users",route);

// <========>

app.listen(PORT, () => {
    console.log("Server is me and running on  port http://localhost:" + PORT)
});