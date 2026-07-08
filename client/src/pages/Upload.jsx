import { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);

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

        <button className="w-full mt-8 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Upload
        </button>

      </div>
    </div>
  );
}

export default Upload;