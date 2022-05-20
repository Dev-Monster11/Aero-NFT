import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Logo from "../../images/main-logo.png";
import insta from "../../images/instagram.png";
import linkedin from "../../images/insta.png";
import Youtube from "../../images/youtube.png";
import Twitter from "../../images/twitter.png";
import openSea from "../../images/discord.png"
import "../../App.css";

const Header = ({whitePaper, about, flight, team}) => {

    return (
        <Navbar style={{maxWidth: "92%"}} className={'container'} expand="lg">
                <Navbar.Brand className={'mr-4'} href="/"><img src={Logo} alt={'main_logo'} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink onClick={about} className={'nav-link'} to={'/'}>aBOUT</NavLink>
                        <NavLink onClick={whitePaper} className={'nav-link'} to={'/'}>WHITE papER</NavLink>
                        <NavLink onClick={flight} className={'nav-link'} to={'/'}>FLIGHT pLaN</NavLink>
                        <NavLink onClick={team} className={'nav-link'} to={'/'}>TEaM</NavLink>
                        <div className={'header_social'}>
                            <a target="_blank" href={'https://www.linkedin.com/in/josh-wade-6b59a975/'}><img className={'nav-item-img'} src={linkedin} alt={'social'}/></a>
                            <a target="_blank" href={'https://www.youtube.com/channel/UCKRPijo2TGC3u56nuGHpv3g'}><img className={'nav-item-img'} src={Youtube} alt={'social'}/></a>
                            <a target="_blank" href={'https://www.instagram.com/wark.art/'}><img className={'nav-item-img'} src={insta} alt={'social'}/></a>
                            <a target="_blank" href={'https://twitter.com/AeroPupsForever'}><img className={'nav-item-img'} src={Twitter} alt={'social'}/></a>
                            <a target="_blank" href={'https://discord.gg/bKsEdQr4AS'}><img className={'nav-item-img'} src={openSea} alt={'social'}/></a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
};
export default Header;