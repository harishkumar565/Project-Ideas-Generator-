import "./RequirementForm.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RequirementForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        domain: "",

        language: "",

        difficulty: "",

        teamSize: "",

        duration: ""

    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        const loggedUser = JSON.parse(localStorage.getItem("user"));

        if (!loggedUser) {

            navigate("/login");

            return;

        }

        if (
            !formData.domain.trim() ||
            !formData.language.trim() ||
            !formData.difficulty.trim() ||
            !formData.teamSize ||
            !formData.duration.trim()
        ) {

            setError("Please fill all the fields.");

            return;

        }

        try {

            setLoading(true);

            const requestBody = {

                userId: loggedUser.id,

                domain: formData.domain,

                language: formData.language,

                difficulty: formData.difficulty,

                teamSize: Number(formData.teamSize),

                duration: formData.duration

            };

            const response = await api.post("/requirements", requestBody);

            localStorage.setItem(

                "generatedProjects",

                JSON.stringify(response.data)

            );

            navigate("/projects");

        }

        catch (err) {

            console.log(err);

            setError("Unable to generate projects. Please try again.");

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <>

            <Navbar />

            <div className="requirement-container">

                <div className="requirement-card">

                    <h2>

                        Tell us your project requirements

                    </h2>

                    <p>
                        Describe your requirements and receive personalized software project recommendations powered by AI.
                    </p>

                    <form onSubmit={handleSubmit}>

                        <input

                            type="text"

                            name="domain"

                            disabled={loading}

                            placeholder="Domain"

                            value={formData.domain}

                            onChange={handleChange}

                        />

                        <input

                            type="text"

                            name="language"

                            disabled={loading}

                            placeholder="Programming Language"

                            value={formData.language}

                            onChange={handleChange}

                        />

                        <input

                            type="text"

                            name="difficulty"

                            disabled={loading}

                            placeholder="Difficulty"

                            value={formData.difficulty}

                            onChange={handleChange}

                        />

                        <input

                            type="number"

                            name="teamSize"

                            disabled={loading}

                            placeholder="Team Size"

                            value={formData.teamSize}

                            onChange={handleChange}

                        />

                        <input

                            type="text"

                            name="duration"

                            disabled={loading}

                            placeholder="Duration"

                            value={formData.duration}

                            onChange={handleChange}

                        />

                        {

                            error &&

                            <p className="error">

                                {error}

                            </p>

                        }

                        <button

                            className="primary-btn"

                            disabled={loading}

                        >

                            {

                                loading ?

                                "Generating..." :

                                "Generate Projects"

                            }

                        </button>

                    </form>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default RequirementForm;