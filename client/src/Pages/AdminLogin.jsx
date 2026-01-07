import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/admin/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      // save token
      localStorage.setItem("adminToken", data.token);

      navigate("/admin");
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-sm bg-zinc-900 p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Admin Login
        </h2>

        {error && (
          <p className="mb-4 text-red-400 text-sm text-center">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full mb-4 p-3 rounded bg-zinc-800 text-white outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded bg-zinc-800 text-white outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded text-white font-medium"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
