import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import Navbar from "./Navbar"; // Import the Navbar component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  const backgroundStyle = {
    backgroundImage: `url(${require("../Hompegelogin.png")})`, // Ganti dengan path yang benar
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div>
      {/* Include the Navbar component */}
      <Navbar />

      <section className="hero is-fullheight is-fullwidth" style={backgroundStyle}>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4">
                <div className='imgHeader'>
                  <figure className="image is-128x128">
                    <img src={require("../immHomlogin.png")} alt="logo" /> 
                  </figure>
                </div>
                <form onSubmit={handleLogin} className="box">
                  {isError && <p className="has-text-centered">{message}</p>}
                  <h1 className="title is-2">Sign In</h1>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        type="text"
                        className="input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input
                        type="password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******"
                      />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <button
                      type="submit"
                      className={`button is-success is-fullwidth ${isLoading ? 'is-loading' : ''}`}
                      disabled={isLoading}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
