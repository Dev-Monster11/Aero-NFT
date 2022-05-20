import React from 'react';
import mainLogo from "../../images/main-logo.png";
import insta from "../../images/instagram.png";
import linkedin from "../../images/insta.png";
import Youtube from "../../images/youtube.png";
import Twitter from "../../images/twitter.png";
import openSea from "../../images/discord.png";
import "../../App.css";

const Footer = ({ whitePaper, about, flight, team }) => {
    return (
        <footer style={{ marginTop: '50px' }}>
            <div className="text-center">
                <img className={'footer_logo'} src={mainLogo} alt={'footer_logo'} />
                <div className="footer_links">
                    <h5 onClick={about} >aBOUT</h5>
                    <h5 onClick={whitePaper} >WHITE papER</h5>
                    <h5 onClick={flight} >FLIGHT pLaN</h5>
                    <h5 onClick={team}>TEaM</h5>
                </div>
                <div className="subscribe">
                    <h5> Text NFT to 888-919-2060 </h5>
                    <p>for time sensitive announcements only!</p>

                    <div className="follow_us">
                        <p>FOLLOW US</p>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="footer-nav-item-img">
                            <a target="_blank" href={'https://www.linkedin.com/in/josh-wade-6b59a975/'}><img className={'nav-item-img'} src={linkedin} alt={'social'} /></a>
                        </div>
                        <div className="footer-nav-item-img">
                            <a target="_blank" href={'https://www.youtube.com/channel/UCKRPijo2TGC3u56nuGHpv3g'}><img className={'nav-item-img'} src={Youtube} alt={'social'} /></a>
                        </div>
                        <div className="footer-nav-item-img">
                            <a target="_blank" href={'https://www.instagram.com/wark.art/'}><img className={'nav-item-img'} src={insta} alt={'social'} /></a>
                        </div>
                        <div className="footer-nav-item-img">
                            <a target="_blank" href={'https://twitter.com/AeroPupsForever'}><img className={'nav-item-img'} src={Twitter} alt={'social'} /></a>
                        </div>
                        <div className='footer-nav-item-img'>
                            <a target="_blank" href={'https://discord.gg/bKsEdQr4AS'}><img className={'nav-item-img'} src={openSea} alt={'social'} /></a>
                        </div>
                    </div>
                </div>

                <div className={'termsFeed'}>
                    <p>TermsFeed © 2021- 2022  <span> | Aeropups </span> </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
