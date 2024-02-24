import mongoose from 'mongoose'
const quoteSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    by:{
        type:mongoose.Schema.Types.ObjectId
    },
});

mongoose.model("Quote",quoteSchema)