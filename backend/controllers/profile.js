import { Client } from "../models/user.model.js";
import {
  authenticateToken,
  getTokenUser,
  generateAccessToken
} from "../utils/utils.js";

export const getUserProfile = (req, res) => {
  if(authenticateToken(req, res)){
    Client.findOne({username: getTokenUser(req, res)}, (err, result) => {
      res.json(result)
    })
  }else{
    res.json([])
  }
}

export const updateUserProfile = (req, res) => {
  const {username, password, email} = req.body;
  if(authenticateToken(req, res)){
    Client.findOne({username: getTokenUser(req, res)}, (err, result) => {
      if(err) return res.json(err);
      result.password = password !== undefined ? password : result.password,
      result.email = email
      result.save()
      res.json(result)
    })
  }else{
    res.json([])
  }
}

export const loginUserProfile = (req, res) => {
  const {username, password} = req.body;
  Client.findOne({username: username}, (err, result) => {
    if(err) return console.log(err);
    if(result !== null){
      if(password === result.password){
        const token = generateAccessToken({ username: username });
        const objectToReturn = {
          "status": "Authenticated",
          "token": token,
          "username": username
        }
        res.json(objectToReturn)
      }else{
        res.json({"status": "Incorrect Credentials"})
      }
    }else{
      res.json({"status": "Incorrect Credentials"})
    }
  })
}

export const registerUserProfile = (req, res) => {
  const {username, email, password} = req.body;
  const newClient = new Client({
    username: username,
    email: email,
    password: password
  })
  newClient.save()
  res.json({
    "status": "User Created",
    "username": username,
    "token": generateAccessToken({username: username})
  })
}