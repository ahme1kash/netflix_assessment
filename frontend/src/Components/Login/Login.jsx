import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../../netflix_react_assets/logo.png";
const Login = () => {
  const [registeredStatus, setRegisteredStatus] = useState("Sign In");
  const users = {
    name: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(users);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const navigate = useNavigate();
  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const local_url = import.meta.env.VITE_LOCAL_URL;
      if (registeredStatus == "Sign Up") {
        toast.success(" User Registered Successfully", {
          position: "bottom-right",
          style: {
            background: "black",
            color: "#fff",
            zIndex: 999,
          },
        });
        await axios.post(`${local_url}/api/auth/register`, user, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        navigate("/home ");
      } else if (registeredStatus == "Sign In") {
        const response = await axios.post(
          `${local_url}/api/auth/login`,
          user,

          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        localStorage.setItem("Token", response.data.token);
        toast.success(" User Logged In Successfully", {
          position: "bottom-right",
        });
      }
      navigate("/home");
    } catch (err) {
      toast.error("Data failed to get submitted successfully", {
        position: "bottom-right",
      });
      console.log(err);
    }
  };
  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1> {registeredStatus}</h1>
        <form className="inputs" onSubmit={submitForm}>
          {registeredStatus === "Sign Up" ? (
            <input
              type="text"
              autoComplete="off"
              placeholder="Name"
              name="name"
              onChange={inputHandler}
              value={user.name}
            />
          ) : (
            <></>
          )}

          <input
            type="email"
            autoComplete="off"
            placeholder="Email"
            onChange={inputHandler}
            value={user.email}
            name="email"
          />
          <input
            type="password"
            autoComplete="off"
            placeholder="Password"
            onChange={inputHandler}
            name="password"
            value={user.password}
          />
          <button>{registeredStatus}</button>
          <div className="help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me"</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="switch">
          {registeredStatus === "Sign In" ? (
            <p>
              New to Netflix!!
              <span
                onClick={() => {
                  setRegisteredStatus("Sign Up");
                }}
              >
                &nbsp;Sign Up Now!!
              </span>
            </p>
          ) : (
            <p>
              Already Have account?
              <span
                onClick={() => {
                  setRegisteredStatus("Sign In");
                }}
              >
                &nbsp;Sign In
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
