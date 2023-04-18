const mongoose = require("mongoose");
const url = "mongodb+srv://pranavsen962:Kavasaki9_@cluster0.d9jekqe.mongodb.net/StackData"
module.exports.connect=()=>{
    mongoose.connect(url)
    .then(()=> console.log("Successfully Connected StackData"))
    .catch((err)=>console.log(err));
}

