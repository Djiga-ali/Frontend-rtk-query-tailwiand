require("dotenv").config();
require("express-async-errors"); //recommander et remplace "express-async-handler   "
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const { errorHandler, notFound } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectToDB = require("./config/dbConfig");
// Routes
const categoryRoutes = require("./routes/categoryRoutes");
const shopRoutes = require("./routes/shopRoutes");
const productRoutes = require("./routes/productRoutes");
const attributeRoutes = require("./routes/attributeRoutes");

const PORT = process.env.PORT || 7000;

connectToDB();

// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));

app.use("/category", categoryRoutes);
app.use("/shop", shopRoutes);
app.use("/product", productRoutes);
app.use("/attributes", attributeRoutes);

app.use(notFound);
app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
