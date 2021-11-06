import myProfilePic from './assets/images/Hashim.png'


function About() {
    return (
        <div id="about" >

            <div className="about-container">
                <div className="profile-picture">
                    <img src={myProfilePic} className="my-profile" alt="cool" />
                </div>
                <div className="card-container">
                    <h3 id="about-title">About Me</h3>
                    <div className="card">
                        <div className="card-header"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64" className="iconify" data-icon="emojione:red-circle" data-inline="false" style={{ transform: 'rotate(360deg)' }}><circle cx={32} cy={32} r={30} fill="#ed4c5c" /></svg> &nbsp; <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" className="iconify" data-icon="twemoji:yellow-circle" data-inline="false" style={{ transform: 'rotate(360deg)' }}><circle fill="#FDCB58" cx={18} cy={18} r={18} /></svg> &nbsp; <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" className="iconify" data-icon="twemoji:green-circle" data-inline="false" style={{ transform: 'rotate(360deg)' }}><circle fill="#78B159" cx={18} cy={18} r={18} /></svg></div>
                        <div className="about-text">
                        Hi 👋, I am Hashim. <br />
                            A ReactJS and a WordPress developer by passion and profession. A developer by hobby and by heart! I love teaching people and sharing my knowledge, communicating, and building developers' communities around. I develop WordPress themes and make ReactJS and WordPress-based websites and help people to have their online presence. Besides that, you can hire me for your project planning, cost estimation, project requirements, and everything you need to kick-off your online business!

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About