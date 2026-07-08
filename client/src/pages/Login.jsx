import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Kết nối API (tạm thời tắt)
// import api from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Hàm đăng nhập (tạm thời chưa kết nối backend)
  const handleLogin = () => {

    // Kiểm tra nhập đủ dữ liệu
    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ email và mật khẩu");
      return;
    }

    // ===============================
    // Sau này kết nối backend thì mở lại đoạn dưới
    /*
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert(res.data.message);

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Đăng nhập thất bại");
    }
    */
    // ===============================

    // Tạm thời chuyển thẳng sang Dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">

      <div className="bg-white w-[420px] rounded-2xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          Exam AI
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Website ôn thi thông minh bằng AI
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Email
          </label>

          <input
            type="email"
            placeholder="Nhập email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-2 font-medium">
            Mật khẩu
          </label>

          <input
            type="password"
            placeholder="Nhập mật khẩu..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Đăng nhập */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition duration-300"
        >
          Đăng nhập
        </button>

        {/* Đăng ký */}
        <p className="text-center mt-6 text-gray-600">
          Chưa có tài khoản?

          <Link
            to="/register"
            className="text-blue-600 font-semibold ml-2 hover:underline"
          >
            Đăng ký
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;