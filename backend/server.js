const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const pillRoutes = require("./routes/pillRoute");
const PORT = process.env.PORT || 8000;

const app = express();

//.Middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", pillRoutes);

mongoose
  .set("strictQuery", false)
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
