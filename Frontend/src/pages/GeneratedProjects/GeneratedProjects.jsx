import "./GeneratedProjects.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function GeneratedProjects() {

    const navigate = useNavigate();

    const [projects, setProjects] = useState([]);

    const [bestProject, setBestProject] = useState(null);

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"));
        const data = JSON.parse(localStorage.getItem("generatedProjects"));

        if(!user)
        {
            navigate("/");
            return;
        }

        if (!data) {

            navigate("/dashboard");

            return;

        }

        setProjects(data.generatedIdeas.projects);

        setBestProject(data.generatedIdeas.bestRecommendation);

    }, [navigate]);

    const viewProject = (project) => {

        localStorage.setItem(

            "selectedProject",

            JSON.stringify(project)

        );

        navigate("/project-details");

    };

    if (projects.length === 0) {

    return (

        <>
            <Navbar />

            <div className="projects-container">

                <h2>No Projects Found</h2>

                <p>

                    Please generate project ideas first.

                </p>

            </div>

            <Footer />

        </>

    );

}

    return (

        <>

            <Navbar />

            <div className="projects-container">

                <h1>

                    Generated Projects

                </h1>

                <p className="page-subtitle">
                    Here are the best software project ideas based on your requirements.
                </p>

                {

                    bestProject &&

                    <div className="recommended-card">

                        <h2>

                            Best Recommendation

                        </h2>

                        <h3>

                            {bestProject.projectName}

                        </h3>

                        <p>

                            {bestProject.reason}

                        </p>

                    </div>

                }

                <div className="project-list">

                    {

                        projects.map((project,index)=>(

                            <div
                                className="project-card"
                                key={index}
                            >

                                <h3>

                                    {project.projectName}

                                </h3>

                                <p>

                                    {project.objective}

                                </p>

                                <div className="project-info">

                                    <span>

                                        Difficulty: 
                                        {" "+project.difficulty}

                                    </span>

                                    <span>

                                        Duration: 
                                        {" "+project.estimatedDuration}

                                    </span>

                                </div>

                                <button
                                    className="primary-btn"
                                    onClick={() => viewProject(project)}
                                >

                                    Explore Project

                                </button>

                            </div>

                        ))

                    }

                </div>

            </div>

            <Footer />

        </>

    );

}

export default GeneratedProjects;