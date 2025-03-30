import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCryptoDetails } from '../services/api';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import LoadingSpinner from './LoadingSpinner';

Chart.register(...registerables);

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchCryptoDetails(coinId);
      if (data) {
        const prices = data.prices.map((price) => price[1]);
        const labels = data.prices.map((price) => new Date(price[0]).toLocaleDateString());

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Price (USD)',
              data: prices,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        });
      }
      setLoading(false);
    };
    fetchData();
  }, [coinId]);

    if (loading) {
        return <LoadingSpinner />
    }

  return (
    <div>
      {chartData.labels && <Line data={chartData} />}
    </div>
  );
};

export default CryptoDetails;