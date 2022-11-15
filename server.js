const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, "build")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server raning on port ${PORT}`);
});
