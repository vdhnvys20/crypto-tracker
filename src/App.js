import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import CryptoList from './components/CryptoList';
import CryptoDetails from './components/CryptoDetails';
import Watchlist from './components/Watchlist';
import { WatchlistProvider } from './context/WatchlistContext';
import SearchBar from './components/SearchBar';

function App() {
    const [filteredCoins, setFilteredCoins] = useState([]);
    return (
        <WatchlistProvider>
            <Router>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand>Crypto Tracker</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/watchlist">Watchlist</Nav.Link>
                            </Nav>
                            <SearchBar onSearch={setFilteredCoins} />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container className="mt-4">
                    <Routes>
                        <Route path="/" element={<CryptoList filteredCoins={filteredCoins} />} />
                        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                        <Route path="/watchlist" element={<Watchlist />} />
                    </Routes>
                </Container>
            </Router>
        </WatchlistProvider>
    );
}

export default App;