// import {User} from './models/User'
import "./models/User.js"
import mongoose from 'mongoose'
const User = mongoose.model("User")


const resolvers={
    Query:{
       
    },
    // User:{

    // },
    Mutation:{
         signupUser:(_,{userNew})=>{
            const user = User.findOne({email:userNew.email})
            if(user){
                throw new Error("user already exists")
            }
         }
    }
}

export default resolvers;