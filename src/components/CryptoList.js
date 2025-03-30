import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Pagination, Alert } from 'react-bootstrap';
import { fetchCryptoData } from '../services/api';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const CryptoList = ({ filteredCoins }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8; // Adjust items per page for card layout.

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCryptoData(currentPage, itemsPerPage);
        setCryptoData(data);
        setTotalPages(Math.ceil(250 / itemsPerPage));
      } catch (err) {
        setError('Failed to fetch crypto data. Please try again.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const displayData = filteredCoins.length > 0 ? filteredCoins : cryptoData;

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <div>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {displayData.map((crypto) => (
          <Col key={crypto.id}>
            <Card className="crypto-card">
              <Card.Img variant="top" src={crypto.image} className="crypto-image" />
              <Card.Body>
                <Card.Title>{crypto.name}</Card.Title>
                <Card.Text>
                  Price: <span className="price">${crypto.current_price}</span>
                  <br />
                  Market Cap: ${crypto.market_cap}
                </Card.Text>
                <Link to={`/crypto/${crypto.id}`}>
                  <button className="crypto-details-button">View Details</button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination className="justify-content-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default CryptoList;