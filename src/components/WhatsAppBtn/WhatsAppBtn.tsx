import { images } from '../../utils/image'
import useFloatingBtn from '../../hooks/useFloatingBtn';

const WHATSAPP_URL = 'https://wa.me/919876543210';
const BuTTON_SIZE = 40;

const WhatsAppBtn = () => {

    const { position, isDragging, setupDrag } = useFloatingBtn(BuTTON_SIZE, handleClick, 50);


    function handleClick() {
        window.open(WHATSAPP_URL, '_blank')
    };


    return (
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
            <img src={images.whatsappLogo} alt="WhatsApp" />
        </div>
    )
}

export default WhatsAppBtn