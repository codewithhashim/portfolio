import site1 from './assets/images/site1.jpeg'
import site2 from './assets/images/site2.jpeg'
import site3 from './assets/images/site3.jpeg'
import site4 from './assets/images/site4.jpeg'
import site5 from './assets/images/site5.jpeg'
import site6 from './assets/images/site6.jpeg'



function Projects() {
    return (
        <div id="projects">
            <div className="container">
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
            </div>



            <div className="ongoing-projects">

            </div>
        </div>

    )
}

export default Projects