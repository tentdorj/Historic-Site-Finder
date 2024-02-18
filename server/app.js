require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
// const authMiddleware = require('./middleware/authMiddleware');
const userRouter = require("./routes/UserRoute");
const commentRouter = require("./routes/comment");




const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
//
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

app.use("/api", userRouter);
app.use("/api", commentRouter)
// app.use("/api", authRoutes);
// app.use("/api", commentRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
