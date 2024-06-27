/* @refresh reload */
import './index.css';

import { render } from 'solid-js/web';
import { Router, Routes, Route } from '@solidjs/router';
import './index.css';
import App from './app';

render(
  () => (
    <Router>
      <Routes>
      <Route path="/" element={<App />} />
      </Routes>
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);