import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    alert("Đăng ký thành công!");
    navigate("/");
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
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Mật khẩu"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Nhập lại mật khẩu"
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