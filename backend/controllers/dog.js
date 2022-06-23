const Dog = require('../models/dog');

exports.createDog = async (req, res, next) => {
    const { name, breed, birth } = req.body;
    if (!name || name.length == 0) {
        return res.status(200).send("A name is requirted");

    }
    //get user id
    const owner = req.user.user._id;
    try {
        const dog = await Dog.create({ name, breed, birth, owner });
        res.json({
            success: true,
            message: 'Dog created',
            dog: dog
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

exports.getDogsByOwner = async (req, res, next) => {
    const owner = req.user.user._id;

    try {
        const dog = await Dog.find({ owner });
        res.json({
            success: true,
            dog: dog
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}