const mongoose = require('mongoose') 

const userSchema = mongoose.Schema({
    name:String,
    lastName:String,
    email:String

})

module.exports = new mongoose.model("graphql",userSchema)