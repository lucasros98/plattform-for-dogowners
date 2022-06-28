const Dog = require('../models/dog');

exports.createDog = async (req, res, next) => {
    const { name, breed, birth } = req.body;
    if (!name || name.length == 0) {
        return res.status(200).send("A name is requirted");

    }
    //get user id
    const owner = req.user.user._id;
    try {
        const dog = await Dog.find({ owner });
        if(dog) res.send("Dog already exist")


        const newDog = await Dog.create({ name, breed, birth, owner });
        res.json({
            success: true,
            message: 'Dog created',
            dog: newDog
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

exports.createNewUpdate = async (req, res, next) => {
    const owner = req.user.user._id;
    const {text,weight,activityTime} = req.body;

    if(!text) return res.status(400).send("Text is required")

    const body ={text,weight,activityTime}

    try {
        const dog = await Dog.findOneAndUpdate({ owner },{ $addToSet: { updates: body } },{new: true});
        return res.send({success:true,dog:dog})
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

