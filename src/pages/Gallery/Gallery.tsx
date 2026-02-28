
import { useNavigate } from 'react-router-dom'
import './Gallery.css'
import forest from "../../assets/images/forest-whispers.jpg";

interface GalleryCard {
    id: number;
    image: string;
    eventName: string;
}

type Props = {}

const Gallery = (props: Props) => {
    const navigate = useNavigate();
    const galleryCards: GalleryCard[] = [
        { id: 1, image: forest, eventName: "Forest Whispers" },
        { id: 2, image: forest, eventName: "Mountain Adventure" },
        { id: 3, image: forest, eventName: "Sunset Hike" },
        { id: 4, image: forest, eventName: "Nature Trail" },
        { id: 5, image: forest, eventName: "Summer Expedition" },
        { id: 6, image: forest, eventName: "Alpine Journey" },
        { id: 7, image: forest, eventName: "Desert Exploration" },
    ];

    return (
        <div className='gallery-container'>
            {galleryCards.map((card) => (
                <div key={card.id} className="gallery-card" onClick={() => navigate(`/gallery/${card.id}/view`)}>
                    <img src={card.image} alt={card.eventName} className="card-image" />
                    <div className="card-content">
                        {card.eventName}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Gallery