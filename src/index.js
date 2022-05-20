import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1a90ff",
        },
    },
    typography: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    components: {
        MuiButton: {
            styleOverrides: {
                text: {
                    fontWeight: 600,
                    textTransform: "inherit",
                },
                contained: {
                    fontWeight: 700,
                    textTransform: "inherit",
                    borderRadius: 25,
                },
            },
        },
    },
});

const POLLING_INTERVAL = 12000;

const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = POLLING_INTERVAL;
    return library;
};

const Application = () => {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </Web3ReactProvider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>,
    document.getElementById("root")
);
