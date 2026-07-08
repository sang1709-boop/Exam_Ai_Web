import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Exam() {
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: "AI là viết tắt của từ gì?",
      options: [
        "Artificial Intelligence",
        "Automatic Internet",
        "Artificial Internet",
        "Apple Intelligence",
      ],
    },
    {
      id: 2,
      question: "React được phát triển bởi công ty nào?",
      options: [
        "Google",
        "Microsoft",
        "Facebook",
        "Apple",
      ],
    },
    {
      id: 3,
      question: "HTML là gì?",
      options: [
        "Ngôn ngữ lập trình",
        "Hệ quản trị cơ sở dữ liệu",
        "Ngôn ngữ đánh dấu",
        "Framework",
      ],
    },
  ];

  const [answers, setAnswers] = useState({});

  const handleChoose = (questionId, option) => {
    setAnswers({
      ...answers,
      [questionId]: option,
    });
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Vui lòng trả lời tất cả câu hỏi!");
      return;
    }

    navigate("/result");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          ĐỀ THI AI
        </h1>

        {questions.map((q, index) => (
          <div
            key={q.id}
            className="mb-8 border-b pb-6"
          >
            <h2 className="font-bold text-xl mb-4">
              Câu {index + 1}: {q.question}
            </h2>

            {q.options.map((option, i) => (
              <label
                key={i}
                className="flex items-center mb-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={option}
                  checked={answers[q.id] === option}
                  onChange={() => handleChoose(q.id, option)}
                  className="mr-3"
                />

                {option}
              </label>
            ))}
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg transition"
        >
          Nộp bài
        </button>

      </div>
    </div>
  );
}

export default Exam;