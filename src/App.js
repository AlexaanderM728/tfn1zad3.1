import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import NoFoundPage from './pages/NoFoundPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/service" element={<ServicePage/>}/>
      <Route path='/contact' element={<ContactPage/>}>
          <Route path=':locale' element={<ContactPage/>}/>
          <Route path="*" element={<NoFoundPage/>}/>
      </Route>
      <Route path="*" element={<NoFoundPage/>}/>
    </Routes>
  </Router>
);

export default App;
