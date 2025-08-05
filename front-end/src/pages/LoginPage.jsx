import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const loginHere = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/articles");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <section className="login">
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginHere}>
          Login
        </button>
        <button>
          <Link to="/create-account">
            Create Account here!! if not have one
          </Link>
        </button>
      </section>
    </>
  );
};

export default LoginPage;
