import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

function Login() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/login", loginData);

            if(response.data){

                localStorage.setItem("user", JSON.stringify(response.data));

                navigate("/home");

            }

        } catch (err) {

            console.log(err);

            setError("Invalid Email or Password");

        }

    };

    return (
        <>
    <Navbar />

    <div className="auth-container">

        <div className="auth-card">

            <h1>PRO-IDEAS</h1>

            <p className="auth-subtitle">
                AI Powered Project Recommendation System
            </p>

            <h2>Welcome Back 👋</h2>

            <p className="auth-text">
                Login to continue generating AI-powered software project ideas.
            </p>

            <form className="auth-form" onSubmit={handleLogin}>

                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                />

                {error &&

                    <p className="error">

                        {error}

                    </p>

                }

                <button
                    type="submit"
                    className="primary-btn auth-btn"
                >

                    Login

                </button>

            </form>

            <p className="switch-page">

                Don't have an account?

                <Link to="/register">

                    Register

                </Link>

            </p>

        </div>

    </div>

    <Footer />

</>
    );

}

export default Login;