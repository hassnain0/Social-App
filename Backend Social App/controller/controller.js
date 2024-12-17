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
async function signIn(req, res) {
    const body = req.body;
    if (!body) {
        return res.sendStatus(404);

    }
    console.log("Body", body);
    const response = await databaseModel.findOne({
        email: body.email,
        password: body.password,
    });
    console.log("Response ", response);
    if (response == null) return res.status(404).json({
        msg: "User not found"
    })

    return res.status(200).json({
        msg: "User Sucessfully SignIn",
        data: {
            id: response._id,
            name: response.name,
            email: response.email,
        }
    })


}

async function updateUserData(req, res) {

    console.log("Request Params",req.params)

    try{
    const body = req.body;
    const id=req.params.id;
    if (!body||!id) {
        return res.sendStatus(404).json({"msg":"Error"});
    }
    console.log("Body", body);

   const response=await databaseModel.findByIdAndUpdate(id, {
        name: body.name,
        email: body.email,
        bio: body.bio,
        address: body.address
    });
    console.log("Response After Update",response)
    res.status(200).json({
        "msg": "Sucess"
    })

}
catch(erro){
    console.log("Erro",erro)
}
}




module.exports = {
    signUp,
    signIn,
    updateUserData,
}