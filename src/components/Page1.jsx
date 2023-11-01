import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import backgroundImage from "../Hompegelogin.png";
import logoImage from "../remember_me.png";

const Page1 = () => {
  const navigate = useNavigate();
  const { user, isSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
  }, [user, isSuccess, navigate]);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  };

  const boxStyle = {
    width: "100%",
    maxWidth: "500px",
    margin: "0",
    padding: "40px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const logoStyle = {
    width: "100px",
    marginBottom: "20px"
  };

  const buttonStyle = {
    backgroundColor: "#ff6600",
    color: "white",
    fontWeight: "bold",
    borderRadius: "5px",
    padding: "10px 20px",
    transition: "background-color 0.3s",
    marginTop: "20px",
    border: "none",
    cursor: "pointer",
    textDecoration: "none", // Menambahkan properti textDecoration
  };

  return (
    <div>
      <Navbar />

      <section className="hero is-fullheight is-fullwidth" style={backgroundStyle}>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8">
                <div style={containerStyle}>
                  <div style={boxStyle}>
                    <img src={logoImage} alt="Logo" style={logoStyle} />
                    <div style={{ textAlign: "center" }}>
                      <h1 className="title">Selamat Datang</h1>
                      <p className="subtitle">Lakukan Reminder Untuk Payment Obligation</p>
                      <NavLink to="/login" style={buttonStyle}> 
                          Get Started
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page1;
