// import {User} from './models/User'
import "./models/User.js"
import mongoose from 'mongoose'
const User = mongoose.model("User")


const resolvers={
    Query:{
       async reciepe(_,{ID}){
        return await Recipe.findById(ID)
       }
    },
    // User:{

    // },
    // Mutation:{
    //      signupUser:(_,{userNew})=>{
    //         const user = User.findOne({email:userNew.email})
    //         if(user){
    //             throw new Error("user already exists")
    //         }
    //      }
    // }

    createUser: async ({ username, email, age }) => {
        const user = new User({ username, email, age });
        try {
          await user.save();
          return user;
        } catch (error) {
          throw new Error('Failed to create user');
        }
      },
}

export default resolvers;