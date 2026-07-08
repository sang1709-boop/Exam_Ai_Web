import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";



function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {

    if (!name || !email || !password || !confirmPassword) {
        return alert("Vui lòng nhập đầy đủ thông tin");
    }

    if (password !== confirmPassword) {
        return alert("Mật khẩu không khớp");
    }

    try {

        const res = await api.post("/auth/register", {
            name,
            email,
            password
        });

        alert(res.data.message);

        navigate("/");

    } catch (err) {

        console.error(err);

        alert(
          err.response?.data?.message ||
          err.message ||
          "Đăng ký thất bại"
        );

    }

};

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-emerald-700 flex items-center justify-center">
      <div className="bg-white w-[420px] rounded-2xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-green-700">
          Đăng ký
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Tạo tài khoản Exam AI
        </p>

        <input
          type="text"
          placeholder="Họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
        >
          Đăng ký
        </button>

        <p className="text-center mt-5">
          Đã có tài khoản?

          <Link
            to="/"
            className="text-blue-600 ml-2 hover:underline"
          >
            Đăng nhập
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;