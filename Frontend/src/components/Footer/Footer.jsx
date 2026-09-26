import "./Footer.css";
import { FaRobot } from "react-icons/fa";

function Footer() {

    return (

        <footer className="footer">

            <div className="container">

                <div className="footer-content">

                    <div className="footer-logo">

                        <FaRobot className="footer-icon"/>

                        <h2>Pro-Ideas</h2>

                    </div>

                    <p className="footer-description">

                        AI Project Recommendation System powered by Artificial Intelligence.

                    </p>

                    <div className="footer-bottom">

                        <p>

                            © 2026 Pro-Ideas. All rights reserved.

                        </p>

                    </div>

                </div>

            </div>

        </footer>

    );

}

export default Footer;