const express = require("express");
const app = express();

const PORT = 3000;

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express Server 🚀");
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Ram" },
    { id: 2, name: "Shyam" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
