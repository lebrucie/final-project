import Navbar from "./Navbar";
import Message from "./Message";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import Registration from "./Registration";
import Login from "./Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [msg, setMsg] = useState(false);
  const [show, setShow] = useState(false);

  const handleLoggedIn = () => {
    setLoggedIn(!loggedIn);
  };

  const handleSetShow = () => {
    setShow(!show);
  };

  return (
    <Router>
      <div className="App">
        <Navbar loggedIn={loggedIn} setLoggedIn={handleLoggedIn} />
        <div>{msg && <Message msg={msg} setMsg={setMsg} />}</div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/login">
              <Login
                loggedIn={loggedIn}
                setLoggedIn={handleLoggedIn}
                setMsg={setMsg}
              />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails loggedIn={loggedIn} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
