import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import cors
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js"; // Import user router
import { errorHandler } from "./middlewares/errorHandler.js";
import authRouter from "./routes/auth.route.js"; // Import auth router
dotenv.config();
const app = express();

app.use(cors()); 
app.use(express.json());
app.use("/api/user", userRouter); // Use user router for /api/user
app.use("/api/auth", authRouter); // Use user router for /api/auth

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

