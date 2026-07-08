const express = require("express");
const router = express.Router();
const db = require("../database/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  db.run(
    "INSERT INTO users(name,email,password) VALUES(?,?,?)",
    [name, email, hashedPassword],
    function (err) {
      if (err) {
        return res.status(400).json({
          message: "Email đã tồn tại"
        });
      }

      res.json({
        message: "Đăng ký thành công"
      });
    }
  );
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.get(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, user) => {
      if (!user) {
        return res.status(404).json({
          message: "Sai email hoặc mật khẩu"
        });
      }

      const isMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (!isMatch) {
        return res.status(400).json({
          message: "Sai email hoặc mật khẩu"
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
        "secret123",
        {
          expiresIn: "7d"
        }
      );

      res.json({
        message: "Đăng nhập thành công",
        token
      });
    }
  );
});

module.exports = router;