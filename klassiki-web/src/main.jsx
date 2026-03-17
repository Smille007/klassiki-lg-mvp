import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Login from './screens/Login.jsx';
import Home from './screens/Home.jsx';
import FilmDetail from './screens/FilmDetail.jsx';
import Player from './screens/Player.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="film/:id" element={<FilmDetail />} />
          <Route path="play/:id" element={<Player />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
