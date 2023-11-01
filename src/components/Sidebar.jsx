import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoHome, IoLogOut,IoPersonSharp,IoCalendarNumberSharp,IoCardSharp } from "react-icons/io5";
import { useDispatch,useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  
  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  const sidebarStyle = {
    fontFamily: "Gotham, roboto",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "inherit",
    padding: "10px 20px",
    fontSize: "16px",
    lineHeight: "24px",
    borderBottom: "1px solid #ccc",
  };

  const buttonStyle = {
    border: "none",
    background: "none",
    padding: "0",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "24px",
    marginRight: "10px",
  };

  return (
    <aside className="menu pl-2 has-shadow" style={sidebarStyle}>
      <p className="menu-label">Menu</p>
      <ul className="menu-list">
        <li>
          <NavLink to="/dashboard" style={linkStyle}>
            <IoHome style={iconStyle} /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/paymnetobligation" style={linkStyle}>
            <IoCardSharp style={iconStyle} /> Payment Obligation
          </NavLink>
        </li>
        <li>
          <NavLink to="/Listexpaired" style={linkStyle}>
            <IoCalendarNumberSharp style={iconStyle} /> Expaired
          </NavLink>
        </li>
      </ul>
      <p className="menu-label">Settings</p>
      <ul className="menu-list">
      {user && user.role === "admin" && (
        <li>
          <NavLink to="/users" style={linkStyle}>
            <IoPersonSharp style={iconStyle} /> User
          </NavLink>
        </li>
        )}
        <li>
          <button onClick={logout} className="button is-white" style={buttonStyle}>
            <IoLogOut style={iconStyle} /> Logout
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
