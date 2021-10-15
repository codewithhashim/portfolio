import site1 from './assets/images/site1.jpeg'
import site2 from './assets/images/site2.jpeg'
import site3 from './assets/images/site3.jpeg'
import site4 from './assets/images/site4.jpeg'
import site5 from './assets/images/site5.jpeg'
import site6 from './assets/images/site6.jpeg'

import site7 from './assets/images/ongoing_site1.jpeg'
import site8 from './assets/images/ongoing_site2.jpeg'
import site9 from './assets/images/ongoing_site3.jpeg'






function Projects() {
    return (
        <div id="projects">
            <div className="projects-container">
                <h1 className="projects-title">Completed Projects</h1>
                <div className="projects-row">


                    <div className="screen">
                        <img src={site1} alt="missingimage" className="img1" />

                    </div>
                    <div className="screen">
                        <img src={site2} alt="missingimage" className="img2" />

                    </div>
                    <div className="screen">
                        <img src={site3} alt="missingimage" className="img3" />

                    </div>

                </div>
                <div className="projects-row">


                    <div className="screen">
                        <img src={site4} alt="missingimage" className="img4" />

                    </div>
                    <div className="screen">
                        <img src={site5} alt="missingimage" className="img5" />

                    </div>
                    <div className="screen">
                        <img src={site6} alt="missingimage" className="img6" />

                    </div>

                </div>

                <div className="ongoing-projects">
                    <h1 className="projects-title">Ongoing Projects</h1>
                    <div className="projects-row">


                        <div className="screen">
                            <img src={site7} alt="missingimage" className="img4" />

                        </div>
                        <div className="screen">
                            <img src={site8} alt="missingimage" className="img7" />

                        </div>
                        <div className="screen">
                            <img src={site9} alt="missingimage" className="img8" />

                        </div>

                    </div>
                </div>
            </div>




        </div>

    )
}

export default Projects