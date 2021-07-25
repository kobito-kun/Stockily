import jwt from "jsonwebtoken";
import "dotenv/config"

export const generateAccessToken = (username) => {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '604800s' });
}

export const delay = (ms) => {
  new Promise(resolve => setTimeout(resolve, ms))
}

export const authenticateToken = (req, res) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  let returnThis;

  if (token == null) return false;

  jwt.verify(token, String(process.env.TOKEN_SECRET), (err, user) => {
    if (err) return returnThis = false;
    return returnThis = true;
  })
  return returnThis
}

export const getTokenUser = (req, res) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  let returnThis;

  if (token == null) return "";

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) return returnThis = "";
    return returnThis = user.username;
  })
  return returnThis  
}
