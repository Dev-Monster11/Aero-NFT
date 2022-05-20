// import React, {useRef} from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../images/main-logo.png";
import insta from "../../images/instagram.png";
import linkedin from "../../images/insta.png";
import Youtube from "../../images/youtube.png";
import Twitter from "../../images/twitter.png";
import openSea from "../../images/discord.png";
import inc from "../../images/Vector2.png";
import dic from "../../images/Vector.png";
import { useEffect, useMemo, useRef, useState } from "react";

const NFT = () => {
    const [count, setCount] = useState(1);
    const decNum = () => {
        if (count > 1) setCount(count - 1);
    };
    const incNum = () => {
        if (count < 5) setCount(count + 1);
    };
    return (
        <div className={"nft_background"}>
            <Navbar style={{ maxWidth: "92%" }} className={"container"} expand="lg">
                <Navbar.Brand className={"m-auto"} href="/">
                    <img src={Logo} alt={"main_logo"} />
                </Navbar.Brand>
            </Navbar>
            <div className="nft_container">
                <div className="nft_border h-100 w-100">
                    <div className="nft_main  h-100 w-100">
                        <h2>MINT YOUR PUPS</h2>
                        <p className="mt-4 max_text">
                            PRESALE MAX <b>= 5</b>
                        </p>
                        <p className="max_text">
                            PUBLIC SALE MAX <b>= NONE</b>
                        </p>
                        <div className="btn_group">
                            <button
                                onClick={() => {
                                    decNum();
                                }}
                            >
                                <img src={dic} />
                            </button>
                            <input type="text" value={"0" + count} readOnly className="mintCount" />
                            <button
                                onClick={() => {
                                    incNum();
                                }}
                            >
                                <img src={inc} />
                            </button>
                        </div>
                        <button className="mt-5 mint_btn">MINT NOW</button>
                    </div>
                </div>
            </div>
            <footer className="nft_footer">
                <div className="text-center">
                    <div className={"termsFeed"}>
                        <p className="">
                            TermsFeed © 2021- 2022 <span> | Aeropups </span>{" "}
                        </p>
                        <div style={{ flex: 1 }}></div>
                        <div className="d-flex justify-content-center icons">
                            <div className="footer-nav-item-img">
                                <a target="_blank" href={"https://www.linkedin.com/in/josh-wade-6b59a975/"}>
                                    <img className={"nav-item-img"} src={linkedin} alt={"social"} />
                                </a>
                            </div>
                            <div className="footer-nav-item-img">
                                <a target="_blank" href={"https://www.youtube.com/channel/UCKRPijo2TGC3u56nuGHpv3g"}>
                                    <img className={"nav-item-img"} src={Youtube} alt={"social"} />
                                </a>
                            </div>
                            <div className="footer-nav-item-img">
                                <a target="_blank" href={"https://www.instagram.com/wark.art/"}>
                                    <img className={"nav-item-img"} src={insta} alt={"social"} />
                                </a>
                            </div>
                            <div className="footer-nav-item-img">
                                <a target="_blank" href={"https://twitter.com/AeroPupsForever"}>
                                    <img className={"nav-item-img"} src={Twitter} alt={"social"} />
                                </a>
                            </div>
                            <div className="footer-nav-item-img">
                                <a target="_blank" href={"https://discord.gg/bKsEdQr4AS"}>
                                    <img className={"nav-item-img"} src={openSea} alt={"social"} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default NFT;
