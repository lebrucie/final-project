import React, { useState } from "react";
import register from "./actions/userRegister";
import { useHistory } from "react-router-dom";

// export default class Register extends Component {
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      if (email && password && confirmPassword) {
        register(email, password);
        // setEmail("");
        // setPassword("");
        // setConfirmPassword("");
        history.push("/login");
      }
    }
  };

  return (
    <form>
      <h3>Register</h3>

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

      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
          name="confirmPassword"
        />
      </div>

      <button
        type="submit"
        onClick={submitHandler}
        className="btn btn-dark btn-lg btn-block"
      >
        Sign Up
      </button>
    </form>
  );
};
export default Register;
