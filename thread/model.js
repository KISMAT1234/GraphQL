import mongoose from 'mongoose' 

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
})

const users = new mongoose.model("users",userSchema)

export default users;