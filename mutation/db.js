const mongoose =  require('mongoose')

const databaseConnection = async() =>{
   try{
    await mongoose.connect("mongodb://localhost:27017/Donationbank")
    console.log("Database Connected Successfully");
   }catch(err){
       console.error(err);
       process.exit();
   }
}

export default databaseConnection;
