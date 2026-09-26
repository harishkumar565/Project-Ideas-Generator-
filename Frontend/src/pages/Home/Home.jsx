import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  FaRobot,
  FaCode,
  FaLightbulb
} from "react-icons/fa";

function Home() {

  const navigate = useNavigate();

const [user, setUser] = useState(null);

useEffect(() => {

    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (!loggedUser) {

        navigate("/");

        return;

    }

    setUser(loggedUser);

}, [navigate]);
  //

  // const navigate = useNavigate();

// useEffect(() => {

//     const user = localStorage.getItem("user");

//     if (!user) {

//         navigate("/");

//     }

// }, [navigate]);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      

      <section className="hero container">

        <div className="hero-left">

          <h1>
            
            Discover Your Next
            <span> AI Project</span>

            
          </h1>
          <p className="welcome-user">Welcome{user ? `, ${user.userName}` : ""}</p>
          <p>
            Generate AI-powered software project ideas based on your
requirements. Enter your preferred domain, programming language,
difficulty level, team size, and duration to receive intelligent
project recommendations.
          </p>

          <button className="primary-btn" onClick={() => navigate("/dashboard")}>
            Start Generating Projects
          </button>

        </div>

        <div className="hero-right">

          <div className="robot-box">

            <FaRobot />

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="section container">

        <h2 className="section-title">

          Features

        </h2>

        <p className="section-subtitle">

          Explore how Pro-Ideas helps you discover innovative software projects using Artificial Intelligence.

        </p>

        <div className="features">

          <div className="feature-card">

            <FaRobot className="feature-icon"/>

            <h3>AI Powered</h3>

            <p>

              Generates intelligent project ideas using Groq AI.

            </p>

          </div>

          <div className="feature-card">

            <FaCode className="feature-icon"/>

            <h3>Full Stack</h3>

            <p>

              Built using React, Spring Boot and MySQL.

            </p>

          </div>

          <div className="feature-card">

            <FaLightbulb className="feature-icon"/>

            <h3>Smart Recommendation</h3>

            <p>

              Recommends the best project for your requirements.

            </p>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Home;