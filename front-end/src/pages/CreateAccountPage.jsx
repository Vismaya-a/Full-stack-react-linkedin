import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const createAccount = async () => {
    if(password !== confirmPassword) return setError("Passwords do not match");
    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/articles");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <section className="login">
        <h1>Create Account</h1>
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
        <input
          type="password"
          placeholder="ConfirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" onClick={createAccount}>
          Create Account
        </button>
        <button>
          <Link to="/login">Already have an account login here!!</Link>
        </button>
      </section>
    </>
  );
};

export default CreateAccountPage;
