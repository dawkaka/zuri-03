import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import App from './App'
import { Places } from './places';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/place-to-stay" exact element={<Places />} />
      </Routes>
    </Router>
  </React.StrictMode >
)
