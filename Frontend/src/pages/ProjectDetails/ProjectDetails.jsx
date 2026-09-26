import "./ProjectDetails.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectDetails() {

    const navigate = useNavigate();

    const [project, setProject] = useState(null);

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("selectedProject"));

        if(!data){

            navigate("/projects");

            return;

        }

        setProject({

    ...data,

    features:
        typeof data.features === "string"
            ? JSON.parse(data.features)
            : data.features,

    modules:
        typeof data.modules === "string"
            ? JSON.parse(data.modules)
            : data.modules,

    industryApplications:
        typeof data.industryApplications === "string"
            ? JSON.parse(data.industryApplications)
            : data.industryApplications,

    technologyStack:
        typeof data.technologyStack === "string"
            ? JSON.parse(data.technologyStack)
            : data.technologyStack

});

    }, [navigate]);

    if(!project){

        return null;

    }

    return (

        <>

            <Navbar />

            <div className="details-container">

                <div className="details-card">

                    {/* <h1>

                        {project.projectName}

                    </h1>

                    <div className="detail-item">

                        <h3>Objective</h3>

                        <p>{project.objective}</p>

                    </div>

                    <div className="detail-item">

                        <h3>Problem Statement</h3>

                        <p>{project.problemStatement}</p>

                    </div>

                    <div className="detail-item">

                        <h3>Description</h3>

                        <p>{project.description}</p>

                    </div>

                    <div className="detail-item">

                        <h3>Difficulty</h3>

                        <p>{project.difficulty}</p>

                    </div>

                    <div className="detail-item">

                        <h3>Estimated Duration</h3>

                        <p>{project.estimatedDuration}</p>

                    </div>

                    <div className="detail-item">

                        <h3>Future Scope</h3>

                        <p>{project.futureScope}</p>

                    </div>

                    <div className="detail-item">
                        
                        <h3>Technology Stack</h3>
                        
                        <pre>
                            {JSON.stringify(project.technologyStack, null, 2)}
                        </pre>
                    </div>

                    <div className="detail-item">
                        
                        <h3>Features</h3>
                        
                        <ul>
                            {project.features?.map((item,index)=>
                            <li key={index}>{item}</li>
                            )}
                        </ul>

                    </div>
                    
                    <div className="detail-item">
                        
                        <h3>Modules</h3>
                        
                        <ul>
                            {project.modules?.map((item,index)=>
                            <li key={index}>{item}</li>
                            )}
                        </ul>
                        
                    </div>
                    
                    <div className="detail-item">
                        
                        <h3>Industry Applications</h3>
                        
                        <ul>
                            {project.industryApplications?.map((item,index)=>
                            <li key={index}>{item}</li>
                            )}
                        </ul>
                        
                        </div>

                    <div className="detail-item">

                        <h3>Why Choose This Project?</h3>

                        <p>{project.whyChooseThisProject}</p>

                    </div>

                    <button
                        className="primary-btn"
                        onClick={() => navigate("/projects")}
                    >

                        Back to Projects

                    </button> */}

                    <h1>{project.projectName}</h1>

<div className="section-box">

    <h2>Project Overview</h2>

    <div className="detail-item">
        <h3>Objective</h3>
        <p>{project.objective}</p>
    </div>

    <div className="detail-item">
        <h3>Problem Statement</h3>
        <p>{project.problemStatement}</p>
    </div>

    <div className="detail-item">
        <h3>Description</h3>
        <p>{project.description}</p>
    </div>

</div>

<div className="section-box">

    <h2>Project Details</h2>

    <div className="detail-item">
        <h3>Difficulty</h3>
        <p>{project.difficulty}</p>
    </div>

    <div className="detail-item">
        <h3>Estimated Duration</h3>
        <p>{project.estimatedDuration}</p>
    </div>

</div>

<div className="section-box">

    <h2>Technology Stack</h2>

    <pre>

        {JSON.stringify(project.technologyStack, null, 2)}

    </pre>

</div>

<div className="section-box">

    <h2>Modules</h2>

    <ul>

        {project.modules?.map((item,index)=>

            <li key={index}>{item}</li>

        )}

    </ul>

</div>

<div className="section-box">

    <h2>Features</h2>

    <ul>

        {project.features?.map((item,index)=>

            <li key={index}>{item}</li>

        )}

    </ul>

</div>

<div className="section-box">

    <h2>Industry Applications</h2>

    <ul>

        {project.industryApplications?.map((item,index)=>

            <li key={index}>{item}</li>

        )}

    </ul>

</div>

<div className="section-box">

    <h2>Future Scope</h2>

    <p>{project.futureScope}</p>

</div>

<div className="section-box">

    <h2>Why Choose This Project?</h2>

    <p>{project.whyChooseThisProject}</p>

</div>

<button
className="primary-btn"
onClick={()=>navigate("/projects")}
>

Back to Projects

</button>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default ProjectDetails;