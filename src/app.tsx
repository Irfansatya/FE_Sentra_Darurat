import { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import Home from './pages/home';
import About from './pages/about';
import Login from './pages/login';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default App;