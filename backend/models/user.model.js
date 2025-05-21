import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import { appError } from "../utils/appError.js";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


UserSchema.statics.signup = async function (username, email, password) {
  // validation
if (!username || !email || !password) {
  throw appError(400, "All fields must be filled");
  
    
  }

  if (!validator.isEmail(email)) {
    throw appError(400, "Email not valid");
    
    
  }

  if (!validator.isStrongPassword(password)) {
    throw appError(400, "Password not strong enough");
    
  }

  // check if user already exists
  const exists = await this.findOne({ email });
  if (exists) {
    throw appError(400, "Email already in use");
    
  }
  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // create user
  const user = new this({ username, email, password: hash });
  await user.save(); // save user to database
  return user;
}

const User = mongoose.model("User", UserSchema);
export default User;