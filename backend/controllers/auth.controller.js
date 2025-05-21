import UserModel from "../models/user.model.js";


export const signupUser = async (req, res,next) => {
    const { username, email, password } = req.body;
    try {
     const user = await UserModel.signup(username,email, password);
        res.status(201).json(user);
      
    } catch (error) {
        next(error);  
    }
}