import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="bg-white shadow px-8 py-4 flex justify-between items-center">

      <h2 className="text-2xl font-bold">
        Dashboard
      </h2>

      <div className="flex items-center gap-5">

        <span className="font-semibold">
          👤 Xin chào, User
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Đăng xuất
        </button>

      </div>

    </div>
  );
}

export default Navbar;