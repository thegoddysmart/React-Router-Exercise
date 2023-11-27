import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
    return (
        <div>
            <h1>This is the About Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/about/mission">Mission</Link>
                    </li>

                    <li>
                        <Link to="/about/vision">Vision</Link>
                    </li>

                    <li>
                        <Link to="/about/open-hours">Open Hours</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default About;