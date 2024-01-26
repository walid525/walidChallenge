const createError = require("http-errors");
const cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./routes/productRoutes");

const app = express();
const connectDB = require("./helpers/connectDB");
connectDB();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products", productRoutes);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  if (err.status === 404) {
    res.status(404).send("Page non trouvée");
  } else {
    res.status(500).send("Une erreur est survenue!");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
