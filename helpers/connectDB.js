const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://walidbenhassine36:368AeCrmFMYxs3bq@cluster0.ww69tkh.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = connectDB;
