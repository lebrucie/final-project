const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const port = 8000;

//middleware
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//database connection
const dbURI = `mongodb+srv://Justin:justin1@cluster0.8xxca.mongodb.net/blog-app?retryWrites=true&w=majority`;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(port);
    console.log(`Server is running of port ${port}`);
  })
  .catch((err) => console.log(err));

//sets a single header value for implicit headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//routes
app.use("/api/users", authRoutes);
app.use("/api/blogs", blogRoutes);

//Error Handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  //server response
  res.status(status).json({ message, data });
});
