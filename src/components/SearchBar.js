import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { fetchCoinList } from '../services/api';
import LoadingSpinner from './LoadingSpinner';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [coinList, setCoinList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getList = async () => {
            setLoading(true);
            const list = await fetchCoinList();
            setCoinList(list);
            setLoading(false);
        }
        getList();
    }, []);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        const filteredCoins = coinList.filter(coin => coin.name.toLowerCase().includes(e.target.value.toLowerCase()));
        onSearch(filteredCoins);
    };

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <Form.Control
            type="text"
            placeholder="Search Cryptocurrencies..."
            value={searchTerm}
            onChange={handleChange}
        />
    );
}

export default SearchBar;