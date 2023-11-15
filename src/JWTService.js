// JWT utility/service in React
const jwt = require("jsonwebtoken");

const JWT_SECRET = "your_jwt_secret_key";

export function saveToken(token) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function decodeToken(token) {
  return jwt.verify(token, JWT_SECRET);
}
