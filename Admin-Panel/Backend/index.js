require('dotenv').config();
const express = require("express");
const dbconnect = require("./config/db");
const userRouter = require("./routes/userRoutes");
const BlogPostRouter = require("./routes/blogPostRoutes");
const commentRouter = require("./routes/commentRoutes");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

// Routes
app.use("/users", userRouter);
app.use("/blogPosts", BlogPostRouter);
app.use("/comments", commentRouter);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ message: "Server is running", status: "OK" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
    dbconnect();
});
  