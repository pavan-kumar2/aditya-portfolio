import React, { useRef, useState } from 'react'
import './FloatingBtn.css';
import { images } from '../../utils/image';

const DRAG_THRESHOLD = 6; // px

type Props = {}

const FloatingBtn = (props: Props) => {
    const [position, setPosition] = useState({ x: 20, y: 200 });

    const start = useRef({ x: 0, y: 0 });
    const offset = useRef({ x: 0, y: 0 });
    const isDragging = useRef(false);
    const hasMoved = useRef(false);

    /* ---------- MOUSE ---------- */
    const onMouseDown = (e: React.MouseEvent) => {
        start.current = { x: e.clientX, y: e.clientY };
        offset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };

        hasMoved.current = false;
        isDragging.current = true;

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
        const dx = Math.abs(e.clientX - start.current.x);
        const dy = Math.abs(e.clientY - start.current.y);

        if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) {
            hasMoved.current = true;

            setPosition({
                x: e.clientX - offset.current.x,
                y: e.clientY - offset.current.y,
            });
        }
    };

    const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);

        if (!hasMoved.current) {
            handleClick();
        }

        isDragging.current = false;
    };

    /* ---------- TOUCH ---------- */
    const onTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];

        start.current = { x: touch.clientX, y: touch.clientY };
        offset.current = {
            x: touch.clientX - position.x,
            y: touch.clientY - position.y,
        };

        hasMoved.current = false;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        const dx = Math.abs(touch.clientX - start.current.x);
        const dy = Math.abs(touch.clientY - start.current.y);

        if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) {
            hasMoved.current = true;

            setPosition({
                x: touch.clientX - offset.current.x,
                y: touch.clientY - offset.current.y,
            });
        }
    };

    const onTouchEnd = () => {
        if (!hasMoved.current) {
            handleClick();
        }
    };

    /* ---------- CLICK ACTION ---------- */
    const handleClick = () => {
        alert("Button clicked!");
        // open modal / navigate / etc
    };



    return (
        <div
            className="draggable-btn"
            style={{ left: position.x, top: position.y }}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            +
            <a href="https://wa.me/919876543210">
                <img src={images.whatsappLogo} alt="Contact Us" />
            </a>
        </div>

    )
}

export default FloatingBtn