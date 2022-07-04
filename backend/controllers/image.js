const User = require('../models/user');
const Image = require('../models/image');
const fs = require('fs');
const path = require('path');



exports.getImage = async (req, res, next) => {
    const id = req.params.id;
    const userId = req.user.user._id;

    Image.findOne({user:userId,_id:id}, (err, image) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.send( image );
        }
    });
};

exports.uploadProfileImage = async (req, res, next) => { 
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
    try {
        const image = await Image.create(obj);
        const user = await User.updateOne({_id:userId},{profileImage:image._id})

        res.json({
          success: true,
          image: image
        });
      }
      catch (err) {
        res.status(500).json({
          success: false,
          message: err.message,
        })
      }
}
