// import React, {useRef} from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../../images/main-logo.png";
import insta from "../../images/instagram.png";
import linkedin from "../../images/insta.png";
import Youtube from "../../images/youtube.png";
import Twitter from "../../images/twitter.png";
import openSea from "../../images/open_sea.png";
import inc from "../../images/Vector2.png";
import dic from "../../images/Vector.png";
import { useEffect, useMemo, useRef, useState } from "react";
import abi from "../../helpers/contact.json";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";
import axios from "axios";
const NFT = () => {
    const [count, setCount] = useState(1);
    const [disabled, setDisabled] = useState(false);
    const decNum = () => {
        if (count > 1) setCount(count - 1);
    };
    const incNum = () => {
        if (count < 5) setCount(count + 1);
    };
    const { account, library } = useWeb3React();
    let contract, provider, signer;
    try {
        provider = new ethers.providers.Web3Provider(library.provider);
        signer = provider.getSigner();
        contract = new ethers.Contract("0xabCf6B3c7a354054aE5F0628814EdB90C80759c4", abi, signer);
    } catch (error) {
        contract = null;
    }
    const mint = async () => {
        if (contract) {
            setDisabled(true);
            axios
                .get(
                    "https://us-central1-nameless-api-production.cloudfunctions.net/tickets/hK6TxqOyY2cpf97UxgFq/signature?wallet=" +
                        account +
                        "&quantity=" +
                        count
                )
                .then(async (response) => {
                    console.log(response.data);
                    let info = response.data;
                    console.log(ethers.utils.formatUnits(info.price.toString(), 18).toString() * 1, "asdfasdf");
                    let buffer = await contract.purchase(
                        count,
                        info.price.toString(),
                        "0xB2e96DF7bBc4c991bF93a5Bb87A1d66c59643e7B",
                        "hK6TxqOyY2cpf97UxgFq",
                        info.signature,
                        {
                            value: info.price.toString(),
                            from: account,
                        }
                    );
                    await buffer.wait();
                    Store.addNotification({
                        title: "Mint",
                        message: "Successfully Minted",
                        type: "success",
                        insert: "top",
                        container: "top-right",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                            duration: 2000,
                            onScreen: true,
                        },
                    });
                    setDisabled(false);
                })
                .catch((e) => {
                    console.log(e);
                    setDisabled(false);
                });
        } else {
            Store.addNotification({
                title: "Warning",
                message: "Connect Wallet first!",
                type: "warning",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 2000,
                    onScreen: true,
                },
            });
        }
    };

    useEffect(() => {
        console.log(account);
    }, [account, library, disabled]);
    return (
        <div className={"nft_background"}>
            <ReactNotifications />
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
                        <button
                            className="mint_btn"
                            onClick={() => {
                                mint();
                            }}
                            disabled={disabled}
                        >
                            MINT NOW
                        </button>
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
                                <a target="_blank" href={"https://discord.gg/bKsEdQr4AS"}>
                                    <img className={"nav-item-img"} src={openSea} alt={"social"} />
                                </a>
                            </div>
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
                                <a target="_blank" href={"https://twitter.com/AeroPupsForever"}>
                                    <img className={"nav-item-img"} src={Twitter} alt={"social"} />
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
