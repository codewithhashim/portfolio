import githubsvg from './assets/github.svg'
function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <a href="https://github.com/ProHashim" target="_blank" rel="noreferrer">
                    <img src={githubsvg} alt="" className="githubsvg" />
                </a>
            </div>

        </div>
    )
}

export default Footer