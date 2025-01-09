import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from 'compoments/Navbar';
import Dashboard from './pages/Dashboard';
import ChessUsage from './pages/ChessUsage';
import AcademicWorkload from './pages/AcademicWorkload';
import Correlation from './pages/Correlation';
import HypothesisTesting from './pages/HypothesisTesting';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chess-usage" element={<ChessUsage />} />
          <Route path="/academic-workload" element={<AcademicWorkload />} />
          <Route path="/correlation" element={<Correlation />} />
          <Route path="/hypothesis-testing" element={<HypothesisTesting />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
