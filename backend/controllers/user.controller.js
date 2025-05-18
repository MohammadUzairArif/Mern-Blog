import User from "../models/user.model.js";

// GET /api/users
export const getUsers = async (req, res) => {
res.json({ message: "Hello World from get" });
};


