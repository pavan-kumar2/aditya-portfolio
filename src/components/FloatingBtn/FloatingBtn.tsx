import React, { useRef, useState } from 'react'
import './FloatingBtn.css';
import { images } from '../../utils/image';

const DRAG_THRESHOLD = 6;
const WHATSAPP_URL = 'https://wa.me/919876543210';
const BUTTON_SIZE = 60;

const FloatingBtn: React.FC = () => {
    const [position, setPosition] = useState({ x: 20, y: 200 });
    const [isDragging, setIsDragging] = useState(false);

    const dragRef = useRef({ startX: 0, startY: 0, offsetX: 0, offsetY: 0 });
    const movedRef = useRef(false);

    const clampPosition = (x: number, y: number) => ({
        x: Math.max(0, Math.min(x, window.innerWidth - BUTTON_SIZE)),
        y: Math.max(0, Math.min(y, window.innerHeight - BUTTON_SIZE)),
    });

    const setupDrag = (clientX: number, clientY: number, moveEvent: string, endEvent: string) => {
        dragRef.current = { startX: clientX, startY: clientY, offsetX: clientX - position.x, offsetY: clientY - position.y };
        movedRef.current = false;
        setIsDragging(true);

        const handleMove = (evt: any) => {
            const { startX, startY, offsetX, offsetY } = dragRef.current;
            const x = evt.touches ? evt.touches[0].clientX : evt.clientX;
            const y = evt.touches ? evt.touches[0].clientY : evt.clientY;

            if (Math.abs(x - startX) > DRAG_THRESHOLD || Math.abs(y - startY) > DRAG_THRESHOLD) {
                movedRef.current = true;
                setPosition(clampPosition(x - offsetX, y - offsetY));
            }
        };

        const handleEnd = () => {
            window.removeEventListener(moveEvent, handleMove);
            window.removeEventListener(endEvent, handleEnd);
            setIsDragging(false);
            if (!movedRef.current) window.open(WHATSAPP_URL, '_blank');
        };

        window.addEventListener(moveEvent, handleMove);
        window.addEventListener(endEvent, handleEnd);
    };

    return (
        <div
            className="draggable-btn"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: isDragging ? 'grabbing' : 'grab',
            }}
            onMouseDown={(e) => setupDrag(e.clientX, e.clientY, 'mousemove', 'mouseup')}
            onTouchStart={(e) => setupDrag(e.touches[0].clientX, e.touches[0].clientY, 'touchmove', 'touchend')}
            role="button"
            tabIndex={0}
            aria-label="Contact on WhatsApp"
        >
            <img src={images.whatsappLogo} alt="WhatsApp" />
        </div>
    );
};

export default FloatingBtn;