import { Component } from 'solid-js';
import { Link } from '@solidjs/router';

const Home: Component = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;