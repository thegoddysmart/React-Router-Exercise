import React from "react";
// import { useHistory } from "react-router-dom";
import  { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const handleNavigateToAbout = () => {
        navigate("/about");
    };

    return (
        <div>
            <h1>Goddy Smart Serrly Home Page</h1>

            <button onClick={handleNavigateToAbout}>Go to About Page</button>
        </div>
    )
}

export default Home;