import React from "react";

import "./Header.css";
import { useDispatch } from "react-redux";
// import App from "../../App";
import { openOverlay_as } from "../../features/overlay/overlaySlice"
import { Link } from "react-router-dom";

// type Props = {};


// const Header = (props: Props) => {
const Header = () => {

    const useAppDispatch = useDispatch()

    const openOverlay = (id: string) => () => {
        useAppDispatch(openOverlay_as({ payload: id, type: "oveerlay/openOverlay_as" }))
    };


    return (
        <header className="ui-element">
            <div className="logo">Aditya Portfolio</div>

            <nav id="mainNav">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/?section=about">About</Link>
                <Link to="/?section=testimonials">Testimonials</Link>


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
