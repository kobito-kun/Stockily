import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import {
  getSymbols,
  addSymbol,
} from "./controllers/symbols.js";

import {
  getUserProfile,
  updateUserProfile,
  loginUserProfile,
  registerUserProfile
} from "./controllers/profile.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));

app.get("/", (req, res) => res.send("Hewwo"));

app.get("/api/symbols", getSymbols);
app.put("/api/symbol", addSymbol);

app.get("/api/profile/:username", getUserProfile);
app.put("/api/profile", updateUserProfile);

app.post("/api/login", loginUserProfile);
app.post("/api/signup", registerUserProfile);




import "dotenv/config";
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},  () => console.log("DB Connected."))

app.listen(port, () => console.log(`Listening at port ${port}`))