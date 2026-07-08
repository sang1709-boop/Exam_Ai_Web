import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Exam() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const res = await api.get("/questions");
      setQuestions(res.data);
    } catch (err) {
      console.error(err);
      alert("Không tải được câu hỏi");
    }
  };

  const handleChoose = (questionId, option) => {

    setAnswers((prev) => {
        const newAnswers = {
            ...prev,
            [questionId]: option,
        };

        console.log(newAnswers);

        return newAnswers;
    });

};

  const handleSubmit = async () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Vui lòng trả lời tất cả câu hỏi!");
      return;
    }

    try {
      const res = await api.post("/questions/submit", {
        answers,
      });

      navigate("/result", {
        state: res.data,
      });
    } catch (err) {
      console.error(err);
      alert("Không thể nộp bài");
    }
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

            {[
              q.optionA,
              q.optionB,
              q.optionC,
              q.optionD,
            ].map((option, i) => (
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