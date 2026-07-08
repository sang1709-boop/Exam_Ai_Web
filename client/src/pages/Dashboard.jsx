import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import MenuCard from "../components/MenuCard";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-10">
          <div className="grid grid-cols-2 gap-8">

            <MenuCard
              icon="📤"
              title="Upload tài liệu"
              onClick={() => navigate("/upload")}
            />

            <MenuCard
              icon="📝"
              title="Làm bài thi"
              onClick={() => navigate("/exam")}
            />

            <MenuCard
              icon="📚"
              title="Tài liệu của tôi"
            />

            <MenuCard
              icon="📊"
              title="Kết quả"
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;