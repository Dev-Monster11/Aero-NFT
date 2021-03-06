import { useState } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
    InjectedConnector,
    NoEthereumProviderError,
    UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect, WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ethers } from "ethers";
import Web3 from "web3";

//0 ropsten, 1 bsc
let netid = 0;
let provider = null;
let walletconnect, injected, bsc;

const netlist = [
    {
        chaind: 1,
        rpcurl: "https://mainnet.infura.io/v3/6f27acb363384770a4f6ef7cd5241d46",
        blockurl: "https://etherscan.io",
        chainname: "Ethereum Mainnet",
        chainnetname: "Ethereum Mainnet",
        chainsymbol: "ETH",
        chaindecimals: 18,
    },
    // {
    //     chaind: 4,
    //     rpcurl: "https://rinkeby.infura.io/v3/f69e441f527d4d5aa559665f00692951",
    //     blockurl: "https://rinkey.etherscan.io",
    //     chainname: "Ethereum Rinkeby Testnet",
    //     chainnetname: "Ethereum Rinkeby Testnet",
    //     chainsymbol: "ETH",
    //     chaindecimals: 18,
    // },
    // {
    //     chaind: 97,
    //     rpcurl: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    //     blockurl: "https://testnet.bscscan.com/",
    //     chainname: "Binance Smart Chain - Testnet",
    //     chainnetname: "BNB",
    //     chainsymbol: "BNB",
    //     chaindecimals: 18,
    // },
    // {
    //     chaind: 56,
    //     rpcurl: "https://bsc-dataseed1.ninicoin.io",
    //     blockurl: "https://bscscan.com/",
    //     chainname: "Binance Smart Chain Mainnet",
    //     chainnetname: "Binance Smart Chain Mainnet",
    //     chainsymbol: "BNB",
    //     chaindecimals: 18,
    // },
    {
        chaind: 137,
        rpcurl: "https://rpc-mainnet.matic.network",
        blockurl: "https://polygonscan.com/",
        chainname: "Polygon Mainnet",
        chainnetname: "Polygon Mainnet",
        chainsymbol: "MATIC",
        chaindecimals: 18,
    },
    // {
    //     chaind: 80001,
    //     rpcurl: "https://rpc-mumbai.matic.today",
    //     blockurl: "https://mumbai.polygonscan.com/",
    //     chainname: "Mumbai Testnet",
    //     chainnetname: "Mumbai Testnet",
    //     chainsymbol: "MATIC",
    //     chaindecimals: 18,
    // },
];

const defaultethereumconflag = {
    testing: false,
    autoGasMultiplier: 1.5,
    defaultConfirmations: 1,
    defaultGas: "6000000",
    defaultGasPrice: "1000000000000",
    nodetimeout: 10000,
};

function web3ProviderFrom(endpoint, config) {
    const ethConfig = Object.assign(defaultethereumconflag, config || {});

    const providerClass = endpoint.includes("wss") ? Web3.providers.WebsocketProvider : Web3.providers.HttpProvider;

    return new providerClass(endpoint, {
        timeout: ethConfig.nodetimeout,
    });
}

export function getDefaultProvider() {
    if (!provider) {
        provider = new ethers.providers.Web3Provider(web3ProviderFrom(netlist[netid].rpcurl), netlist[netid].chaind);
    }

    return provider;
}

export function setNet(id) {
    netid = id;
    walletconnect = new WalletConnectConnector({
        rpc: { [netlist[netid].chaind]: netlist[netid].rpcurl },
        qrcode: true,
        pollingInterval: 12000,
    });

    injected = new InjectedConnector({
        supportedChainIds: [netlist[netid].chaind],
    });
}

export function useWalletConnector() {
    const { activate, deactivate } = useWeb3React();
    const [provider, setProvider] = useState({});

    const setupNetwork = async () => {
        const provider = window.ethereum;
        if (provider) {
            try {
                await provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                        {
                            chainId: `0x${netlist[netid].chaind.toString(16)}`,
                        },
                    ],
                });
                setProvider(provider);
                return true;
            } catch (error) {
                return false;
            }
        } else {
            console.error("Can't setup the Default Network network on metamask because window.ethereum is undefined");
            return false;
        }
    };

    const loginMetamask = async () => {
        loginWallet(injected);
    };

    const loginWalletConnect = async () => {
        loginWallet(walletconnect);
    };

    const loginBSC = async () => {
        loginWallet(bsc);
    };

    const loginWallet = (connector) => {
        if (connector) {
            activate(connector, async (error) => {
                if (error instanceof UnsupportedChainIdError) {
                    const hasSetup = await setupNetwork();
                    if (hasSetup) {
                        activate(connector);
                    }
                } else {
                    if (error instanceof NoEthereumProviderError) {
                        console.log("Network Provide Error");
                    } else if (error instanceof UserRejectedRequestErrorInjected || error instanceof UserRejectedRequestErrorWalletConnect) {
                        console.log("Authorization Error! Please authorize to access your account");
                    } else {
                        console.log(error.name + error.message);
                    }
                }
            });
        } else {
            console.log("Unable to find connector! The connector config is wrong");
        }
        setProvider(connector);
    };

    const logoutWalletConnector = () => {
        deactivate(provider, async (error) => {
            console.log(error);
            return false;
        });
        return true;
    };

    return {
        loginMetamask,
        loginWalletConnect,
        loginBSC,
        logoutWalletConnector,
    };
}
