import React from 'react';
import Header from './layout/Header';

function App() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: '10vh', textAlign: 'center' }}>
        <h1>Welcome to ShareDeX</h1>
      </main>
    </div>
  );
}

export default App;
