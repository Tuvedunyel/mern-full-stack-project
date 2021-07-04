const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER_PASS}@cluster0.nk8px.mongodb.net/mern-project`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) =>
    console.log("Failed to connect to mongoDB because of : " + error)
  );
