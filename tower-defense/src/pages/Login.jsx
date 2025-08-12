import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginUser(email, senha);
      navigate("/menu"); // vai para o menu principal
    } catch (error) {
      alert("Erro ao entrar: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-4">Entrar</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-2"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        className="border p-2 mb-2"
        onChange={(e) => setSenha(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={handleLogin}
      >
        Entrar
      </button>
      <p className="mt-4">
        Não tem conta?{" "}
        <span
          className="text-blue-600 cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Criar conta
        </span>
      </p>
    </div>
  );
}
