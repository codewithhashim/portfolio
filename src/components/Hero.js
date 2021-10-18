import { useRef } from "react";


/* eslint-disable no-restricted-globals */
function Hero() {



    return (
        <div className="background-container">

            <div className="header-container">

                <header>

                    <div className="logo-name">
                        Hashim Muhammad
                    </div>
                    <div className="navcontainer">
                        <nav className="desktopnav">
                            <ul className="nav-links">
                                <li>
                                    <a href="#about" id="link1" >About</a>
                                </li>

                                <li>
                                    <a href="#projects" id="link2">Projects</a>
                                </li>
                                <li>
                                    <a href="#skills" id="link3">Skills</a>
                                </li>

                            </ul>
                        </nav>



                    </div>
                </header>
            </div >



            <div className="hero">
                <h1 id="title">A Developer, Teacher and a Change Maker! </h1>
                <div className="contact">


                    <a href="https://www.fiverr.com/muhammadhashim_" className="fiverr-btn">
                        Hire me on Fiverr 🔥
                    </a>

                    <a href="mailto:muhammadhashim4e@gmail.com" className="contact-me">Get in touch</a>
                </div>

            </div>
            <div class="stars"></div>
            <div class="twinkling"></div>
        </div >

    )


}

export default Hero