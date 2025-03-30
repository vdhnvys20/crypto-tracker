Hey there! 

This project is a cryptocurrency tracker built with React, Bootstrap, and the CoinGecko API.
It's designed to give you a quick and easy way to keep an eye on the crypto market, track crypto coins and dive into historical data.

Features:

 Real-Time Prices: Get up-to-the-minute prices for a wide range of cryptocurrencies.
 Detailed Coin Info: Check out market cap, 24-hour highs and lows, and more.
 Charts: Visualize trends with interactive charts.
 Watchlist: Keep track of your favorite coins in a personalized watchlist.
 Search Functionality: Quickly find the coins you're looking for.
 Responsive Design: Works smoothly on desktops and mobile devices.

 Tech Stack

 React: For building the user interface.
 Bootstrap: For responsive layout.
 CoinGecko API: For fetching cryptocurrency data.
 Axios: For making HTTP requests.
 Chart.js & React-Chartjs-2: For creating charts.

How to setup?

1.  Clone the Repo:

    git clone [your-repo-url]
    cd crypto-tracker

2.  Install Dependencies:
    
    npm install

3.  Run the App:

    npm start

    This will start the development server, and you can see the app in your browser at 
    "http://localhost:3000".

Project Structure: 

crypto-tracker/
├── public/                
├── src/                   
│   ├── components/       
│   │   ├── CryptoList.js
│   │   ├── CryptoDetails.js
│   │   ├── Watchlist.js
│   │   ├── SearchBar.js
│   │   ├── LoadingSpinner.js
│   ├── services/       
│   │   └── api.js
│   ├── context/           
│   │   └── WatchlistContext.js
│   ├── App.js             
│   ├── index.js          
│   ├── index.css          
├── package.json          
└── README.md             

Future Improvements:

Implement authentication to save watchlist.
Add more advanced chart options and technical indicators.
Explore caching API responses for better performance.
add more detailed information to the home page cards.

Feel free to fork this repo and submit pull requests. I'm always open to suggestions and improvements!

Thanks!

Created by:

vidhanvys20
