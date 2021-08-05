import React, { useState } from "react";
import login from "./actions/userLogin";
import { useHistory } from "react-router-dom";

const Login = ({ setLoggedIn, setMsg, setShow }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMsg("All feilds are required");
    } else {
      const result = await login(email, password);
      if (result.error) {
        setMsg(result.error);
        // } else {
        //   setMsg(result.error.data[0].msg);
      }

      console.log(result);
      // } else {
      // setLoggedIn();
      // setMsg("Logged In Successfully");
      // console.log(`${email} has logged in`);
      // history.push("/");
    }
  };

  return (
    <form>
      <h3>Login</h3>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          name="email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          name="password"
        />
      </div>

      <button
        type="submit"
        onClick={submitHandler}
        className="btn btn-dark btn-lg btn-block"
      >
        Login
      </button>
    </form>
  );
};
export default Login;
