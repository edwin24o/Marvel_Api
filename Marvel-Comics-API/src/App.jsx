import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import NotFound from './components/NotFound';
import './components/Navbar.css';
import './App.css'; 

const App = () => {
    return (
        <Router>
            <nav className="navbar">
                <NavLink to="/" className="navbar-link">Home</NavLink>
                <NavLink to="/characters" className="navbar-link">Browse Characters</NavLink>
                <NavLink to="/comics" className="navbar-link">Comics</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<BrowseCharacters />} />
                <Route path="/characters/:id" element={<CharacterDetails />} />
                <Route path="/comics" element={<Comics />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
