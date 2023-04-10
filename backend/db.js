const mongoose = require("mongoose");

module.exports.connect=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/StackData")
    .then(()=> console.log("Successfully Connected StackData"))
    .catch((err)=>console.log(err));
}

