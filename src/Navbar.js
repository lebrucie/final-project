import { Link } from "react-router-dom";

const Navbar = ({ loggedIn, setLoggedIn }) => {
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    setLoggedIn();
  };

  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>

        {loggedIn && (
          <Link
            to="/create"
            style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "8px",
            }}
          >
            New Blog
          </Link>
        )}

        {loggedIn && (
          <Link to="#" onClick={logoutHandler}>
            Logout
          </Link>
        )}

        {!loggedIn && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/registration">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
