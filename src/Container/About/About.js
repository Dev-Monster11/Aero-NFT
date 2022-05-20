import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Account from "../account/";

const About = () => {
    return (
        <div className="container about_section">
            <h3>ABOUT US</h3>
            <div className="row">
                <div className="col-md-5 about_section_col">
                    <p>
                        The AeroPups mission is to help as many people as possible achieve their dreams through flight. We see a huge gap in value in
                        most NFT projects and decided to make AeroPups unique, as it should be, to mold the NFT future for the world. The difference
                        in value comes with our business model in place, coinciding with the community goals to bring massive value both in AeroDrops
                        and experiences forever.
                    </p>
                    <div className="about_btn">
                        <Link to={"/NFT"} style={{ textDecoration: "none" }}>
                            <button>MINT YOUR pUp</button>
                        </Link>
                        <Account />
                    </div>

                    <div className="about_timer">
                        <h3>LaUNCHING Q2 2022</h3>
                    </div>
                </div>
                <div className="col-md-1" />

                <div className="col-md-6">
                    <iframe
                        className={"iframe_video"}
                        src="https://player.vimeo.com/video/685716661?h=d684d30403&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default About;
