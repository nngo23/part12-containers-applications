const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://root:example@127.0.0.1:3456/the_database?authSource=admin",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    console.log("Connected to MongoDB!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
