const express = require("express");
const router = express.Router();
const db = require("../database/db");



// Lấy tất cả câu hỏi
router.get("/", (req, res) => {
  db.all(
    "SELECT * FROM questions ORDER BY id DESC",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.json(rows);
    }
  );
});

// Xóa câu hỏi

router.post("/submit", (req, res) => {
  console.log(req.body);
  const { answers } = req.body;

  if (!answers) {
    return res.status(400).json({
      message: "Thiếu answers trong request body"
    });
  }

  db.all(
    "SELECT id, answer FROM questions",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      let score = 0;
      const results = [];

      rows.forEach((q) => {
        const userAnswer = answers[q.id];

        const correct =
          userAnswer === q.answer;

        if (correct) score++;

        results.push({
          questionId: q.id,
          userAnswer,
          correctAnswer: q.answer,
          correct,
        });
      });

      res.json({
        score,
        total: rows.length,
        results,
      });
    }
  );
});

// Lấy 1 câu hỏi theo id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db.get(
    "SELECT * FROM questions WHERE id = ?",
    [id],
    (err, row) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      if (!row) {
        return res.status(404).json({
          message: "Không tìm thấy câu hỏi",
        });
      }

      res.json(row);
    }
  );
});

// Xóa câu hỏi
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.run(
    "DELETE FROM questions WHERE id = ?",
    [id],
    function (err) {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      if (this.changes === 0) {
        return res.status(404).json({
          message: "Không tìm thấy câu hỏi",
        });
      }

      res.json({
        message: "Xóa thành công",
        deletedId: id,
      });
    }
  );
});

module.exports = router;