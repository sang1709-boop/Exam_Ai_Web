import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();

  // Dữ liệu mẫu
  const score = 8;
  const total = 10;
  const correct = 8;
  const wrong = 2;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">

      <div className="bg-white w-[500px] rounded-2xl shadow-2xl p-8 text-center">

        <h1 className="text-4xl font-bold text-green-600 mb-6">
          🎉 Kết quả bài thi
        </h1>

        <div className="text-6xl font-bold text-blue-700 mb-6">
          {score}/{total}
        </div>

        <div className="space-y-4 text-xl">

          <div className="flex justify-between border-b pb-2">
            <span>✅ Câu đúng</span>
            <span className="font-bold text-green-600">
              {correct}
            </span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span>❌ Câu sai</span>
            <span className="font-bold text-red-600">
              {wrong}
            </span>
          </div>

          <div className="flex justify-between">
            <span>📊 Điểm</span>
            <span className="font-bold text-blue-600">
              {score * 10}/100
            </span>
          </div>

        </div>

        <div className="mt-8 flex gap-4">

          <button
            onClick={() => navigate("/exam")}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg"
          >
            Làm lại
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
          >
            Dashboard
          </button>

        </div>

      </div>

    </div>
  );
}

export default Result;