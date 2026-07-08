
const express = require("express");
const router = express.Router();
const multer = require("multer");

const { readPDF } = require("../services/pdfService");
const { generateQuestions } = require("../services/aiService");
const { saveQuestion } = require("../models/questionModel");
const db = require("../database/db");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/upload",
  upload.single("pdf"),
  async (req, res) => {
    try {
      // Kiểm tra đã chọn file chưa
      if (!req.file) {
        return res.status(400).json({
          message: "Chưa chọn file PDF",
        });
      }

      // Đọc nội dung PDF
      const text = await readPDF(req.file.path);

      // Gửi AI tạo câu hỏi
      const questions = await generateQuestions(
        text.substring(0, 12000)
      );

      await new Promise((resolve, reject) => {
    db.run("DELETE FROM questions", (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
      // Lưu database
      for (const q of questions) {
        await saveQuestion(q);
      }

      res.json({
        message: "Tạo câu hỏi thành công",
        total: questions.length,
        questions,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: error.message,
      });
    }
  }
);

module.exports = router;