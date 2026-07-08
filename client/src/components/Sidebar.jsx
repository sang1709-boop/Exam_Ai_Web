import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-blue-700 text-white min-h-screen p-6">

      <h1
        onClick={() => navigate("/dashboard")}
        className="text-3xl font-bold mb-10 cursor-pointer"
      >
        Exam AI
      </h1>

      <ul className="space-y-5">

        <li
          onClick={() => navigate("/dashboard")}
          className="cursor-pointer hover:text-yellow-300"
        >
          📄 Dashboard
        </li>

        <li
          onClick={() => navigate("/upload")}
          className="cursor-pointer hover:text-yellow-300"
        >
          📤 Upload tài liệu
        </li>

        <li
          onClick={() => navigate("/exam")}
          className="cursor-pointer hover:text-yellow-300"
        >
          📝 Làm bài thi
        </li>

        <li
          onClick={() => navigate("/result")}
          className="cursor-pointer hover:text-yellow-300"
        >
          📊 Kết quả
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;