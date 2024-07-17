import { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import LandingPage from './landingpage';
import Admin from './admin';
import LoginPopUp from './LoginPopUp';
import RegisterPopUp from './RegisterPopUp';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" component={LandingPage} />
      <Route path="/loginpopup" component={LoginPopUp} />
      <Route path="/registerpopup" component={RegisterPopUp} />
      <Route path="/admin" component={Admin} />
    </Routes>
  );
};

export default App;
