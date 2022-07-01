const Dog = require('../models/dog');
const Image = require('../models/image');
const fs = require('fs');
const path = require('path');



exports.getImage = async (req, res, next) => {
    const userId = req.user.user._id;

    Image.findOne({user:userId}, (err, image) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.send( image );
        }
    });
};

exports.uploadImage = async (req, res, next) => { 
    const userId = req.user.user._id;
 
    var obj = {
        name: req.body.name,
        user: userId,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join('./uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    Image.create(obj, (err, item) => {
        if (err) {
            console.log(err);
            return res.status(400).send({success:false,message:err})
        }
        return res.send({success:true,image:item})  
    })
}
