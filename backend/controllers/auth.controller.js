import userModel from "../models/user.model.js";


export const signupUser = async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        const user = await userModel.signup(username, email, password);
        res.status(200).json(user);


    } catch (error) {
        res.status(400).json({ error: error.message });
    }

    
}