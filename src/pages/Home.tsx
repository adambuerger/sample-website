import React from "react";
import AboutRow from "../components/AboutRow.tsx";
import Reviews from "../components/Reviews.tsx";

const Home = () => {
    return <>
        <div className="homepage">
            <AboutRow />
            <Reviews />
        </div>
    </>;
};

export default Home;
