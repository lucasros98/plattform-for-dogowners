const Dog = require('../models/dog');
const breeds = require('../data/dogbreeds')

exports.createDog = async (req, res, next) => {
    const { name, breed, birth } = req.body;
    if (!name || name.length == 0) {
        return res.status(200).send("A name is requirted");

    }
    //get user id
    const owner = req.user.user._id;
    try {
        const dog = await Dog.findOne({ owner });
        if (dog) return res.send({ message: "Dog already exist", success: false })


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

exports.getDogBreeds = async (req, res, next) => {
    res.json({
        success: true,
        breeds: breeds
    });
}

exports.getDogsByOwner = async (req, res, next) => {
    const owner = req.user.user._id;

    try {
        const dog = await Dog.findOne({ owner }).sort({ "updates.date": "desc" });
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
    const { text, weight, activityTime } = req.body;

    if (!text) return res.status(400).send("Text is required")

    const body = { text, weight, activityTime }

    try {
        const dog = await Dog.findOneAndUpdate({ owner }, { $addToSet: { updates: body } }, { new: true }).sort({ "updates.date": "desc" });
        return res.send({ success: true, dog: dog })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

exports.removeDogUpdate = async (req, res, next) => {
    const owner = req.user.user._id;
    const updateId = req.params.updateId;

    try {
        const dog = await Dog.findOneAndUpdate({ owner }, { $pull: { updates: { _id: updateId } } }, { new: true }).sort({ "updates.date": "desc" });
        return res.send({ success: true, dog: dog })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

