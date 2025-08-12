import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser(email, senha);
      navigate("/menu");
    } catch (error) {
      alert("Erro ao registrar: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-4">Criar Conta</h2>
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
        className="bg-green-500 text-white px-4 py-2"
        onClick={handleRegister}
      >
        Registrar
      </button>
      <p className="mt-4">
        Já tem conta?{" "}
        <span
          className="text-blue-600 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Entrar
        </span>
      </p>
    </div>
  );
}
