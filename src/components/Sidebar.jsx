import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
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

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/suratperizinan"}>
              <IoPricetag /> Surat Perizinan
            </NavLink>
          </li>
          <li>
            <NavLink to={"/users"}>
              <IoPricetag /> user
            </NavLink>
          </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        {user && user.role === "admin" && (
          <div>
            <ul className="menu-list">
              <li>
                <NavLink to={"/laporan/editstatus/"}>
                  <IoPerson /> Laporan
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        {user && user.role === "admin" && (
          <div>
            <ul className="menu-list">
              <li>
                <NavLink to={"/keterangan/editstatus/"}>
                  <IoPerson /> Surat Keterangan
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        {user && user.role === "admin" && (
          <div>
            <ul className="menu-list">
              <li>
                <NavLink to={"/pengantar/editstatus/"}>
                  <IoPerson /> Surat Pengantar
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        {user && user.role === "admin" && (
          <div>
            <ul className="menu-list">
              <li>
                <NavLink to={"/perizinan/editstatus/"}>
                  <IoPerson /> Surat Peizinan
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
