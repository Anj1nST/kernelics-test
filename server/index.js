const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 3001;

const app = express();

app.use(
  cors({
    origin: /http:\/\/localhost:\d+$/
  })
);
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(bodyParser.json());
app.use("/images", express.static("images"));

const employees = [
  {
    id: 1,
    name: "John",
    status: "Working",
    img: "http://localhost:3001/images/3.png",
  },
  {
    id: 2,
    name: "Jack",
    status: "Working",
    img: "http://localhost:3001/images/5.png",
  },
  {
    id: 3,
    name: "Sheli",
    status: "Working",
    img: "http://localhost:3001/images/6.png",
  },
  {
    id: 4,
    name: "Eitan",
    status: "Working",
    img: "http://localhost:3001/images/7.png",
  },
];

app.get("/users", (req, res) => {
  res.send(employees);
});

app.post("/users/:id", (req, res) => {
  const index = employees.findIndex((obj) => obj.id === +req.params.id);

  employees[index].status = req.body.status;
  res.send(employees);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
