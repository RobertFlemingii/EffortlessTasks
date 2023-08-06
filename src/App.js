import React from 'react';
import './App.css';
import Header from './components/Header'; // Import the Header component
import Dashboard from './components/Dashboard'; // Import the Dashboard component

function App() {
  return (
    <div className="App">
      <Header /> {/* Render the Header component */}
      <main>
        <Dashboard /> {/* Render the Dashboard component */}
      </main>
    </div>
  );
}

export default App;
