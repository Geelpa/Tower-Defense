import { logoutUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Menu Principal</h1>
      <button className="bg-purple-500 text-white px-4 py-2 mb-2">
        Continuar Jogo
      </button>
      <button className="bg-green-500 text-white px-4 py-2 mb-2">
        Novo Jogo
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2"
        onClick={handleLogout}
      >
        Sair
      </button>
    </div>
  );
}
