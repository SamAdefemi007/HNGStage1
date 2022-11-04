const express = require("express");

const app = express();
const PORT = 8080;
app.use(express.json());

app.post("/", (req, res) => {
  let { operation_type, x, y } = req.body;
  let result;
  if (x && y) {
    x = parseInt(x);
    y = parseInt(y);
    operation_type = operation_type.trim().toLowerCase();
    switch (operation_type) {
      case "addition":
      case "add":
      case "plus":
      case "+":
        result = x + y;
        break;

      case "subtraction":
      case "subtract":
      case "minus":
      case "-":
        result = x - y;
        break;

      case "multiplication":
      case "multiply":
      case "times":
      case "*":
        result = x * y;
        break;
    }
  }
  res.send({
    slackUsername: "SamAdefemi",
    operation_type: operation_type,
    result: result,
  });
});

app.listen(PORT, () => {
  console.log(`Server started and listening on port ${PORT}`);
});
