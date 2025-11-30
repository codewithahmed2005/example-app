import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

// static frontend folder
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

// API route
app.post("/api/message", (req, res) => {
  const userMsg = req.body.message;
  res.json({ reply: "Backend ne reply diya: " + userMsg });
});

// server start
app.listen(5000, () => {
  console.log("Server running → http://localhost:5000");
});
