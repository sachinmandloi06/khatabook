import React from "react";

const Navbar = ({ dark, changeTheme }) => {
  return (
    <nav className={dark ? "navbar bg-dark shadow" : "navbar bg-light shadow"}>
      <div className="container-fluid">
        <span
          className={
            dark ? "navbar-brand mb-0 h1 text-light" : "navbar-brand mb-0 h1"
          }
        >
          KHATABOOK
        </span>
        <button
          onClick={changeTheme}
          className={dark ? "btn btn-light btn-sm" : "btn btn-dark btn-sm"}
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
