import mongoose from 'mongoose' 

const userSchema = mongoose.Schema({
    name:String,
    lastName:String,
    email:String,
    address:String

})

const users = new mongoose.model("graphql",userSchema)

export default users;