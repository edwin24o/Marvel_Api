import { Link } from 'react-router-dom';
import './BrowseCharacters.css';

const BrowseCharacters = () => {
    const characters = [
        { id: 1, name: 'Spider-Man' },
        { id: 2, name: 'Iron Man' },
        { id: 3, name: 'Thor' },
        { id: 4, name: 'Black Widow' },
        { id: 5, name: 'Hulk' }
    ];

    return (
        <div className="browse-container">
            <h2 className="browse-title">Browse Characters</h2>
            <ul className="character-list">
                {characters.map((character) => (
                    <li key={character.id} className="character-item">
                        <Link to={`/characters/${character.id}`} className="character-link">
                            {character.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrowseCharacters;

