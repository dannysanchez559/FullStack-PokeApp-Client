import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/home';
import TopListScreen from './screens/toplist';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="Nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/toplist">My Favorites</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/toplist" element={<TopListScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
