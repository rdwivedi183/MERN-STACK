import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Getting Username and Password from .env
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// Set up default mongoose connection
const mongoDBuri = `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-flip-web.fzhlwr6.mongodb.net/?retryWrites=true&w=majority`;

export const connection = async () => {
  try {
    mongoose.connect(mongoDBuri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Data base connected successfully")
  } catch (error) {
    console.log(error);
  }
};
