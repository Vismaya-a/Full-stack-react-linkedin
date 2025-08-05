import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import useUser from "./useUser";
import { getAuth, signOut } from "firebase/auth";

const Navbar = () => {
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          {isLoading ? (
            <li>Loading...</li>
          ) : (
            <>
              {user && (
                <li style={{ color: "white" }}>Signed as {user.email}</li>
              )}
              <li>
                {user ? (
                  <button onClick={() => signOut(getAuth())}>SignOut</button>
                ) : (
                  <button onClick={() => navigate("/login")}>SignIn</button>
                )}
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
