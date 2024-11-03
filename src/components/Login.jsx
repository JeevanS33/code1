import axios from "axios";
import React, { useState } from "react";

function Login() {
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  // function onUserNameChange(e) {
  //   setUserName(e.target.value);
  //   console.log(username);
  // }

  // function onPasswordChange(e) {
  //   setPassword(e.target.value);
  //   console.log(password);
  // }

  // const onFormSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("https://dummyjson.com/user/login", {
  //       username,
  //       password,
  //     });
  //     loginUpdate(response.data);
  //     console.log("successfull");
  //   } catch (error) {
  //     console.error("unsuccessfull");
  //   }
  // };

  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello, ${name}!`);
    setName("");
  };

  return (
    // <div className="login-container">
    //   <ToastContainer />
    //   <h2>Login</h2>
    //   <form className="login-form" onSubmit={onFormSubmit}>
    //     <label>Username:</label>
    //     <input
    //       type="text"
    //       name="username"
    //       value={username}
    //       onChange={onUserNameChange}
    //       required
    //     />
    //     <label>Password:</label>
    //     <input
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={onPasswordChange}
    //       required
    //     />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>

    <div>
      <form action="#" onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          onChange={onChangeName}
          placeholder="Please enter your name"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {greeting && <h2> {greeting} </h2>}
    </div>
  );
}

export default Login;
