const databaseModel = require('../model/databaseModel');

async function signUp(req, res) {
    const body = req.body;
    if (!body) {
        return res.sendStatus(400);

    }
    await databaseModel.create({
        name: body.name,
        email: body.email,
        password: body.password,
    });
    return res.sendStatus(200)
}

module.exports = {
    signUp,
}