import React from 'react';
import './App.css';
import SearchComponent from './components/Search-component';
import StoreList from './components/Store-list';
import MapWrapper from './components/MapWrapper';

/**
1. Make the backend server  to serve the static frontend build
2. The storeList component still need some styling
3. Load the stores in the map
*/

function App() {
  return (
    <div className="main-container">
      <div className="header">
        <SearchComponent />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <StoreList />
        <MapWrapper />
      </div>
    </div>
  );
}

export default App;
