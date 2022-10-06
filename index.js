import express from "express";

const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
  const data = {
    forename: "Israel",
    surname: "Calderon",
    age: 30,
    address: "London",
  };
  res.json(data);
});

app.listen(PORT, function () {
  console.log("listening on port 3000");
});
