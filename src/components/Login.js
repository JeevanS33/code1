import React, { useState } from "react";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth } from "../auth/Authenticate";

const Login = () => {
  const { user, loginUpdate } = useAuth();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function onUserNameChange(e) {
    setUserName(e.target.value);
    console.log(username);
  }

  function onPasswordChange(e) {
    setPassword(e.target.value);
    console.log(password);
  }

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://dummyjson.com/user/login", {
        username,
        password,
      });
      loginUpdate(response.data);
      toast.success("Login Successfully", { position: "top-center" });
      setTimeout(() => {
        navigate("/products");
      }, 1000);
      console.log(response);
      console.log("User data", user);
    } catch (error) {
      toast.error("Login Failed", { position: "top-center" });
      console.error("Login failed:", error.response.data.msg);
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <h2>Login</h2>
      <form className="login-form" onSubmit={onFormSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onUserNameChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onPasswordChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
