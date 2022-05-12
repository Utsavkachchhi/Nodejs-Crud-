import express from "express";
const app = express();

const data = require('./router/my-router')


app.use('/api/user',data)

app.listen(5000, () => {
  console.log("server are running port 5000...");
});
