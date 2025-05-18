import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import cors
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js"; // Import user router
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();
const app = express();

app.use(cors()); 
app.use(express.json());
app.use("/api/users", userRouter); // Use user router for /api/users


app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

