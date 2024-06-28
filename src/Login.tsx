import { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { A, useNavigate } from '@solidjs/router';
import styles from './Login.module.css';
import logo from './image/logo.svg';
import googleIcon from './image/google.svg';
import facebookIcon from './image/facebook.svg';
import appleIcon from './image/apple.svg';
import hideIcon from './image/hidepassword.svg';
import showIcon from './image/showpassword.svg';

const Login: Component = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [showPassword, setShowPassword] = createSignal(false);
  const navigate = useNavigate();

  const handleLogin = (e: Event) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (email() === userData.email && password() === userData.password) {
      alert('Login successful');
      // Redirect to dashboard or homepage
      navigate('/');
    } else {
      alert('Email or password is incorrect');
    }
  };

  return (
    <div class={styles.container}>
      <div class={styles.left}>
        <div class={styles.logoContainer}>
          <img src={logo} alt="Sentra Darurat Logo" class={styles.logo} />
          <h1>Sentra Darurat</h1>
        </div>
        <h2>Masuk</h2>
        <p>Isi data diri anda dibawah ini untuk masuk</p>
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Masukkan email.." 
            class={styles.input} 
            value={email()} 
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
          <div class={styles.passwordContainer}>
            <input 
              type={showPassword() ? 'text' : 'password'} 
              placeholder="Masukkan password.." 
              class={styles.input} 
              value={password()} 
              onInput={(e) => setPassword(e.currentTarget.value)}
            />
            <span 
              class={styles.togglePassword} 
              onClick={() => setShowPassword(!showPassword())}
            >
              <img src={showPassword() ? showIcon : hideIcon} alt="Toggle Password Visibility" />
            </span>
          </div>
          <div class={styles.options}>
            <label>
              <input type="checkbox" /> Remember me 
            </label>
            <A href="#" class={styles.forgotPassword}>Lupa Password?</A>
          </div>
          <button type="submit" class={styles.loginButton}>Masuk</button>
        </form>
        <div class={styles.socialLogin}>
            <p>atau masuk dengan</p>
            <div class={styles.socialIcons}>
              <button class={styles.socialButton}>
                <img src={googleIcon} alt="Google" class={styles.socialIcon} />
              </button>
              <button class={styles.socialButton}>
                <img src={facebookIcon} alt="Facebook" class={styles.socialIcon} />
              </button>
              <button class={styles.socialButton}>
                <img src={appleIcon} alt="Apple" class={styles.socialIcon} />
              </button>
            </div>
          </div>
        <p>Anda belum memiliki akun? <A href="/" class={styles.createAccount}>Buat Akun</A></p>
      </div>
      <div class={styles.right}>
        <h2>Layanan Darurat</h2>
        <p>
          Anda dapat langsung menghubungi kepolisian, pemadam kebakaran, dan ambulans dalam
          satu sentuhan untuk mendapatkan bantuan dengan cepat dan tepat.
        </p>
      </div>
    </div>
  );
};

export default Login;