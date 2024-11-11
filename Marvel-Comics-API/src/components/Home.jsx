import { useNavigate } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    const navigate = useNavigate(); 

    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to the Comic Book Library!</h1>
            <p className="home-description"> Dive into the amazing world of superheroes, villains, and epic stories. Browse your favorite characters or explore the latest comics!</p>
            <button className="start-exploring-button" onClick={() => navigate('/characters')}>
                Start Exploring
            </button>
        </div>
    );
};


export default Home;
