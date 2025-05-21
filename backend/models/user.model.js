import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
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
 
// static signup method
UserSchema.statics.signup = async function (username, email, password) {
  // validation
  if (!username || !email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  // check if user already exists
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }
  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // create user
  const user = new this({ username, email, password: hash });
  await user.save(); // save user  database
  return user;
}

const User = mongoose.model("User", UserSchema);
export default User;
