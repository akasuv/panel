const fs = require("fs");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const glob = require("glob");

const app = express();
const port = 4200;

app.use(express.json());
app.use(cors());

app.get("/files", async (req, res) => {
  res.json(
    await glob(["package.json", "tsconfig.json", ".eslintrc.json"], {
      cwd: "../test-panel",
    })
  );
});

app.get("/file", (req, res) => {
  const filename = req.query.filename;
  const json = fs.readFileSync(`../test-panel/${filename}`, "utf8");
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
