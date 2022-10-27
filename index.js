const express = require("express");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.status(200).json({
    slackUsername: "SamAdefemi",
    backend: true,
    age: 27,
    bio: "I am a software developer currently enrolled in an MSc program in Information Technology at the University of Aberdeen. I am comfortable with a range of programming languages and tools and i enrolled into this program to get more hands-on experience",
  });
});

app.listen(PORT, () => {
  console.log(`Server started and listening on port ${PORT}`);
});
