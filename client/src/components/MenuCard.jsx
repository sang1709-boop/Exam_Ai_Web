function MenuCard({ icon, title, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition cursor-pointer"
    >
      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h2 className="text-xl font-bold">
        {title}
      </h2>
    </div>
  );
}

export default MenuCard;