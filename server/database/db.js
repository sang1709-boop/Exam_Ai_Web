const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/exam.db", (err) => {
  if (err) {
    console.log("Lỗi kết nối database", err);
  } else {
    console.log("Kết nối SQLite thành công");
  }
});

module.exports = db;
