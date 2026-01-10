import React from "react";

import "./Header.css";
import { useDispatch } from "react-redux";
import App from "../../App";
import { openOverlay_as } from "../../features/overlay/overlaySlice"

type Props = {};

const Header = (props: Props) => {
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
                <a onClick={openOverlay("home")}>Home</a>
                <a onClick={openOverlay("about")}>About</a>
                <a onClick={openOverlay("testimonials")}>Testimonials</a>
                <a onClick={openOverlay("contact")}>Contact</a>
                <a onClick={openOverlay("gallery")}>Gallery</a>

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
        </header>
    );
};

export default Header;
