import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Upload() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const handleUpload = async () => {
  if (!file) {
    return alert("Vui lòng chọn file PDF");
  }

  setLoading(true);

  const formData = new FormData();
  formData.append("pdf", file);

  try {
    const res = await api.post(
      "/documents/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert(`Đã tạo ${res.data.total} câu hỏi`);

    navigate("/exam");

  } catch (err) {
    console.error(err);

    alert(
      err.response?.data?.message ||
      "Upload thất bại"
    );

  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-xl w-[600px]">

        <h1 className="text-3xl font-bold text-center text-blue-700">
          Upload tài liệu
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Chọn file PDF hoặc DOCX
        </p>

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {file && (
          <p className="mt-5 text-green-600 font-semibold">
            📄 {file.name}
          </p>
        )}

        <button
          onClick={handleUpload}
          disabled={loading}
          className={`w-full mt-8 p-3 rounded-lg text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Đang tạo câu hỏi..." : "Upload"}
        </button>

        {loading && (
  <p className="mt-4 text-center text-blue-600 font-semibold">
    ⏳ AI đang đọc tài liệu và tạo câu hỏi, vui lòng chờ...
  </p>
)}

      </div>
    </div>
  );
}

export default Upload;