require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const questionRoutes = require("./routes/questionRoutes");
app.use("/api/questions", questionRoutes);


const documentRoutes = require("./routes/documentRoutes");
app.use("/api/documents", documentRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Backend đang hoạt động!"
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});