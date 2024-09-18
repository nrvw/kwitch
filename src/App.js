import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StreamPage from './components/StreamPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StreamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
