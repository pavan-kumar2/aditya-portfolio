import { useRef, useState } from "react";

const DRAG_THRESHOLD = 6;

function useFloatingBtn(buttonSize: number = 40, actionMethod: () => void, y_cord: number = 50): {
    position: { x: number; y: number };
    isDragging: boolean;
    setupDrag: (clientX: number, clientY: number, moveEvent: string, endEvent: string) => void;
} {
    const [position, setPosition] = useState({ x: 20, y: y_cord });
    const [isDragging, setIsDragging] = useState(false);

    const dragRef = useRef({ startX: 0, startY: 0, offsetX: 0, offsetY: 0 });
    const movedRef = useRef(false);

    const clampPosition = (x: number, y: number) => ({
        x: Math.max(0, Math.min(x, window.innerWidth - buttonSize)),
        y: Math.max(0, Math.min(y, window.innerHeight - buttonSize)),
    });

    const setupDrag = (clientX: number, clientY: number, moveEvent: string, endEvent: string) => {
        const rightPos = window.innerWidth - (position.x + buttonSize);
        const bottomPos = window.innerHeight - (position.y + buttonSize);
        dragRef.current = { startX: clientX, startY: clientY, offsetX: clientX - rightPos, offsetY: clientY - bottomPos };
        movedRef.current = false;
        setIsDragging(true);

        const handleMove = (evt: any) => {
            const { startX, startY, offsetX, offsetY } = dragRef.current;
            const x = evt.touches ? evt.touches[0].clientX : evt.clientX;
            const y = evt.touches ? evt.touches[0].clientY : evt.clientY;

            if (Math.abs(x - startX) > DRAG_THRESHOLD || Math.abs(y - startY) > DRAG_THRESHOLD) {
                movedRef.current = true;
                const newRight = x - offsetX;
                const newBottom = y - offsetY;
                setPosition({
                    x: clampPosition(window.innerWidth - newRight - buttonSize, 0).x,
                    y: clampPosition(0, window.innerHeight - newBottom - buttonSize).y
                });
            }
        };

        const handleEnd = () => {
            window.removeEventListener(moveEvent, handleMove);
            window.removeEventListener(endEvent, handleEnd);
            setIsDragging(false);
            if (!movedRef.current) actionMethod();
        };

        window.addEventListener(moveEvent, handleMove);
        window.addEventListener(endEvent, handleEnd);
    };


    return { position, isDragging, setupDrag };
}

export default useFloatingBtn;