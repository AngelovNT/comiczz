import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ComicsPage from './pages/ComicsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComicsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
