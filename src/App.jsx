import React, { useState, useEffect } from 'react'; // added useState and useEffect
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import ClientFeedback from './Components/ClientFeedback/ClientFeedback';
import Survey from './Components/Survey/Survey';

function Home() {
  const location = useLocation(); // set app.jsx location as home page
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (location.state?.showPopup) {
      setShowPopup(true);
    }
  }, [location]);
  return (
    <div className="App">
      <h1>Main Page</h1>
      <div className="button-container">
        <Link to="/survey">
          <button>Go to Survey</button>
        </Link>
        <Link to="/client-feedback">
          <button>Go to Client Feedback</button>
        </Link>
      </div>

      {/*Popup Dialog*/}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Client Points Increased</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/client-feedback" element={<ClientFeedback />} />
      </Routes>
    </Router>
  );
}

export default App;
