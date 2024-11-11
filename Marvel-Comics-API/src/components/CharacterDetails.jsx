// src/components/CharacterDetails.jsx
import { useParams, useNavigate } from 'react-router-dom';
import './CharacterDetails.css';

const characterData = {
    1: { name: 'Spider-Man', description: 'Friendly neighborhood Spider-Man.' },
    2: { name: 'Iron Man', description: 'Genius, billionaire, playboy, philanthropist.' },
    3: { name: 'Thor', description: 'God of Thunder, protector of Asgard.' },
    4: { name: 'Black Widow', description: 'Master spy and martial artist.' },
    5: { name: 'Hulk', description: 'The strongest Avenger with a little anger issue.' }
};

const CharacterDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate(); // Hook to navigate programmatically
    const character = characterData[id];

    if (!character) {
        return <p className="not-found-message">Character not found!</p>;
    }

    return (
        <div className="character-details-container">
            <h2 className="character-details-title">{character.name}</h2>
            <p className="character-description">{character.description}</p>
            <button className="back-button" onClick={() => navigate('/characters')}>
                Go Back
            </button>
        </div>
    );
};

export default CharacterDetails;
