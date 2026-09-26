import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState,useEffect } from "react";

function Navbar() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
);

    const logout = () => {

        localStorage.removeItem("user");
        localStorage.removeItem("generatedProjects");
        localStorage.removeItem("selectedProject");


        navigate("/");

    };
    useEffect(() => {

    if (darkMode) {

        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");

    } else {

        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");

    }

}, [darkMode]);

    return (

        <nav className="navbar">

          <div className="navbar-container">

            <div className="logo">

                <FaRobot className="logo-icon"/>

                <Link to={user ? "/home" : "/"} className="logo-text">

                    Pro-Ideas

                </Link>

            </div>

            <ul className="nav-links">

                <li>

                    <NavLink
                        to={user ? "/home" : "/"}
                        className={({isActive}) =>
                            isActive ? "active-link" : ""
                        }
                    >

                        Home

                    </NavLink>

                </li>

                {

                    !user &&

                    <>

                        <li>

                            <NavLink
                                to="/login"
                                className={({isActive}) =>
                                    isActive ? "active-link" : ""
                                }
                            >

                                Login

                            </NavLink>

                        </li>

                        <li>

                            <NavLink
                                to="/register"
                                className={({isActive}) =>
                                    isActive ? "active-link" : ""
                                }
                            >

                                Register

                            </NavLink>

                        </li>

                    </>

                }

                {

                    user &&

                    <>

                        <li>

                            <NavLink
                                to="/dashboard"
                                className={({isActive}) =>
                                    isActive ? "active-link" : ""
                                }
                            >

                                Dashboard

                            </NavLink>

                        </li>

                        <li>

    <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
    >

        {darkMode ? <FaSun /> : <FaMoon />}

    </button>

</li>

                        <li>

                            <button
                                className="logout-nav"
                                onClick={logout}
                            >

                                Logout

                            </button>

                        </li>

                    </>

                }

            </ul>
            </div>

        </nav>

    );

}

export default Navbar;