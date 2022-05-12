import express from "express";
// import {Getuser} from './Controllers/my-controller'
import { user } from "./data.js";

const app = express();

app.get("/api/user", (req, res) => {
  return res.status(200).json({ success: true, data: user });
});

app.listen(5000, () => {
  console.log("server are running port 5000...");
});
