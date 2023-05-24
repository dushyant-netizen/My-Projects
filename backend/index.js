const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./db/User");
require("./db/config");

app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  resp.send(result);
});

app.listen(6000);
