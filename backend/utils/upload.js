var multer = require('multer');
  
//Only allow images
const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
]

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(__dirname)
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    },
    fileFilter: (req, file, cb) => {
        if (!whitelist.includes(file.mimetype)) {
          return cb(new Error('file is not allowed'))
        }
        cb(null, true)
      }
});
  
module.exports = multer({ storage: storage });