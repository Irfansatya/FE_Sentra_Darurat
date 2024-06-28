import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';
import App from './app';
import Login from './Login';
import Register from './Register';
import './index.css';

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
