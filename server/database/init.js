const db = require("./db");

db.run(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
)
`);

db.run(`
CREATE TABLE IF NOT EXISTS questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question TEXT NOT NULL,
  optionA TEXT,
  optionB TEXT,
  optionC TEXT,
  optionD TEXT,
  answer TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
`);

console.log("Tạo bảng users thành công");

db.run(`
CREATE TABLE IF NOT EXISTS questions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question TEXT NOT NULL,
  optionA TEXT NOT NULL,
  optionB TEXT NOT NULL,
  optionC TEXT NOT NULL,
  optionD TEXT NOT NULL,
  answer TEXT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)
`);

console.log("Tạo bảng questions thành công");