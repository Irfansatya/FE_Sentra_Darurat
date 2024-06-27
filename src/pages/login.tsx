import { Component } from 'solid-js';
import LoginForm from '../components/LoginForm';

const Login: Component = () => {
  return (
    <div class="container">
      <div class="left">
        <LoginForm />
      </div>
      <div class="right">
        <h2>Layanan Darurat</h2>
        <p>Anda dapat langsung menghubungi kepolisian, pemadam kebakaran, dan ambulans dalam satu sentuhan untuk mendapatkan bantuan dengan cepat dan tepat.</p>
      </div>
    </div>
  );
};

export default Login;
