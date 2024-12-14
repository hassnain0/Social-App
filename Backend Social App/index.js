const express = require('express');
const app = express();
const cors = require("cors");
const path=require('path');


// <========>
const signUpRoute=require('./route/signup');
const PORT = 3000;
// <========>


app.use(cors());
app.use(express.json());

app.use("/signUp",signUpRoute)

app.listen(PORT, () => {
    console.log("Server is me and running on  port http://localhost:"+PORT)
});