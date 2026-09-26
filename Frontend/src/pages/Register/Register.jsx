import "./Register.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        userName: "",

        email: "",

        password: "",

        confirmPassword: ""

    });

    const [message, setMessage] = useState("");

    const [error, setError] = useState("");

    const handleChange = (e) => {

        setUser({

            ...user,

            [e.target.name]: e.target.value

        });

    };

    const handleRegister = async (e) => {

        e.preventDefault();

        setError("");

        setMessage("");

        if (user.password !== user.confirmPassword) {

            setError("Passwords do not match");

            return;

        }

        try {

            const requestBody = {

                userName: user.userName,

                email: user.email,

                password: user.password

            };

            await api.post("/save", requestBody);

            setMessage("Registration Successful!");

            setTimeout(() => {

                navigate("/login");

            }, 1500);

        }

        catch (err) {

            console.log(err);

            setError("Registration failed. Please try again.");

        }

    };

    return (
        <>
    <Navbar />

    <div className="auth-container">

        <div className="auth-card">

            <h1>PRO-IDEAS</h1>

            <p className="auth-subtitle">

                Project Recommendation System

            </p>

            <h2>Create Account </h2>

            <p className="auth-text">

                Create your account and start generating intelligent project ideas.

            </p>

            <form
                className="auth-form"
                onSubmit={handleRegister}
            >

                <input
                    type="text"
                    placeholder="Username"
                    name="userName"
                    value={user.userName}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleChange}
                    required
                />

                {error &&

                    <p className="error">

                        {error}

                    </p>

                }

                {message &&

                    <p className="success">

                        {message}

                    </p>

                }

                <button
                    type="submit"
                    className="primary-btn auth-btn"
                >

                    Register

                </button>

            </form>

            <p className="switch-page">

                Already have an account?

                <Link to="/login">

                    Login

                </Link>

            </p>

        </div>

    </div>

    <Footer />

</>
    );

}

export default Register;