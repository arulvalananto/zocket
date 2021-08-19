const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const path = require("path");

const userRouter = require("./routers/user.router");
const errorController = require("./controllers/error.controller");
const AppError = require("./utils/AppError");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10kb" }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH"],
  })
);
app.use(compression());
app.use(helmet());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  windowMs: 2 * 60 * 60 * 1000,
  max: 10,
  message: "Too many requests",
  handler: (req, res, next) => {
    return next(new AppError("Too may requests", 429));
  },
});
app.use("/api", limiter);

// API End-Points

app.use("/api/v1/user", userRouter);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// Global Error Handler
app.use(errorController);

module.exports = app;
