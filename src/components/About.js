import myProfile from './assets/images/myProfile.jpg'


function About() {
    return (
        <div id="about" >

            <div className="about-container">
                <div className="profile-picture">
                    <img src={myProfile} className="my-profile" alt="cool" />
                </div>
                <div className="card-container">
                    <h3 id="about-title">About Me</h3>
                    <div className="card">
                        <div className="card-header"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64" className="iconify" data-icon="emojione:red-circle" data-inline="false" style={{ transform: 'rotate(360deg)' }}><circle cx={32} cy={32} r={30} fill="#ed4c5c" /></svg> &nbsp; <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" className="iconify" data-icon="twemoji:yellow-circle" data-inline="false" style={{ transform: 'rotate(360deg)' }}><circle fill="#FDCB58" cx={18} cy={18} r={18} /></svg> &nbsp; <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36" className="iconify" data-icon="twemoji:green-circle" data-inline="false" style={{ transform: 'rotate(360deg)' }}><circle fill="#78B159" cx={18} cy={18} r={18} /></svg></div>
                        <div className="about-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis assumenda ad atque omnis hic totam. Harum rem, dolore facere maiores illum, eveniet veniam ratione enim a expedita nam tempore id. 👋

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About