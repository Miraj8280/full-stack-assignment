import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectToMongoDB from "./database/connectToMongoDB.js";
import path from "path";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());

// auth routes
app.use("/api/auth", authRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
