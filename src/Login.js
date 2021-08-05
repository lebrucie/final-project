import React, { useState } from "react";
import login from './actions/userLogin'
import { useHistory } from "react-router-dom"

// export default class Login extends Component {

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false)
  const [message, setMessage] = useState(null);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please fill all fields")
      console.log(message)
    } else {
      login(email, password);
      setLoggedIn(true);
      console.log(`${email} has logged in`)
      history.push("/")
    }

  }

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

        <button type="submit" onClick={submitHandler} className="btn btn-dark btn-lg btn-block">
          Login
        </button>
      </form>
    );

  
}
  export default Login;
