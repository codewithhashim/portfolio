import { useRef } from "react";

/* eslint-disable no-restricted-globals */
function Hero() {


    const canvasRef = useRef()

    return (
        <div className="background-container">

            <div className="header-container">
                <header>
                    <div className="logo-name">
                        Hashim Muhammad
                    </div>
                    <div className="navcontainer">
                        <nav>
                            <ul className="nav-links">
                                <li>
                                    <a href="#about">About</a>
                                </li>

                                <li>
                                    <a href="#projects">Projects</a>
                                </li>
                                <li>
                                    <a href="#skills">Skills</a>
                                </li>
                                <li>
                                    <a href="#experience">Experience</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>



            <div className="hero">
                <h1 id="title">A Developer, Teacher and a Change Maker! </h1>
                <div className="contact">
                    <button>
                        Hire me on Fiverr
                    </button>
                    <a href="mailto:muhammadhashim4e@gmail.com" className="contact-me">Get in touch</a>
                </div>

            </div>
            <div class="stars"></div>
            <div class="twinkling"></div>
        </div>

    )


}

export default Hero