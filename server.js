const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const cookieParser = require("cookie-parser");

const authRoutes = require("./src/routes/authRoutes");
const playerRoutes = require("./src/routes/playerRoutes");
const userRoutes = require("./src/routes/userRoutes");
const app = express();

// Set up CORS
const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());

// Passport middleware
app.use(passport.initialize());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/player", playerRoutes);
app.use("/api/user", userRoutes);

// Connect to MongoDB

mongoose.connect('mongodb://127.0.0.1:27017/terraforming-mars');

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
