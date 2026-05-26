import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>React Concepts</h2>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/form">Form</Link>
        <Link to="/api">API</Link>
      </div>
    </nav>
  );
}

export default Navbar;