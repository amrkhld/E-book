import { Link, useNavigate, useLocation } from "react-router-dom";

import next from "../assets/general/next.svg"
import prev from "../assets/general/prev.svg"
import home from "../assets/general/home.svg"
import content from "../assets/general/content.svg"

import "./topNavigation.css"

export default function TopNavigation({ prevPath, nextPath }) {

    const navigate = useNavigate()
    const location = useLocation()

    return (
        <nav className="top-navigation">
            <div className="nav-left">
                {prevPath && (
                    <button
                        className="nav-btn pop"
                        onClick={() => navigate(prevPath)}
                        aria-label="Previous"
                    >
                        <img style={{ width: "40px", height: "30px", margin: "0px" }} src={prev} />
                    </button>
                )}

                {location.pathname !== "/content" && (
                    <Link to="/content" className="nav-btn pop" aria-label="Content">
                        <img style={{ width: "40px", height: "30px", margin: "0px" }} src={content} />
                    </Link>
                )}

                <Link to="/" className="nav-btn pop" aria-label="Home">
                    <img style={{ width: "40px", height: "30px", margin: "0px" }} src={home} />
                </Link>
            </div>

            <div className="nav-right">
                {nextPath && (
                    <button
                        className="nav-btn pop"
                        onClick={() => navigate(nextPath)}
                        aria-label="Nextious"
                    >
                        <img style={{ width: "40px", height: "30px", margin: "0px" }} src={next} />
                    </button>
                )}
            </div>
        </nav>
    )
}