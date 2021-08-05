import React, { useState } from "react";
import register from "./actions/userRegister";
import { useHistory } from "react-router-dom";

// export default class Register extends Component {
const Register = ({ setMsg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();

    const result = await register(email, password);

    if (result.error) {
      console.log(result.error.data[0].msg)
      result.error.message && setMsg(result.error.message)
      result.error.data !== 0 && setMsg(result.error.data[0].msg)

    } else if (password !== confirmPassword) {
      setMsg("Passwords do not match");
    } else {
      console.log(result);
      history.push("/login");
    }
  
  }
 

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
