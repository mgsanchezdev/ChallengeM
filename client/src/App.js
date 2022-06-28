import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './routes/AllRoutes';
import NavBar from './components/NavBar/Navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <AllRoutes />
    </Router>
  );
}

export default App;
