import React, { useContext, useEffect, useState } from 'react';
import { WatchlistContext } from '../context/WatchlistContext';
import { fetchCryptoData } from '../services/api';
import { Table, Button } from 'react-bootstrap';
import LoadingSpinner from './LoadingSpinner';

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);
  const [watchlistData, setWatchlistData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (watchlist.length > 0) {
        const data = await fetchCryptoData(1, 250);
        const filteredData = data.filter((coin) => watchlist.includes(coin.id));
        setWatchlistData(filteredData);
      } else {
        setWatchlistData([]);
      }
      setLoading(false);
    };
    fetchData();
  }, [watchlist]);

    if (loading) {
        return <LoadingSpinner />
    }

  return (
    <div>
      <h2>Watchlist</h2>
      {watchlistData.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price (USD)</th>
              <th>Market Cap</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {watchlistData.map((coin) => (
              <tr key={coin.id}>
                <td>{coin.name}</td>
                <td>${coin.current_price}</td>
                <td>${coin.market_cap}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => removeFromWatchlist(coin.id)}>
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Your watchlist is empty.</p>
      )}
    </div>
  );
};

export default Watchlist;