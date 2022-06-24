import React from 'react';
import Aero from "../../images/Aero.png"
import Josh from "../../images/josh1.png";
import Drew from "../../images/drew.png";
import Alexa from "../../images/alexa.png";
import Spencer from "../../images/spencer.png";
import "../../App.css";

const Team = () => {

    const membersDetails = [
        {
            id: 1,
            img: Josh,
            name: 'JOSH',
            role: 'CO-FOUNDER',
            dsc: 'Josh is one of the co-founders of AeroPups. As an avid private pilot with a passion for aviation, he’s been around aircraft since he was 12 years old. Josh is the definition of a people-person, running a successful pressure washing business as a teenager and working his way through the ranks at various tech companies in his early 20’s. Now, with the drive to go further, Josh is excited to found a non-profit to help children learn how to fly just like he did.'
        },
        {
            id: 2,
            img: Drew,
            name: 'dREW',
            role: 'CO-FOUNDER',
            dsc: ' As AeroPups’ second co-founder, Drew brings the madness behind the method. Drew is an Eagle Scout, electrician, and VeeFriends holder. He has been involved in cryptocurrency since 2013, with early investments in bitcoin.'
        },
        {
            id: 3,
            img: Alexa,
            name: 'aLEXa',
            role: 'NFT ARTIST',
            dsc: ' Our incredible NFT artist Alexa is an art student with a love of painting, drawing, sculpting and all things creative. She hopes to one day bring her love of art to students in her classroom. Alexa’s favorite past times include enjoying sushi and playing with cats and dogs.'
        },
        {
            id: 4,
            img: Spencer,
            name: 'SpENCER',
            role: 'SYSTEMS ADMINISTRATOR',
            dsc: 'Systems Administrator Spencer is a coding mastermind, having worked on the backend of various projects from blockchain to video games. Spencer finds joy in repping various big-box companies at once. Does he work for Domino’s, Costco, or Waffle House? The world may never know.'
        },
    ]


    return (
        <>
            <div className="team_div">
                <h3>THE TEaM</h3>
                <p>Now, with a dream to lead the way in business NFTs, this stellar team brings you AeroPups. Aero and
                    the
                    team are glad you’re here.</p>
            </div>

            <div className="team_div">
                <img src={Aero} alt={'aero'}/>
                <h5 className="mt-1">aERO</h5>
                <p>The pup that started it all Aero is a rambunctious Pitsky (Pitbull-Husky) with 1% wolf DNA- giving
                    him the
                    optimal combination of crazy, energetic, and wild. From jet-skiing to waterfall hikes, there is
                    nothing this
                    adventure pup loves more than exploring with his humans and running wild in the great outdoors.</p>
            </div>
            <div style={{overflow: 'hidden'}} className="container-fluid mt-5">
                <div className="row">
                    {
                        membersDetails.map((detail) => (
                            <div className="col-md-3 team_member">
                                <img src={detail.img} alt={'detail'}/>
                                <h4>{detail.name}</h4>
                                <span>{detail.role}</span>
                                <p>{detail.dsc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Team;
