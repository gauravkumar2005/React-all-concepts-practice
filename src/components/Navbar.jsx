import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-cyan-400">
          React Concepts
        </h1>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex gap-6 text-[17px] font-medium">
          <Link
            to="/"
            className="hover:text-cyan-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-cyan-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/counter"
            className="hover:text-cyan-400 transition duration-300"
          >
            Counter
          </Link>

          <Link
            to="/todo"
            className="hover:text-cyan-400 transition duration-300"
          >
            Todo
          </Link>

          <Link
            to="/form"
            className="hover:text-cyan-400 transition duration-300"
          >
            Form
          </Link>

          <Link
            to="/api"
            className="hover:text-cyan-400 transition duration-300"
          >
            API
          </Link>
        </div>

        {/* HAMBURGER BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-5 text-[17px] font-medium bg-slate-900">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            About
          </Link>

          <Link
            to="/counter"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            Counter
          </Link>

          <Link
            to="/todo"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            Todo
          </Link>

          <Link
            to="/form"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            Form
          </Link>

          <Link
            to="/api"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-400"
          >
            API
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;