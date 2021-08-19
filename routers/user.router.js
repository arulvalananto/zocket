const express = require("express");

const {
  registerEmail,
  getUserInfo,
} = require("../controllers/user.controller");

const route = express.Router();

route.post("/register-email", registerEmail);
route.get("/get-details/:id", getUserInfo);

module.exports = route;
