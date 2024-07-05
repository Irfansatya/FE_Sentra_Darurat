import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';
import App from './app';
import Login from './Login';
import Register from './Register';
import './index.css';
import './fonts.css';
import Admin from './admin';

render(() => <Admin />, document.getElementById('root'));

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={Admin} />
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
