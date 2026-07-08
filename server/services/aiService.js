console.log("Đang load aiService.js");
console.log(__filename);

const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateQuestions(text) {
  const prompt = `
Từ tài liệu dưới đây, hãy tạo 10 câu hỏi trắc nghiệm.

Trả về JSON theo mẫu:

[
  {
    "question": "",
    "options": ["A", "B", "C", "D"],
    "answer": ""
  }
]

Chỉ trả về JSON, không thêm giải thích.

Tài liệu:
${text}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  let result = response.text;

  // bỏ ```json và ```
  result = result
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(result);
}

module.exports = {
  generateQuestions,
};

console.log(process.env.GEMINI_API_KEY);