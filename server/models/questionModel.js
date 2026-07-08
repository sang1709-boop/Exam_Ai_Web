
const db = require("../database/db");

function saveQuestion(question) {
  return new Promise((resolve, reject) => {
    db.run(
      `
      INSERT INTO questions
      (
        question,
        optionA,
        optionB,
        optionC,
        optionD,
        answer
      )
      VALUES (?, ?, ?, ?, ?, ?)
      `,
      [
        question.question,
        question.options[0],
        question.options[1],
        question.options[2],
        question.options[3],
        question.answer,
      ],
      function (err) {
        if (err) reject(err);
        else resolve(this.lastID);
      }
    );
  });
}

module.exports = {
  saveQuestion,
};