import databaseConnection from '../connection.js'


// Import Mongoose and define the user schema
import mongoose from 'mongoose';
import  { Schema } from mongoose;

// Connect to MongoDB database
// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
databaseConnection();

// Define the user schema
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String
// // Assuming you have a password field
});

// Create the User model
const UserModel = mongoose.model('User', userSchema);

class UserService {
  static async createUser(payload) {
    const { firstName, lastName, email } = payload;
    try {
      const newUser = new UserModel({
        firstName,
        lastName,
        email,
      });
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error('Error creating user: ' + error.message);
    }
  }
}

module.exports = UserService;

