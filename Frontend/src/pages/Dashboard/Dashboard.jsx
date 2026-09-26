import "./Dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaEnvelope,
  FaLightbulb,
  FaFolderOpen,
  FaSignOutAlt
} from "react-icons/fa";

function Dashboard() {

    const navigate = useNavigate();

    const [user, setUser] = useState({});

    const [hasProjects, setHasProjects] = useState(false);

    useEffect(() => {
        try {
            const loggedUser = JSON.parse(localStorage.getItem("user"));
            if (!loggedUser) {
                navigate("/login");
                return;
            }
            setUser(loggedUser);
            const projects = localStorage.getItem("generatedProjects");
            setHasProjects(!!projects);
        } 
        catch (error) {
            localStorage.removeItem("user");
            navigate("/");
        }

    }, [navigate]);

    const logout = () => {

        localStorage.removeItem("user");
        localStorage.removeItem("generatedProjects");
        localStorage.removeItem("selectedProject");

        navigate("/login");

    };

    return (

        <>

            <Navbar />

            <div className="dashboard container">

                <div className="welcome-card">

                    <h1>

                        Welcome, {user.userName} 👋

                    </h1>

                    <p>

                        Ready to discover your next software project idea using Artificial Intelligence?

                    </p>

                </div>

                <div className="dashboard-buttons">

                    <button
                        className="primary-btn"
                        onClick={() => navigate("/requirement")}
                    >

                        <FaLightbulb />

                        Generate Projects
                        

                    </button>
                    

                    {/* <button
                        className="secondary-btn"
                        onClick={() => navigate("/projects")}
                    >

                        <FaFolderOpen />

                        View Projects

                    </button> */}

                </div>

                {
    hasProjects && (

        <div className="recent-card">

            <h2>

                Recent Activity

            </h2>

            <p>

                Your last generated AI projects are available.

            </p>

            <button
                className="primary-btn continue-btn"
                onClick={() => navigate("/projects")}
            >

                Click to view

            </button>

        </div>

    )

}

                <div className="profile-card">

                    <h2>

                        User Information

                    </h2>

                    <div className="info-row">

                        <FaUserCircle />

                        <span>

                            {user.userName}

                        </span>

                    </div>

                    <div className="info-row">

                        <FaEnvelope />

                        <span>

                            {user.email}

                        </span>

                    </div>

                </div>

                <div className="tips-card">

    <h2>Quick Tips</h2>

    <ul>

        <li>Enter your project requirements clearly.</li>

        <li>Choose a programming language you are comfortable with.</li>

        <li>Provide the expected project duration.</li>

        <li>AI will recommend the best project based on your inputs.</li>

        <li>Click "View Details" to explore complete project information.</li>

    </ul>

</div>

                <div className="logout-section">

                    <button
                        className="logout-btn"
                        onClick={logout}
                    >

                        <FaSignOutAlt />

                        Logout

                    </button>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Dashboard;