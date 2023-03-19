const fs = require("fs");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 4200;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const json = fs.readFileSync("./package.json", "utf8");
  res.json(json);
});

app.post("/save", (req, res) => {
  console.log(req.body);
  fs.writeFileSync("./package.json", JSON.stringify(req.body));
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
