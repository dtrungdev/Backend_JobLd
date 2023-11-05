import { name } from "ejs";
import jwt from "jsonwebtoken";
require("dotenv").config();

const createJWT = (payload) => {
  let key = process.env.JWT_SECRET;
  let token = null;

  try {
    token = jwt.sign(payload, key);
    console.log(token);
  } catch (error) {
    console.log(error);
  }
  console.log(token);
  return token;
};

const verifyToken = () => {
  let key = process.env.JWT_SECRET;
  let data = null;
  try {
    let decoded = jwt.verify(token, key);
    data = decoded;
  } catch (error) {
    console.log(error);
  }
  return data;
};

module.exports = { createJWT, verifyToken };
