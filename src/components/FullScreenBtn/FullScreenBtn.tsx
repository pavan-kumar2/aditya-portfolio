import React from 'react'
import useFloatingBtn from '../../hooks/useFloatingBtn';
// import { images } from '../../utils/image';
import './FullScreenBtn.css';


// type Props = {}
const BuTTON_SIZE = 40;

const FullScreenBtn = () => {
    const [isFullscreen, setIsFullscreen] = React.useState(false);

    const { position, isDragging, setupDrag } = useFloatingBtn(BuTTON_SIZE, toggleFullscreen, 100);

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    return (
        <>
            <div
                className="draggable-btn"
                style={{
                    right: `${position.x}px`,
                    bottom: `${position.y}px`,
                    cursor: isDragging ? 'grabbing' : 'grab',
                }}
                onMouseDown={(e) => setupDrag(e.clientX, e.clientY, 'mousemove', 'mouseup')}
                onTouchStart={(e) => setupDrag(e.touches[0].clientX, e.touches[0].clientY, 'touchmove', 'touchend')}
                role="button"
                tabIndex={0}
                aria-label="Contact on WhatsApp"
            >
                <svg viewBox="0 0 24 24">
                    {isFullscreen ? (
                        <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
                    ) : (
                        <path d="M16 3h3a2 2 0 0 1 2 2v3m-18 0V5a2 2 0 0 1 2-2h3m0 18H5a2 2 0 0 1-2-2v-3m18 0v3a2 2 0 0 1-2 2h-3"></path>
                    )}
                </svg>
                {/* </button> */}
            </div>
        </>



    )
}

export default FullScreenBtn