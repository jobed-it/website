import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-2xl text-primary font-bold">
          <img src="logo_arancio.svg" className="w-3/5" alt="logo" />
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost">About us</a>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="dark" />

          <FaSun className="swap-off" />
          <FaMoon className="swap-on" />
        </label>
      </div>
    </div>
  );
}