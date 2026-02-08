import React from "react";

import "./Header.css";
import { useDispatch } from "react-redux";
// import App from "../../App";
import { openOverlay_as } from "../../features/overlay/overlaySlice"
import { Link } from "react-router-dom";

// type Props = {};


// const Header = (props: Props) => {
const Header = () => {
    const [isFullscreen, setIsFullscreen] = React.useState(false);

    const useAppDispatch = useDispatch()

    const openOverlay = (id: string) => () => {
        useAppDispatch(openOverlay_as({ payload: id, type: "oveerlay/openOverlay_as" }))
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
        <header className="ui-element">
            <div className="logo">Aditya Portfolio</div>

            <nav id="mainNav">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/?section=about">About</Link>
                <Link to="/?section=testimonials">Testimonials</Link>

                <button onClick={toggleFullscreen}
                    className={`fullscreen-btn ${isFullscreen ? "active" : ""}`}
                    id="fullscreenBtn"
                    aria-label="Toggle Fullscreen"
                >
                    <svg viewBox="0 0 24 24">
                        {isFullscreen ? (
                            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                        ) : (
                            <path d="M16 3h3a2 2 0 0 1 2 2v3m-18 0V5a2 2 0 0 1 2-2h3m0 18H5a2 2 0 0 1-2-2v-3m18 0v3a2 2 0 0 1-2 2h-3"></path>
                        )}
                    </svg>
                </button>
            </nav>
            <div className="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <button className="ui-toggle-btn" id="uiToggleBtn" aria-label="Toggle UI Visibility" title="Hide UI Elements (Press H)">
                <svg viewBox="0 0 24 24" id="eyeIcon"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>

            <button className="ui-toggle-btn ui-hidden" id="uiToggleBtn" aria-label="Toggle UI Visibility" title="Show UI Elements (Press H)">
                <svg viewBox="0 0 24 24" id="eyeIcon"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
            </button>
        </header>
    );
};

export default Header;
