const User = require('../models/user');

//does not work
exports.createUser = async(req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    if(email && password) {
        const user = await User.create({
            email,password
        })

        return res.send(user)
    }
    else {
        return res.send("res")
    }

    
}

exports.loginUser = (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    res.send("not finished")
}

exports.getUser = (req,res) => {

    res.send("not finished")
}