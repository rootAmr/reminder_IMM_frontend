import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoExitOutline } from "react-icons/io5";
import { LogOut, reset } from "../features/authSlice";
import IMM from "../imm.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
      style={{
        backgroundColor: "#46308A",
        fontFamily: "Gotham, sans-serif",
      }}
    >
      <div className="navbar-brand">
        <img
          src={IMM}
          className="navbar-item"
          width="90px" // Adjust the width here
          height="85px" // Adjust the height here
          alt="logo"
        />
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {user ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h2
                    className="text"
                    style={{ color: "#FFFFFF", marginRight: "10px" }}
                  >
                    Welcome {user.nama} !!!
                  </h2>
                  <button
                    onClick={logout}
                    className="button is-light"
                    style={{
                      backgroundColor: "#46308A",
                      color: "#fff",
                      fontFamily: "Gotham, sans-serif",
                    }}
                  >
                    <IoExitOutline style={{ fontSize: "24px" }} />
                  </button>
                </div>
              ) : (
                <NavLink
                to="/login"
                className="navbar-item"
                style={{ color: "#FFFFFF" }} // Set text color to white
              >
                Login Admin
              </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
