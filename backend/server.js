import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectToMongoDB from "./database/connectToMongoDB.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) => {
  // root route
  res.send("Server is running!");
});

// auth routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
