import { Component, onCleanup, onMount } from 'solid-js';
import { createSignal } from 'solid-js';
import { A, useNavigate } from '@solidjs/router';
import CryptoJS from 'crypto-js';
import styles from './Login.module.css';
import logo from './image/logo.svg';
import googleIcon from './image/google.svg';
import facebookIcon from './image/facebook.svg';
import appleIcon from './image/apple.svg';
import hideIcon from './image/hidepassword.svg';
import showIcon from './image/showpassword.svg';

const slides = [
  {
    title: 'Layanan Darurat',
    text: 'Anda dapat langsung menghubungi kepolisian, pemadam kebakaran, dan ambulans dalam satu sentuhan untuk mendapatkan bantuan dengan cepat dan tepat.',
  },
  {
    title: 'Pelaporan Situasi',
    text: 'Laporkan situasi darurat dengan mudah melalui fitur pelaporan kami. Kirimkan detail situasi dan foto langsung dari lokasi kejadian untuk membantu petugas merespons.',
  },
  {
    title: 'Lokasi GPS',
    text: 'Dilengkapi dengan fitur pelacakan lokasi GPS yang akurat. Pastikan petugas darurat dapat menemukan lokasi Anda dengan tepat, sehingga bantuan bisa segera tiba.',
  },
];

const Login: Component = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [showPassword, setShowPassword] = createSignal(false);
  const [error, setError] = createSignal('');
  const [currentSlide, setCurrentSlide] = createSignal(0);

  const navigate = useNavigate();

  const handleLogin = (e: Event) => {
    e.preventDefault();

    const userDataString = localStorage.getItem('userData');
    if (!userDataString) {
      setError('No user data found. Please register first.');
      return;
    }

    const userData = JSON.parse(userDataString);
    const hashedPassword = CryptoJS.SHA256(password()).toString();

    if (email() === userData.email && hashedPassword === userData.password) {
      alert('Login successful');
      navigate('/');
    } else {
      setError('Email or password is incorrect');
    }
  };

  onMount(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    onCleanup(() => clearInterval(interval));
  });

  return (
    <div class={styles.container}>
      <div class={styles.logoContainer}>
        <img src={logo} alt="Sentra Darurat Logo" class={styles.logo} />
        <h1 class={styles.appName}>Sentra Darurat</h1>
      </div>
      <div class={styles.left}>
        <label class={styles.masuk}>Masukkan Akun Anda.</label>
        <form onSubmit={handleLogin}>
          <label class={styles.label}>Email</label>
          <input
            type="email"
            placeholder="Masukkan email.."
            class={styles.input}
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
          <label class={styles.labelpassword}>Password</label>
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
          {error() && <p class={styles.error}>{error()}</p>}
          <button type="submit" class={styles.loginButton}>Masuk</button>
        </form>
        <div class={styles.socialLogin}>
          <div class={styles.separator}>
            <span>atau masuk dengan</span>
          </div>
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
        <div class={styles.akun}>
          <p>Anda belum memiliki akun? <A href="/register" class={styles.createAccount}>Buat Akun</A></p>
        </div>
      </div>
      <div class={styles.right}>
        <h2>{slides[currentSlide()].title}</h2>
        <p>{slides[currentSlide()].text}</p>
        <div class={styles.indicators}>
          {slides.map((_, index) => (
            <span
              class={currentSlide() === index ? styles.activeIndicator : styles.indicator}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;