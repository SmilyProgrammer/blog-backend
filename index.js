const express = require("express");
const app = express();

const server = require("http").createServer(app);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/routes");
require("dotenv").config();
const cors = require("cors");

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

/**
 * Connection Establish With MongoDB
 */
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URI).then(() => {
  console.log("MongoDB Connected Successfully");
});

app.use(cors());
app.use("/v1/api", router);

server.listen(4000, () => {
  console.log("Server is Running on Port 4000");
});
