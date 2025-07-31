const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/UserRoute");
const app = express();
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Working, start coding u baaka!");
});

app.use("/users", userRoute);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Conntected !");
    app.listen(PORT, () => {
      return console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error while connecting mongo DB", err);
  });

