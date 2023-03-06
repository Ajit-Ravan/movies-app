
import './App.css';
import Header from './components/Header/Header.js';
import SimpleBottomNavigation from './components/MainNav';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import { Container } from '@mui/system';

import Trending from './pages/Trending/Trending';
import Movies from './pages/Movies/Movies.js';
import Series from './pages/Series/Series.js';
import Search from './pages/Search/Search.js';




function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route exact path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
