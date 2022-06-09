const {Connection} = require('./connection')

var insert = (obj,model) => {
     // compile schema to model
     var workout = new model(obj);

     // save to database
     return new Promise((resolve, reject) => {
         workout.save(function (err, result) {
            if (err) reject("Error occured");
            resolve("inserted")
        })
    });
}

var removeById = (obj,model) => {
    return new Promise((resolve, reject) => {
        model.deleteOne(obj, function (err) {
            if (err) reject("Error occured");
            resolve("deleted")
        });
   }); 
}

var update = (searchObj,updatedInfo,model) => {
    return new Promise((resolve,reject) => {
        model.updateOne(searchObj,updatedInfo, function(err, res) {
            if(err) {
                reject(err)
            }
            else {
                resolve(res)
            }
        })
    })
}

var findAll = (model) => {
    return new Promise((resolve,reject) => {
        model.find({}, function (err, docs) {
            if(err) reject(err)
            resolve(docs)
        });
    })
}

var findOne = (model,searchObj) => {
    return new Promise((resolve,reject) => {
        model.findOne(searchObj, function (err, docs) {
            if(err) reject(err)
            resolve(docs)
        });
    })
}

module.exports = {
    insert,
    removeById,
    update,
    findAll,
    findOne
}